import { Col, Container, Row } from "react-bootstrap"
import TutorDetailsCard from "../../components/tutorDetailsCard/TutorDetailsCard"

const TutorDetailsPage = () => {
  return (
    <Container>
      <Row>
        <Col
          className="mx-auto"
          xs={12}
          md={10}
          lg={8}
        >
          <TutorDetailsCard />
        </Col>
      </Row>
    </Container>
  )
}

export default TutorDetailsPage