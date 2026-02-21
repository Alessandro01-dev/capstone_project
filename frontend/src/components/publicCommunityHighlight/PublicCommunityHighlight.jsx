import { Button, Col, Container, Row } from "react-bootstrap"
import avatars from '../../assets/avatars.jpg'

const PublicCommunityHighlight = ({ onRedirect }) => {

  return (
    <Container className="my-5 py-5">
      <Row className="align-items-center g-5">
        <Col md={6}>
          <img
            className='w-100 d-block object-fit-cover'
            src={avatars} alt="avatars"
          />
        </Col>
        <Col md={6}>
          <h2 className="fw-bold mb-4">Stay curious, stay informed.</h2>
          <p className="text-muted mb-4">
            Our blog is the home for language enthusiasts. Learn how to tackle
            difficult grammar, discover the best mnemonic hacks, and explore
            cultural curiosities that you won't find in any textbook.
          </p>
          <Button
            variant="outline-dark"
            className="rounded-pill px-4"
            onClick={() => {
              onRedirect('community')
            }}
          >
            Visit the Blog
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default PublicCommunityHighlight