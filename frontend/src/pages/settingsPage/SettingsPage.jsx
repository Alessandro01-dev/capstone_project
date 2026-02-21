import { Col, Container, Row } from "react-bootstrap"
import Settings from "../../components/settings/Settings"

const SettingsPage = () => {
  return (
    <Container>
      <Row>
        <Col
          className="mx-auto"
          xs={12}
          md={10}
        >
          <Settings />
        </Col>
      </Row>
    </Container>
  )
}

export default SettingsPage