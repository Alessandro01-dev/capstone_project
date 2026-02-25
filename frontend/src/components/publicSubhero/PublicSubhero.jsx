import { Col, Container, Row } from "react-bootstrap"
import classes from './PublicSubhero.module.css'
import community from '../../assets/community.webp'

const PublicSubhero = () => {
  return (
    <div className={classes["subhero-main-container"]}>
      <Container
        className="p-0 container-fluid container-md"
      >
        <Row className="h-100 align-items-center pt-5">

          <Col
            xs={12}
            md={6}
            className="order-2 order-md-1">
            <div
              className={classes["subhero-img-container"]}
            >
              <img
                className="w-100 h-100 d-block object-fit-cover"
                src={community}
                alt="landing page background"
              />
            </div>
          </Col>

          <Col
            xs={12}
            md={6}
            className="px-5 order-1 order-md-2">
            <div
              className="text-white"
            >
              <h2
                className="fw-bold display-5"
              >
                Real life is the best classroom.
              </h2>
              <h5
                className='lead opacity-75'
              >
                Connect with a local mate, meet for a coffee, and let the conversation flow. Learning a language is as natural as making a new friend.
              </h5>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default PublicSubhero