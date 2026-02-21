import { Button, Col, Container, Row } from "react-bootstrap"

const PublicTeacherCall = ({ onRedirect }) => {
  return (
    <div className="bg-black text-white py-5">
      <Container>
        <Row className="align-items-center py-5">
          <Col md={7}>
            <h2 className="fw-bold display-5">Turn your fluency into income.</h2>
            <p className="lead opacity-75">
              Whether you are a certified professional or a native speaker, you can start teaching on Talk Mate.
              Upload your certifications to become a <span className="fw-bold">Teacher</span> or share your passion as a <span className="fw-bold">Tutor</span>.
              Set your own path and get paid for what you love.
            </p>
          </Col>
          <Col md={5} className="text-md-end">
            <Button
              variant="light"
              size="lg"
              className="rounded-pill px-5 fw-bold"
              onClick={() => onRedirect('registration')}
            >
              Start Teaching
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PublicTeacherCall