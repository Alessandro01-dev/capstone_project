import { Col, Container, Row } from 'react-bootstrap'
import CommunityPostsList from '../../components/communityPostsList/CommunityPostsList'

const CommunityPage = () => {
  return (
    <Container>
      <Row>
        <Col
          className="mx-auto"
          xs={12}
          md={10}
        >
          <h3
            className='mb-5'
          >
            Welcome to your Community
          </h3>
          <CommunityPostsList />
        </Col>
      </Row>
    </Container>
  )
}

export default CommunityPage