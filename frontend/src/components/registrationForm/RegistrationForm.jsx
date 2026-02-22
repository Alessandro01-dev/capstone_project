import { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import classes from './RegistrationForm.module.css'
import useUsers from "../../hooks/useUsers";
import AsyncSelect from "react-select/async";

const RegistrationForm = () => {

  const [form, setForm] = useState({});
  const [selectedCity, setSelectedCity] = useState(null);
  const [localError, setLocalError] = useState("");
  const navigate = useNavigate();

  const { usersError, usersIsLoading, createUser } = useUsers()

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

  const handleCitySelect = (selectedOption) => {
    if (!selectedOption) {
      setSelectedCity(null);
      return;
    }

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ placeId: selectedOption.value }, (results, status) => {
      if (status === "OK" && results[0]) {
        const addressComponents = results[0].address_components;

        const cityComponent = addressComponents.find(c =>
          c.types.includes("locality") ||
          c.types.includes("administrative_area_level_3")
        );

        const countryComponent = addressComponents.find(c =>
          c.types.includes("country")
        );

        setSelectedCity({
          cityName: cityComponent ? cityComponent.long_name : "",
          countryName: countryComponent ? countryComponent.long_name : "",
          placeId: selectedOption.value,
          fullLabel: selectedOption.label
        });
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
    if (localError) setLocalError("")
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setLocalError("Passwords must be the same");
      return;
    }

    if (!selectedCity) {
      setLocalError("Please select your city");
      return;
    }

    const { confirmPassword, ...userData } = form;

    const finalData = {
      ...userData,
      location: {
        city: selectedCity.cityName,
        country: selectedCity.countryName,
        placeId: selectedCity.placeId,
      }
    };

    const success = await createUser(finalData)

    if (success) {
      navigate('/login');
    }
  }

  return (
    <>
      <h2 className="text-center mb-4">Join Talkmate</h2>
      {usersError && <Alert variant="danger" className="py-2 text-center small">{usersError}</Alert>}

      <Form
        className="d-flex flex-column gap-2"
        onSubmit={handleRegisterSubmit}
      >
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            className={classes['custom-input']}
            name="name"
            placeholder="Name"
            type="text"
            value={form.name || ''}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Surname</Form.Label>
          <Form.Control
            className={classes['custom-input']}
            name="surname"
            placeholder="Surname"
            type="text"
            value={form.surname || ''}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>City</Form.Label>
          <AsyncSelect
            cacheOptions
            loadOptions={loadLocationOptions}
            onChange={handleCitySelect}
            placeholder="Search your city..."
            isClearable
            required
            classNamePrefix="react-select"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            className={classes['custom-input']}
            name="email"
            placeholder="Email"
            type="email"
            value={form.email || ''}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            className={classes['custom-input']}
            name="password"
            placeholder="Password"
            type="password"
            value={form.password || ''}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            className={classes['custom-input']}
            name="confirmPassword"
            placeholder="Ripeti Password"
            type="password"
            value={form.confirmPassword || ''}
            onChange={handleInputChange}
            isInvalid={localError}
            required
          />
          <Form.Control.Feedback type="invalid">{localError}</Form.Control.Feedback>
        </Form.Group>

        <Button
          className="w-100"
          variant="dark"
          type="submit"
        >
          {usersIsLoading ? (
            <Spinner
              className="mx-auto"
              size="sm"
            >
              {usersIsLoading}
            </Spinner>
          ) : "Agree & Join"}
        </Button>
      </Form>

      <div
        className="d-flex align-items-center justify-content-center gap-1 mt-3"
      >
        <p className="text-center m-0">
          Already on Talkmate?
        </p>
        <Link to="/login">Sign in</Link>
      </div>
    </>
  )
}

export default RegistrationForm