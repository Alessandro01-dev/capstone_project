import { useState } from 'react'
import { Navbar, Button, Container, Row, Col } from 'react-bootstrap'
import classes from './MainLayout.module.css'
import MenuSidebar from './menuSidebar/MenuSidebar'
import { useWindowSize } from '../../hooks/useWindowSize'
import MenuCanvas from './menuCanvas/MenuCanvas'
import LoggedProfileDropdown from './loggedProfileDropdown/LoggedProfileDropdown'
import ShowCanvasIcon from '../../assets/ShowCanvasIcon'
import BookLessonIcon from '../../assets/BookLessonIcon'
import FindTutorIcon from '../../assets/FindTutorIcon'
import CommunityIcon from '../../assets/CommunityIcon'
import { Outlet, useNavigate } from 'react-router-dom'

const MainLayout = () => {

  const [collapsed, setCollapsed] = useState(true)

  const navigate = useNavigate()

  const menuItemsRedirect = (path) => {
    navigate(`${path}`)
  }

  const menuItems = [
    { id: 1, label: 'Book a lesson', icon: <BookLessonIcon />, to: "/booklesson" },
    { id: 2, label: 'Find a tutor', icon: <FindTutorIcon />, to: "/findtutor" },
    { id: 3, label: 'Community', icon: <CommunityIcon />, to: "/community" }
  ]

  const renderSidebarMenu = (isCollapsed) => (
    <ul className={classes["sidebar-list"]}>
      {menuItems.map(item => (
        <li
          key={item.id}
          className={`${classes["sidebar-item"]} ${isCollapsed ? 'justify-content-center' : 'px-4'}`}
          onClick={() => {
            menuItemsRedirect(item.to)
            if (!isDesktop) {
              setCollapsed(true)
            }
          }}
        >
          {item.icon}
          {!isCollapsed && <span className={classes["label"]}>{item.label}</span>}
        </li>
      ))}
    </ul>
  )

  const toggleCollapseSidebar = () => {
    setCollapsed(!collapsed)
  }

  const { size } = useWindowSize()

  const isDesktop = size > 767

  return (
    <div className={classes["main-layout"]}>
      {isDesktop ? (
        <MenuSidebar
          collapsed={collapsed}
          toggleCollapseSidebar={toggleCollapseSidebar}
          renderSidebarMenu={renderSidebarMenu}
        />
      ) : (
        <MenuCanvas
          open={!collapsed}
          onClose={toggleCollapseSidebar}
          renderSidebarMenu={renderSidebarMenu}
        />
      )}
      <div className={classes["right-main-layout"]}>
        <Navbar
          bg="light"
          className={`${classes["topbar"]} px-3`}
        >
          <Button
            variant="light"
            className="d-md-none border-0 p-2 rounded-pill"
            onClick={toggleCollapseSidebar}
          >
            <ShowCanvasIcon />
          </Button>
          <Container>
            <Row className="w-100 m-0">
              <Col
                xs={12}
                md={10}
                className="d-flex justify-content-end mx-auto"
              >
                <LoggedProfileDropdown />
              </Col>
            </Row>
          </Container>
        </Navbar>
        <main className={classes["main-content"]}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout