import { Form } from 'react-bootstrap';
import AsyncSelect from 'react-select/async';
import { useState } from 'react';
import LocationIcon from '../../../assets/LocationIcon';
import CityIcon from '../../../assets/CityIcon';
import classes from './SearchModeSelector.module.css';

const SearchModeSelector = ({ searchMode, setSearchMode, setCity, distance, setDistance }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const loadLocationOptions = (inputValue, callback) => {
    if (!inputValue || inputValue.length < 3) return callback([]);

    const service = new window.google.maps.places.AutocompleteService();
    service.getPlacePredictions(
      { input: inputValue, types: ['(cities)'] },
      (predictions) => {
        if (!predictions) return callback([]);
        const options = predictions.map(p => ({
          value: p.place_id,
          label: p.description
        }));
        callback(options);
      }
    );
  };

  const handleSelect = (selectedOption) => {
    if (!selectedOption) {
      setCity(null);
      setSelectedValue(null);
      return;
    }

    console.log("Opzione selezionata nel dropdown:", selectedOption);

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ placeId: selectedOption.value }, (results, status) => {
      if (status === "OK" && results[0]) {
        console.log("Risultato Geocoder per questo PlaceID:", results[0]);
        const location = results[0].geometry.location;

        const addressComponents = results[0].address_components;
        const cityComponent = addressComponents.find(c =>
          c.types.includes("locality") ||
          c.types.includes("administrative_area_level_3")
        );
        const cityName = cityComponent ? cityComponent.long_name : "";

        setCity({
          lat: location.lat(),
          lng: location.lng(),
          cityName: cityName,
          placeId: selectedOption.value
        });
        setSelectedValue(selectedOption);
      }
    });
  };


  return (
    <div className={`${classes['search-mode-selector-main-container']} mb-5`}>
      <div className="d-flex justify-content-between gap-3">
        <div
          className={`${classes['single-mode-selector-container']} bg-white w-50 rounded gap-2 p-3 d-flex flex-column flex-lg-row align-items-center ${searchMode === 'location' ? classes.active : ''}`}
          onClick={() => { setSearchMode('location'); setCity(null); setSelectedValue(null); }}
        >
          <div className='p-4 d-flex justify-content-center align-items-center order-lg-0 order-2'><LocationIcon /></div>
          <div className='d-flex justify-content-between align-items-center w-100'>
            <Form.Label className='m-0'>Search by location</Form.Label>
            <Form.Check className={`${classes['custom-radio-input']} align-self-start`} type="radio" checked={searchMode === 'location'} readOnly />
          </div>
        </div>

        <div
          className={`${classes['single-mode-selector-container']} bg-white w-50 rounded gap-2 p-3 d-flex flex-column flex-lg-row align-items-center ${searchMode === 'city' ? classes.active : ''}`}
          onClick={() => { setSearchMode('city'); setCity(null); setSelectedValue(null); }}
        >
          <div className='p-4 d-flex justify-content-center align-items-center order-lg-0 order-2'><CityIcon /></div>
          <div className='d-flex justify-content-between align-items-center w-100'>
            <Form.Label className='m-0'>Search by city</Form.Label>
            <Form.Check className={`${classes['custom-radio-input']} align-self-start`} type="radio" checked={searchMode === 'city'} readOnly />
          </div>
        </div>
      </div>

      <div className="mt-4">
        {searchMode === 'location' && (
          <div className={classes['input-main-container']}>
            <Form.Label>Distance: <strong>{distance} km</strong></Form.Label>
            <Form.Range min={0} max={100} value={distance} onChange={(e) => setDistance(Number(e.target.value))} className={classes['custom-range-input']} />
          </div>
        )}

        {searchMode === 'city' && (
          <div className={classes['input-main-container']}>
            <AsyncSelect
              key={searchMode}
              classNamePrefix="react-select"
              cacheOptions={false}
              loadOptions={loadLocationOptions}
              value={selectedValue}
              onChange={handleSelect}
              onInputChange={(newValue) => {
                if (newValue.length > 0 && selectedValue) setSelectedValue(null);
              }}
              placeholder="Search city..."
              isClearable={true}
              noOptionsMessage={() => "No city found"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModeSelector;
