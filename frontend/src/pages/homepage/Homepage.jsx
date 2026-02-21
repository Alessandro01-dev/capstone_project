import { Col, Container, Row } from "react-bootstrap"

const Homepage = () => {
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
            Homepage
          </h3>
        </Col>
      </Row>
    </Container>
  )
}

export default Homepage