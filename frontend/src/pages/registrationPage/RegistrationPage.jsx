import { Container, Row, Col } from "react-bootstrap";
import RegistrationForm from "../../components/registrationForm/RegistrationForm";
import registration from '../../assets/registration.avif'
import PublicNavbar from "../../components/publicNavbar/PublicNavbar";
import PublicFooter from "../../components/publicFooter/PublicFooter";

const RegistrationPage = ({ isLoaded }) => {

  return (
    <div
      className='vh-100 d-flex flex-column overflow-y-auto'
    >
      <PublicNavbar />
      <Container
        className="d-flex flex-column justify-content-center align-items-center flex-grow-1"
      >
        <Row
          className="w-100 my-5"
        >
          <Col
            className="mx-auto"
            xs={12}
            md={6}
            xl={4}
          >
            <RegistrationForm
              isLoaded={isLoaded}
            />
          </Col>
          <Col
            className="mx-auto"
            xs={12}
            md={6}
            xl={4}
          >
            <img
              className="w-100 h-100 d-block object-fit-contain"
              src={registration}
              alt="hero picture" />
          </Col>
        </Row>
      </Container >

      <PublicFooter />

    </div>
  )
}

export default RegistrationPage