import { Offcanvas } from "react-bootstrap"
import Logo from "../../../assets/Logo"
import { Link } from "react-router-dom"

const MenuCanvas = ({ open, onClose, renderSidebarMenu }) => {
  return (
    <Offcanvas show={open} onHide={onClose}>
      <Offcanvas.Header
      className="ps-0"
      closeButton
      >
        <Offcanvas.Title
          as={Link}
          to="/"
          onClick={onClose}
        >
          <Logo />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body
        className="px-0"
      >
        {renderSidebarMenu(false)}
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default MenuCanvas