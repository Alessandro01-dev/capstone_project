import { Col, Container, Row } from "react-bootstrap"
import Settings from "../../components/settings/Settings"

const SettingsPage = ({ isLoaded }) => {
  return (
    <Container>
      <Row>
        <Col
          className="mx-auto"
          xs={12}
          md={10}
        >
          <Settings 
            isLoaded={isLoaded}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default SettingsPage