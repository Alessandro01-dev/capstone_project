import { Col, Container, Row } from "react-bootstrap"
import PostArticleForm from "../../components/postArticleForm/PostArticleForm"

const PostArticlePage = () => {
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
            Post Article
          </h3>
          <PostArticleForm />
        </Col>
      </Row>
    </Container>
  )
}

export default PostArticlePage