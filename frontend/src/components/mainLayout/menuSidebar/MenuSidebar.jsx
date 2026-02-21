import { Button } from "react-bootstrap"
import Logo from "../../../assets/Logo"
import CollapseSidebarIcon from "../../../assets/CollapseSidebarIcon"
import { Link } from "react-router-dom"
import classes from './MenuSidebar.module.css'

const MenuSidebar = ({ collapsed, toggleCollapseSidebar, renderSidebarMenu }) => {
  return (
    <aside className={`${classes["sidebar"]} d-none d-md-flex ${collapsed ? classes["collapsed"] : ''}`}>
      <div
        className={classes["sidebar-header"]}
      >
        <Link
          className={`p-0 ${collapsed ? 'd-none' : ''}`}
          to="/"
        >
          <Logo />
        </Link>
        <Button
          variant="light"
          className={`d-none d-md-block border-0 p-2 rounded-pill ${collapsed ? 'mx-auto' : 'me-3'}`}
          onClick={toggleCollapseSidebar}
        >
          <CollapseSidebarIcon />
        </Button>
      </div>
      {renderSidebarMenu(collapsed)}
    </aside>
  )
}

export default MenuSidebar