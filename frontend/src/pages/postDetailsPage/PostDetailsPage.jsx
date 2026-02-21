import { Col, Container, Row } from "react-bootstrap"
import PostDetailsCard from "../../components/postDetailsCard/PostDetailsCard"

const PostDetailsPage = () => {
  return (
    <Container>
      <Row>
        <Col
          className="mx-auto"
          xs={12}
          md={10}
          lg={8}
        >
          <PostDetailsCard />
        </Col>
      </Row>
    </Container>
  )
}

export default PostDetailsPage