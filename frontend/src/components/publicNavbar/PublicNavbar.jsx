import { Button, Container, Navbar } from "react-bootstrap"
import classes from './PublicNavbar.module.css'
import Logo from "../../assets/Logo"
import { useNavigate } from "react-router-dom";

const PublicNavbar = () => {

  const navigate = useNavigate();

  const handleLandingPageRedirect = (path) => {
    navigate(`/${path}`);
  };

  return (
    <Navbar
      className="border-bottom py-3"
      bg="light">
      <Container>
        <Navbar.Brand
          className={`${classes['logo-container']} p-0`}
          onClick={() => {
            handleLandingPageRedirect('landing')
          }}
        >
          <Logo />
        </Navbar.Brand>

        <div
          className="d-flex gap-2 align-items-center"
        >
          <Button
            onClick={() => {
              handleLandingPageRedirect('registration')
            }}
            variant="outline-dark" className="rounded-pill px-4">
            Sign In
          </Button>
          <Button
            onClick={() => {
              handleLandingPageRedirect('login')
            }}
            variant="dark" className="rounded-pill px-4"
          >
            Log In
          </Button>
        </div>
      </Container>
    </Navbar>
  )
}

export default PublicNavbar