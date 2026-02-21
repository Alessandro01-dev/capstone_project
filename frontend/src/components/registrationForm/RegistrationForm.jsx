import { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import classes from './RegistrationForm.module.css'
import useUsers from "../../hooks/useUsers";

const RegistrationForm = () => {

  const [form, setForm] = useState({});
  const [localError, setLocalError] = useState("");
  const navigate = useNavigate();

  const { usersError, usersIsLoading, createUser } = useUsers()

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

    const { confirmPassword, ...userData } = form;

    const success = await createUser(userData)

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