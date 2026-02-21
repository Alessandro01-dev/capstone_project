import { useState } from 'react';
import { GoogleMap, Marker, MarkerClusterer, OverlayView } from '@react-google-maps/api';
import classes from './TutorMap.module.css';
import { Popover } from 'react-bootstrap';
import CloseIcon from '../../../assets/CloseIcon';
import { useNavigate } from 'react-router-dom';

const TutorMap = ({ tutors, center, searchMode }) => {

  const [activePopover, setActivePopover] = useState(null);

  const navigate = useNavigate()

  const renderCustomMarkerSVG = () => {
    return `
       <svg fill="#ea4335" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <circle cx="12" cy="12" r="10" fill="#ea4335" />
        </g>
      </svg>
    `;
  };

  const handleMarkerClick = (tutorId) => {
    if (activePopover === tutorId) {
      setActivePopover(null);
    } else {
      setActivePopover(tutorId);
    }
  };

  return (
    <div className={classes['map-container']}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '32px' }}
        center={center}
        zoom={12}
        options={{
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          zoomControl: false,
          disableDefaultUI: true,
          gestureHandling: "cooperative",
        }}
        onLoad={() => console.log('Maps API has loaded.')}
      >
        <MarkerClusterer>
          {(clusterer) =>
            tutors.map((tutor) => (
              <Marker
                key={tutor._id}
                position={{
                  lat: tutor.location.coordinates[1],
                  lng: tutor.location.coordinates[0],
                }}
                icon={{
                  url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(renderCustomMarkerSVG())}`,
                  scaledSize: new window.google.maps.Size(10, 10),
                  anchor: new window.google.maps.Point(5, 5),
                }}
                clusterer={clusterer}
                onClick={() => handleMarkerClick(tutor._id)}
              >
                <OverlayView
                  position={{
                    lat: tutor.location.coordinates[1],
                    lng: tutor.location.coordinates[0],
                  }}
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
                            Distance {searchMode === 'location' ? 'from your location' : 'from the city centre'}: {" "}
                            {tutor.distanceKm?.toFixed(1)} km
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
