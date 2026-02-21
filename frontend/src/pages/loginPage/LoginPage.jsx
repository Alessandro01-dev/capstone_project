import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../../components/loginForm/LoginForm";
import PublicNavbar from '../../components/publicNavbar/PublicNavbar'
import PublicFooter from "../../components/publicFooter/PublicFooter";

const LoginPage = () => {

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
            <LoginForm />
          </Col>
        </Row>
      </Container>

      <PublicFooter />

    </div>
  )
}

export default LoginPage