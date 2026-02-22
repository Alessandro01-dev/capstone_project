import { useState, useEffect } from 'react';
import ToggleListOrMap from './toggleListOrMap/ToggleListOrMap';
import SearchModeSelector from './searchModeSelector/SearchModeSelector';
import TutorMap from './tutorMap/TutorMap';
import TutorCard from './tutorCard/TutorCard';
import { Container, Row, Spinner } from 'react-bootstrap';
import NoTutorFoundIcon from '../../assets/NoTutorFoundIcon';
import useUsers from '../../hooks/useUsers';

const FindTutor = () => {

  const [userLocation, setUserLocation] = useState(null);
  const [viewMode, setViewMode] = useState('list');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchMode, setSearchMode] = useState('location');
  const [distance, setDistance] = useState(60)

  const { getUsersNear, usersData, usersIsLoading } = useUsers()

  useEffect(() => {
    if (searchMode === 'location' && !userLocation && navigator.geolocation) {
      setSelectedPlace(null);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, [searchMode]);

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

  return (
    <>
      <SearchModeSelector
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
          {usersIsLoading ? "Searching..." : `${usersData?.length} ${usersData?.length === 1 ? 'mate' : 'mates'} found`}

        </h2>
        <ToggleListOrMap
          viewMode={viewMode}
          onToggle={handleToggleView}
        />
      </div>

      {viewMode === 'list' && (
        <Container
          className='vh-100'
        >
          <Row
            className='g-4'
          >
            {usersIsLoading ? (
              <div className="d-flex justify-content-center my-5">
                <Spinner
                  className='mx-auto'
                />
              </div>
            ) : usersData?.length > 0 ? (
              usersData?.map((tutor) => (
                <TutorCard
                  key={tutor._id}
                  tutor={tutor}
                />

              ))
            ) : (
              <div
                className='d-flex flex-column align-items-center gap-3'
              >
                <h5
                  className='m-0 mx-auto'
                >
                  No tutor for this position
                </h5>
                <NoTutorFoundIcon />
              </div>
            )}

          </Row>
        </Container>
      )}

      {viewMode === 'map' && (userLocation || selectedPlace) && (
        <TutorMap
          tutors={usersData}
          center={searchMode === 'city' ? selectedPlace : userLocation}
        />
      )}
    </>
  );
};

export default FindTutor;
