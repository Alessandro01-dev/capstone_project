import FilterIcon from "../../../assets/FilterIcon";
import { InputGroup, Form } from "react-bootstrap";
import { useState } from "react";
import AsyncSelect from "react-select/async";
import classes from './TeachersSearch.module.css'
import { languagesMock } from "../../settings/languagesSettings/languagesMock";
import Select from "react-select";

const TeachersSearch = ({ setCity, isLoaded, setLanguage }) => {

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedLang, setSelectedLang] = useState(null);

  const loadLocationOptions = (inputValue, callback) => {
    if (!isLoaded || !window.google) return callback([]);
    if (!window.google?.maps || inputValue.length < 3) return callback([]);

    const service = new window.google.maps.places.AutocompleteService();
    service.getPlacePredictions(
      { input: inputValue, types: ['(cities)'] },
      (predictions) => {
        if (!predictions) return callback([]);
        const options = predictions.map(prediction => ({
          value: prediction.place_id,
          label: prediction.description
        }));
        callback(options);
      }
    );
  };

  const handleCityChange = (option) => {
    setSelectedCity(option);
    setCity(option ? { placeId: option.value, cityName: option.label } : null);
  };

  const handleLanguageChange = (option) => {
    setSelectedLang(option);
    setLanguage(option ? option.value : null);
  };

  return (
    <div
      className={classes["teachers-search-main-container"]}
    >
      <div
        className="d-flex align-items-center gap-3"
      >
        <FilterIcon />
        Apply filters
      </div>
      <div
        className={classes["teachers-search-inputs-container"]}
      >
        <InputGroup>
          <Form.Label className="small fw-bold text-muted">Filter by City</Form.Label>
          <AsyncSelect
            cacheOptions
            loadOptions={loadLocationOptions}
            value={selectedCity}
            onChange={handleCityChange}
            placeholder={isLoaded ? "Search your city..." : "Loading Maps..."}
            isClearable
            className="w-100"
            classNamePrefix="react-select"
          />
        </InputGroup>
        <InputGroup>
          <Form.Label className="small fw-bold text-muted">Filter by Taught Language</Form.Label>
          <Select
            options={languagesMock}
            value={selectedLang}
            onChange={handleLanguageChange}
            placeholder="Select a language..."
            isClearable
            className="w-100"
            classNamePrefix="react-select"
          />
        </InputGroup>
      </div>
    </div>
  );
}

export default TeachersSearch