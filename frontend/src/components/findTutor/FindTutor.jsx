import { useState, useEffect } from 'react';
import ToggleListOrMap from './toggleListOrMap/ToggleListOrMap';
import SearchModeSelector from './searchModeSelector/SearchModeSelector';
import TutorMap from './tutorMap/TutorMap';
import TutorCard from './tutorCard/TutorCard';
import { Alert, Button, Container, Row, Spinner } from 'react-bootstrap';
import notutorfound from '../../assets/no_tutor_found.webp'
import useUsers from '../../hooks/useUsers';
import { getZoomByDistance } from '../../utils/getZoomByDistance';
import classes from './FindTutor.module.css'

const FindTutor = ({ isLoaded }) => {

  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(false);
  const [viewMode, setViewMode] = useState('list');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchMode, setSearchMode] = useState('location');
  const [distance, setDistance] = useState(60)

  const { getUsersNear, usersData, setUsersData, usersIsLoading } = useUsers()

  useEffect(() => {

    setUsersData(null);

    if (searchMode === 'location') {
      setLocationError(false);
    }
  }, [searchMode, setUsersData]);

  useEffect(() => {
    if (searchMode === 'location' && !userLocation && navigator.geolocation) {
      setSelectedPlace(null);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationError(false);
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
          setLocationError(true)
        }
      );
    }
  }, [searchMode, userLocation]);

  const isLocationDisabled = searchMode === 'location' && locationError;

  useEffect(() => {
    const fetchTutors = async () => {

      if (searchMode === 'city' && selectedPlace?.placeId) {

        await getUsersNear(null, null, null, selectedPlace.cityName, selectedPlace.placeId);
        return;
      }

      if (searchMode === 'location' && userLocation) {

        await getUsersNear(userLocation.lat, userLocation.lng, distance, null, null);
      }
    };

    fetchTutors();
  }, [searchMode, selectedPlace?.placeId, userLocation, distance]);


  const handleToggleView = () => {
    setViewMode(viewMode === 'list' ? 'map' : 'list');
  };

  const mapZoom = searchMode === 'city'
    ? 12
    : getZoomByDistance(distance);

  if (!isLoaded) return (
    <Spinner
      className='mx-auto'
    />
  )

  return (
    <>
      <SearchModeSelector
        isLoaded={isLoaded}
        searchMode={searchMode}
        setSearchMode={setSearchMode}
        setCity={setSelectedPlace}
        distance={distance}
        setDistance={setDistance}
      />

      <div
        className='d-flex align-items-center justify-content-between mb-5'
      >
        <h2
          className='m-0'
        >
          {isLocationDisabled
            ? "Location required"
            : usersIsLoading
              ? "Searching..."
              : (usersData && (userLocation || selectedPlace))
                ? `${usersData.length || 0} mates found`
                : "Find your tutor"}
        </h2>
        <ToggleListOrMap
          viewMode={viewMode}
          onToggle={handleToggleView}
        />
      </div>

      {isLocationDisabled && (
        <Container className="mb-4">
          <Alert variant="warning" className="text-center rounded-4 border-0 shadow-sm">
            <Alert.Heading>Location services are disabled</Alert.Heading>
            <p>
              To find tutors near you, please enable location permissions in your browser or
              <b> switch to "Search by City"</b> mode.
            </p>
            <Button
              variant="warning"
              size="sm"
              onClick={() => {
                setSearchMode('city')
                setLocationError(false);
              }}
            >
              Switch to Search by City
            </Button>
          </Alert>
        </Container>
      )}

      {viewMode === 'list' && (
        <Container
          className='py-5'
        >
          <Row
            className='g-4'
          >
            {usersIsLoading ? (
              <div className="d-flex justify-content-center my-5">
                <Spinner className='mx-auto' />
              </div>
            ) : usersData?.length > 0 ? (
              usersData.map(tutor => <TutorCard key={tutor._id} tutor={tutor} />)
            ) : usersData === null ? (
              <div className={classes["empty-state-container"]}>
                <p className="text-muted">Select a city or enable GPS to see mates...</p>
              </div>
            ) : (
              <div
                className={`${classes['empty-state-container']} d-flex flex-column gap-3`}
              >
                <p
                  className={`${classes['no-tutor-found-msg']} m-0 mx-auto text-center`}
                >There doesn't seem to be anyone around here...</p>
                <div
                  className={classes['no-tutor-found-img-container']}
                >
                  <img
                    className='w-100 object-fit-cover d-block'
                    src={notutorfound}
                    alt="no tutor found image"
                  />
                </div>
              </div>
            )}

          </Row>
        </Container>
      )}

      {viewMode === 'map' && (
        <div className={classes["map-container"]}>
          {isLocationDisabled ? (
            <div className="h-100 d-flex align-items-center justify-content-center bg-light rounded-5">
              <p className="text-muted text-center m-0">Map unavailable without location permissions</p>
            </div>
          ) : (userLocation || selectedPlace) ? (
            <TutorMap
              tutors={usersData}
              center={searchMode === 'city' ? selectedPlace : userLocation}
              zoom={mapZoom}
            />
          ) : (
            <div className={classes["empty-state-container"]}>
              <p className="text-muted">Select a city to see mates...</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FindTutor;
