import { Col, Container, Row } from "react-bootstrap"
import Logo from '../../assets/Logo'
import { useNavigate } from "react-router-dom";
import classes from './PublicFooter.module.css'

const PublicFooter = () => {

  const navigate = useNavigate();

  const handlePageRedirect = (path) => {
    navigate(`/${path}`);
  };

  return (
    <footer className="py-5 bg-light">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={4} className="mb-4 mb-md-0">
            <div>
              <Logo />
            </div>
            <p className="text-muted mt-3">
              Connecting people through languages. Real talk, real mates, real life.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="d-flex gap-4 justify-content-md-end mb-3">
              <span
                className={`${classes['footer-custom-link']} fw-bold`}
                onClick={() => handlePageRedirect('/registration')}>Register</span>
              <span
                className={`${classes['footer-custom-link']} fw-bold`}
                onClick={() => handlePageRedirect('/login')}>Login</span>
            </div>
            <p className="text-muted small">© 2026 Talk Mate. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default PublicFooter