import { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { Button, InputGroup, Spinner } from 'react-bootstrap';
import SectionLayout from '../SectionLayout';
import classes from './LocationSection.module.css';
import LocationPin from '../../../../../assets/LocationPin';

const LocationSection = ({ initialLocation, onSave, isLoading }) => {

  const [location, setLocation] = useState(initialLocation || {});
  const [selectedValue, setSelectedValue] = useState(null);
  const [isLocating, setIsLocating] = useState(false);
  const isValid = location?.city?.trim()?.length > 0;


  const hasChanged =
    location?.address !== initialLocation?.address ||
    location?.city !== initialLocation?.city ||
    (location?.geo?.coordinates?.length !== initialLocation?.geo?.coordinates?.length) ||
    (location?.geo?.coordinates?.[0] !== initialLocation?.geo?.coordinates?.[0]);


  useEffect(() => {
    if (initialLocation) {
      setLocation(initialLocation);
      const label = initialLocation.address ||
        (initialLocation.city ? `${initialLocation.city}${initialLocation.country ? `, ${initialLocation.country}` : ''}` : '');
      if (label) setSelectedValue({ label });
    }
  }, [initialLocation]);

  const handleGPSLocation = () => {
    if (!navigator.geolocation) return alert("Your browser does not support geolocation");
    setIsLocating(true);

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const geocoder = new window.google.maps.Geocoder();

      geocoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
        setIsLocating(false);
        if (status === "OK" && results[0]) {
          const place = results[0];
          const isLocality = place.types.includes("locality");
          const cityComponent = place.address_components.find(component =>
            component.types.includes("locality") || component.types.includes("administrative_area_level_3")
          );

          const countryComponent = place.address_components.find(component => component.types.includes("country"));

          geocoder.geocode({ address: `${cityComponent?.long_name}, ${countryComponent?.long_name || 'Italy'}` }, (cityResults, cityStatus) => {
            const cityPlaceId = (cityStatus === "OK" && cityResults[0]) ? cityResults[0].place_id : "";

            setLocation({
              city: cityComponent?.long_name || "Position detected",
              country: countryComponent?.long_name || "",
              address: isLocality ? "" : place.formatted_address,
              placeId: cityPlaceId,
              geo: {
                type: "Point",
                coordinates: isLocality ? [] : [place.geometry.location.lng(), place.geometry.location.lat()]
              }
            });
            setSelectedValue({ label: place.formatted_address });
          });
        }
      });
    }, () => setIsLocating(false));
  };


  const handleSelect = (selectedOption) => {

    if (!selectedOption) {
      setLocation({
        city: "",
        country: "",
        address: "",
        geo: { type: "Point", coordinates: [] }
      });
      setSelectedValue(null);
      return;
    }

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ placeId: selectedOption.value }, (results, status) => {
      if (status === "OK" && results[0]) {
        const place = results[0];
        const isLocality = place.types.includes("locality");

        const cityComponent = place.address_components.find(component =>
          component.types.includes("locality") || component.types.includes("administrative_area_level_3")
        );
        const countryComponent = place.address_components.find(component => component.types.includes("country"));

        geocoder.geocode({ address: `${cityComponent?.long_name}, ${countryComponent?.long_name || 'Italy'}` }, (cityResults, cityStatus) => {
          const cityPlaceId = (cityStatus === "OK" && cityResults[0])
            ? cityResults[0].place_id
            : selectedOption.value;

          const newLocation = {
            city: cityComponent ? cityComponent.long_name : selectedOption.label.split(',')[0],
            country: countryComponent ? countryComponent.long_name : "",
            address: isLocality ? "" : place.formatted_address,
            placeId: cityPlaceId,
            geo: {
              type: "Point",
              coordinates: isLocality ? [] : [place.geometry.location.lng(), place.geometry.location.lat()]
            }
          };
          setLocation(newLocation);
        });
        setSelectedValue(selectedOption);
      }
    });
  };


  const loadLocationOptions = (inputValue, callback) => {
    if (!window.google?.maps || inputValue.length < 3) return callback([]);
    const service = new window.google.maps.places.AutocompleteService();
    service.getPlacePredictions(
      { input: inputValue },
      (predictions) => {
        const options = (predictions || []).map(prediction => ({
          value: prediction.place_id,
          label: prediction.description
        }));
        callback(options);
      }
    );
  };

  return (
    <SectionLayout
      title="Location"
      currentValue={location?.address}
      initialValue={initialLocation?.address}
      onSave={() => onSave(location)}
      onCancel={() => {
        setLocation(initialLocation);
        const label = initialLocation?.address ||
          (initialLocation?.city ? `${initialLocation.city}${initialLocation.country ? `, ${initialLocation.country}` : ''}` : '');
        setSelectedValue(label ? { label } : null);
      }}
      isLoading={isLoading}
      customDisabled={!hasChanged || !isValid}
    >
      {(isEditing) => (
        isEditing ? (
          <div className="d-flex flex-column gap-2 w-100">
            <InputGroup>
              <div
                className={classes['input-container']}
              >
                <AsyncSelect
                  cacheOptions
                  loadOptions={loadLocationOptions}
                  value={selectedValue}
                  onChange={handleSelect}
                  placeholder="Enter address or city..."
                  isClearable
                />
              </div>
              <Button
                variant="outline-secondary"
                onClick={handleGPSLocation}
                disabled={isLocating}
              >
                {isLocating ? <Spinner size="sm" /> : <div className='d-flex align-items-center gap-1'><LocationPin /><span>Use my location</span></div>}
              </Button>
            </InputGroup>
            {!isValid && (
              <small className="text-danger mt-1">
                City is required. Please select a valid location.
              </small>
            )}
            <small className="text-muted">
              Enable location to discover tutors near you and get more precise search results.
            </small>
          </div>
        ) : (
          <p className={`${classes['location-content']} m-0`}>
            {location?.city ? (
              <>
                {location.address
                  ? location.address
                  : `${location.city}${location.country ? `, ${location.country}` : ''}`}
              </>
            ) : (
              "Position not set"
            )}
          </p>
        )
      )}
    </SectionLayout>
  );
};

export default LocationSection;
