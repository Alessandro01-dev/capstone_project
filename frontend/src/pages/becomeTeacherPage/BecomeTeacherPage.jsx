import { Container, Row, Col } from "react-bootstrap"
import BecomeTeacherForm from "../../components/becomeTeacherForm/BecomeTeacherForm"

const BecomeTeacherPage = () => {
  return (
    <Container>
      <Row>
        <Col
          className="mx-auto"
          xs={12}
          md={10}
          lg={8}
        >
          <h3
            className="mb-5"
          >
            Become Teacher (in only four steps!)
          </h3>
          <BecomeTeacherForm />
        </Col>
      </Row>
    </Container>
  )
}

export default BecomeTeacherPage