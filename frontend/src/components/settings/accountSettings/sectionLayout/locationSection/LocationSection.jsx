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

  useEffect(() => {
    if (initialLocation) {
      setLocation(initialLocation);
      if (initialLocation.city) {
        setSelectedValue({ label: `${initialLocation.city}, ${initialLocation.country || ''}` });
      }
    }
  }, [initialLocation]);

  const handleGPSLocation = () => {
    if (!navigator.geolocation) return alert("Il tuo browser non supporta la geolocalizzazione");

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const geocoder = new window.google.maps.Geocoder();

        geocoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
          setIsLocating(false);
          if (status === "OK" && results[0]) {
            const place = results[0];
            const city = place.address_components.find(c => c.types.includes("locality"))?.long_name;
            const country = place.address_components.find(c => c.types.includes("country"))?.long_name;

            const preciseLocation = {
              type: "Point",
              coordinates: [longitude, latitude], // Ordine GeoJSON: [lng, lat]
              city: city || "Posizione rilevata",
              country: country || "",
              address: place.formatted_address
            };

            setLocation(preciseLocation);
            setSelectedValue({ label: place.formatted_address });
          }
        });
      },
      (error) => {
        setIsLocating(false);
        alert("Unable to get location. Check your browser permissions.");
      }
    );
  };

  const loadLocationOptions = (inputValue, callback) => {
    if (!window.google?.maps || inputValue.length < 3) return callback([]);
    const service = new window.google.maps.places.AutocompleteService();

    service.getPlacePredictions(
      { input: inputValue, types: ['address'] },
      (predictions) => {
        const options = (predictions || []).map(p => ({
          value: p.place_id,
          label: p.description
        }));
        callback(options);
      }
    );
  };

  const handleSelect = (selectedOption) => {
    if (!selectedOption) return;
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ placeId: selectedOption.value }, (results, status) => {
      if (status === "OK" && results[0]) {
        const place = results[0];
        const city = place.address_components.find(c => c.types.includes("locality"))?.long_name;
        const country = place.address_components.find(c => c.types.includes("country"))?.long_name;

        setLocation({
          type: "Point",
          coordinates: [place.geometry.location.lng(), place.geometry.location.lat()],
          city: city || selectedOption.label.split(',')[0],
          country: country || "",
          address: place.formatted_address
        });
        setSelectedValue(selectedOption);
      }
    });
  };

  return (
    <SectionLayout
      title="Location"
      currentValue={location?.city}
      initialValue={initialLocation?.city}
      onSave={() => onSave(location)}
      onCancel={() => {
        setLocation(initialLocation);
        setSelectedValue(initialLocation?.city ? { label: initialLocation.city } : null);
      }}
      isLoading={isLoading}
    >
      {(isEditing) => (
        isEditing ? (
          <div className="d-flex flex-column gap-2 w-100">
            <InputGroup>
              <div style={{ flex: 1 }}>
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
                title="Usa la mia posizione attuale"
              >
                {isLocating ? (
                  <Spinner size="sm" />
                ) : (
                  <div
                    className='d-flex align-items-center gap-1'
                  >
                    <LocationPin />
                    <span>Use my location</span>
                  </div>
                )}
              </Button>
            </InputGroup>
            <small className="text-muted">
              A precise location helps you get information from tutors near you.
            </small>
          </div>
        ) : (
          <p className={`${classes['location-content']} m-0`}>
            {location?.city ? `${location.city}, ${location.country}` : "Position not set"}
          </p>
        )
      )}
    </SectionLayout>
  );
};

export default LocationSection;
