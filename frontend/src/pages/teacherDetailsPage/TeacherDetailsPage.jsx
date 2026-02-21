import { Col, Container, Row } from "react-bootstrap"
import TeacherDetailsCard from "../../components/teacherDetailsCard/TeacherDetailsCard"

const TeacherDetailsPage = () => {
  return (
    <Container>
      <Row>
        <Col
          className="mx-auto"
          xs={12}
          md={10}
          lg={8}
        >
          <TeacherDetailsCard />
        </Col>
      </Row>
    </Container>
  )
}

export default TeacherDetailsPage