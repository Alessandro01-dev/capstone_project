import { useMemo, useState, useCallback, useRef } from 'react';
import { GoogleMap, Marker, MarkerClusterer, OverlayView } from '@react-google-maps/api';
import classes from './TutorMap.module.css';
import { Popover } from 'react-bootstrap';
import CloseIcon from '../../../assets/CloseIcon';
import { useNavigate } from 'react-router-dom';

const TutorMap = ({ tutors, center, zoom }) => {
  const [activePopover, setActivePopover] = useState(null);
  const mapRef = useRef(null);
  const navigate = useNavigate();

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const safeTutors = tutors || [];

  const visibleTutorsWithJitter = useMemo(() => {
    const coordinateCounts = {};
    const JITTER_AMOUNT = 0.00015;

    return safeTutors
      .filter(t => t.location?.geo?.coordinates?.length === 2)
      .map(tutor => {
        const lng = tutor.location.geo.coordinates[0];
        const lat = tutor.location.geo.coordinates[1];
        const key = `${lat.toFixed(6)},${lng.toFixed(6)}`;

        if (coordinateCounts[key]) {
          const count = coordinateCounts[key];
          coordinateCounts[key]++;
          return {
            ...tutor,
            displayPos: {
              lat: lat + (Math.sin(count) * JITTER_AMOUNT * count),
              lng: lng + (Math.cos(count) * JITTER_AMOUNT * count)
            }
          };
        }
        coordinateCounts[key] = 1;
        return { ...tutor, displayPos: { lat, lng } };
      });
  }, [safeTutors]);

  const hiddenCount = safeTutors.length - visibleTutorsWithJitter.length;

  const handleMarkerClick = (tutorId) => {
    setActivePopover(activePopover === tutorId ? null : tutorId);
  };

  if (!center) return null;
  return (
    <div className={classes['map-container']}>

      {hiddenCount > 0 && (
        <div className={classes['map-info-banner']}>
          <small>
            {hiddenCount} {hiddenCount === 1 ? 'user' : 'users'} not shown on map (no precise location shared).
            Check the <b>List View</b> to see everyone.
          </small>
        </div>
      )}

      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '32px' }}
        center={center}
        zoom={zoom}
        options={{
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          zoomControl: false,
          disableDefaultUI: true,
          gestureHandling: "cooperative",
          isFractionalZoomEnabled: true,
          clickableIcons: false,
        }}
        onLoad={onLoad}
      >
        <MarkerClusterer>
          {(clusterer) =>
            visibleTutorsWithJitter.filter(tutor => tutor.location?.geo?.coordinates && tutor.location.geo.coordinates.length === 2)
              .map((tutor) => (
                <Marker
                  key={tutor._id}
                  position={tutor.displayPos}
                  icon={{
                    path: window.google.maps.SymbolPath.CIRCLE,
                    fillColor: '#ea4335',
                    fillOpacity: 1,
                    strokeWeight: 1,
                    strokeColor: 'white',
                    scale: 5,
                    anchor: new window.google.maps.Point(0, 0),
                  }}
                  clusterer={clusterer}
                  onClick={() => handleMarkerClick(tutor._id)}
                >
                  <OverlayView
                    position={tutor.displayPos}
                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                  >
                    <div>
                      <div
                        onClick={() => handleMarkerClick(tutor._id)}
                        className={classes['avatar-container']}
                      >
                        <img
                          src={tutor.avatar}
                          alt={tutor.name}
                          className={classes['avatar-img']}
                        />
                      </div>
                      {activePopover === tutor._id && (
                        <Popover
                          className={classes['custom-popover']}
                          placement='top'
                          arrowProps={{
                            style: {
                              position: 'absolute',
                              left: '50%',
                              transform: 'translateX(-50%)',
                            },
                          }}
                        >
                          <Popover.Header
                            className='bg-white border-0'
                          >
                            <div
                              className={`${classes[`custom-popover-header`]} d-flex align-items-center justify-content-between`}
                              onClick={() => navigate(`/tutors/${tutor._id}`)}
                            >
                              <strong
                                className='m-0'
                              >{`${tutor.name} ${tutor.surname}`}</strong>
                              <div
                                className='cursor-pointer'
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setActivePopover(null)
                                }}
                              >
                                <CloseIcon />
                              </div>
                            </div>
                          </Popover.Header>
                          <Popover.Body
                            className='pt-0'
                          >
                            {tutor.bio?.slice(0, 80)}...
                            <br />
                            <small className="text-success fw-bold">
                              {tutor.distanceKm ? (
                                <>Distance: {tutor.distanceKm.toFixed(1)} km away</>
                              ) : (
                                <>Location: {tutor.location.city}, {" "}{tutor.location.country}</>
                              )}
                            </small>
                          </Popover.Body>
                        </Popover>
                      )}
                    </div>
                  </OverlayView>
                </Marker>
              ))
          }
        </MarkerClusterer>
      </GoogleMap>
    </div>
  );
};

export default TutorMap;
