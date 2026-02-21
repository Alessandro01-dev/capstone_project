import { Col, Container, Row } from "react-bootstrap"
import connect from '../../assets/connect.jpg'
import teacher from '../../assets/teacher.png'
import blog from '../../assets/blog.avif'
import classes from './PublicServices.module.css'

const PublicServices = () => {
  return (
    <Container id="services-section" className="my-5 py-5">
      <Row className="text-center g-4">
        <Col md={4}>
          <div className="p-3 d-flex flex-column align-items-center gap-3">
            <div
              className={classes['service-img-container']}
            >
              <img
                className='w-100 h-100 d-block object-fit-cover'
                src={connect}
                alt="blog picture" />
            </div>
            <h3 className="fw-bold">Find Local Mates</h3>
            <p className="m-0 text-muted">Search by location or city and meet people nearby for real-life language exchanges.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="p-3 d-flex flex-column align-items-center gap-3">
            <div
              className={classes['service-img-container']}
            >
              <img
                className='w-100 d-block object-fit-cover'
                src={teacher}
                alt="blog picture" />
            </div>
            <h3 className="fw-bold">Learn Your Way</h3>
            <p className="m-0 text-muted">Connect with certified teachers or community tutors based on your needs.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="p-3 d-flex flex-column align-items-center gap-3">
            <div
              className={classes['service-img-container']}
            >
              <img
                className='w-100 h-100 d-block object-fit-cover'
                src={blog}
                alt="blog picture" />
            </div>
            <h3 className="fw-bold">Explore Our Community</h3>
            <p className="m-0 text-muted">Discover expert articles, cultural insights, and innovative hacks to learn any language faster.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default PublicServices