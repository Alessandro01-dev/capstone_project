import { useEffect, useState } from "react";
import classes from './PublicHero.module.css'
import { Button, Col, Container, Row } from "react-bootstrap";
import hero from '../../assets/hero.webp'

const PublicHero = () => {

  const [wordIndex, setWordIndex] = useState(0);
  const words = ["tutor", "teacher", "mate", "friend"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes["hero-main-container"]}>
      <Container
        className="p-0 container-fluid container-md"
      >
        <Row className="h-100 align-items-center">

          <Col
            xs={12}
            md={6}
            className="p-5 order-2 order-md-1">
            <div>
              <h1
                className="fw-bold"
              >
                Learn faster with your best {" "}
                <span className="text-success">
                  {words[wordIndex]}.
                </span>
              </h1>
              <h5>
                Learn languages and connect with people around the world
              </h5>
              <Button
                variant="dark"
                className="mt-3 rounded-pill"
                size="lg"
                onClick={() => {
                  document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn more
              </Button>
            </div>
          </Col>

          <Col
            xs={12}
            md={6}
            className="order-1 order-md-2">
            <div>
              <img
                className="w-100 h-100 d-block object-fit-cover"
                src={hero}
                alt="landing page background"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PublicHero