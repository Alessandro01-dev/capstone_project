import { useEffect, useState } from "react";
import { Button, Form, Spinner, Alert } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from './LoginForm.module.css'
import { useAuth } from "../../contexts/AuthContext";

const LoginForm = () => {

  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { loginAndGetToken, getProfile, clearError, authIsLoading, authError } = useAuth()

  useEffect(() => {

    clearError();

    return () => clearError();
  }, [clearError]);


  const handleInputChange = (e) => {

    if (authError) clearError();

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
      navigate(from, { replace: true });
    }
  };

  const handleGuestLogin = async () => {
    const guestData = {
      email: 'giulia.rinaldi@example.com',
      password: 'password123'
    };

    const data = await loginAndGetToken(guestData);
    if (data && data.token) {
      await getProfile();
      navigate(from, { replace: true });
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

        {authError && (
          <Alert
            variant="danger"
            className="py-2 text-center">
            {authError}
          </Alert>
        )}

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

      <div className="text-center mt-3">
        <div className="d-flex align-items-center mb-3">
          <hr className="flex-grow-1 text-muted" />
          <span className="mx-2 small text-muted text-uppercase">Or</span>
          <hr className="flex-grow-1 text-muted" />
        </div>

        <Button
          variant="outline-dark"
          className="w-100 py-2 fw-bold"
          onClick={handleGuestLogin}
          disabled={authIsLoading}
        >
          Login as Guest (Tutor Demo)
        </Button>
      </div>

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