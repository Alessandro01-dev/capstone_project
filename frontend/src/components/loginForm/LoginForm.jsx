import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import classes from './LoginForm.module.css'
import { useAuth } from "../../contexts/AuthContext";

const LoginForm = () => {

  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const { loginAndGetToken, getProfile, authIsLoading } = useAuth()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const data = await loginAndGetToken(form);

    if (data && data.token) {
      await getProfile();
      navigate('/');
    }
  };

  return (
    <>
      <h2 className="text-center mb-4">Login</h2>
      <Form
        onSubmit={handleLoginSubmit}
      >
        <Form.Group className="mb-3">
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

        <Form.Group className="mb-4">
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

        <Button
          className="w-100 mb-3"
          variant="dark"
          type="submit"
          disabled={authIsLoading}
        >
          {authIsLoading ? (
            <Spinner
              size="sm"
              className="mx-auto"
            />
          ) : "Sign in"
          }
        </Button>
      </Form>

      <div
        className="d-flex align-items-center justify-content-center gap-1 mt-3"
      >
        <p className="text-center m-0">
          New to Talkmate?
        </p>
        <Link to="/registration">Join now</Link>
      </div>
    </>
  )
}

export default LoginForm