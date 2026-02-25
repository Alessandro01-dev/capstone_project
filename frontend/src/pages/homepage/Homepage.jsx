import { Col, Container, Row } from "react-bootstrap"
import BentoGrid from "../../components/bentoGrid/BentoGrid"

const Homepage = () => {
  return (
    <Container>
      <Row>
        <Col
          className="mx-auto"
          xs={12}
          md={10}
        >
          <BentoGrid />
        </Col>
      </Row>
    </Container>
  )
}

export default Homepage