import { Col, Container, Row } from "react-bootstrap"
import FindTutor from "../../components/findTutor/FindTutor"

const FindTutorPage = ({ isLoaded }) => {
  return (
    <Container>
      <Row>
        <Col
          className="mx-auto"
          xs={12}
          md={10}
        >
          <h3
            className="mb-5"
          >
            Find your talkmate
          </h3>
          <FindTutor
            isLoaded={isLoaded}
          />
        </Col>
      </Row>
    </Container>


  )
}

export default FindTutorPage