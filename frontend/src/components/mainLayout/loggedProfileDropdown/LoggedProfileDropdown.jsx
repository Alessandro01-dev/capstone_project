import { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import SettingsIcon from '../../../assets/SettingsIcon';
import BecomeTeacherIcon from '../../../assets/BecomeTeacherIcon';
import LogoutIcon from '../../../assets/LogoutIcon';
import PostArticleIcon from '../../../assets/PostArticleIcon'
import classes from './LoggedProfileDropdown.module.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const LoggedProfileDropdown = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const { getProfile, authData, logout } = useAuth()

  const toggleProfileCard = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  useEffect(() => {
    if (!authData && localStorage.getItem('token')) {
      getProfile()
    }
  }, [])

  const navigate = useNavigate()

  const dropdownMenuItemsRedirect = (path) => {
    setIsDropdownOpen(false)
    navigate(`${path}`)
  }

  const handleLogout = () => {
    logout()
    dropdownMenuItemsRedirect('/login')
  }

  const dropdownMenuItems = [
    { id: 1, label: 'Post Article', icon: <PostArticleIcon />, to: "/postarticle" },
    { id: 2, label: 'Become a Teacher', icon: <BecomeTeacherIcon />, to: "/becometeacher" },
    { id: 3, label: 'Settings', icon: <SettingsIcon />, to: "/settings", hasDivider: true },
    { id: 4, label: 'Log out', icon: <LogoutIcon />, to: 'login', action: handleLogout }
  ]

  return (
    <div
      className={classes["logged-profile-container"]}
      onClick={toggleProfileCard}
    >
      {authData && (
        <>
          <p className="m-0 px-2 py-1">
            {authData.name} {authData.surname}
          </p>
          <div className={classes["logged-profile-avatar-container"]}>
            <img
              className="w-100 h-100 object-fit-cover"
              src={authData.avatar}
              alt="logged user profile picture"
            />
          </div>
        </>
      )}

      <Dropdown
        align="end"
        show={isDropdownOpen}
        onToggle={toggleProfileCard}
      >
        <Dropdown.Toggle
          className={classes["remove-dropdown-toggle"]}
        />
        <Dropdown.Menu>
          {dropdownMenuItems.map(item => (
            <div
              key={item.id}
            >
              <Dropdown.Item
                className='d-flex align-items-center gap-2'
                onClick={() => {
                  if (item.action) {
                    item.action();
                  } else {
                    dropdownMenuItemsRedirect(item.to);
                  }
                }}
              >
                {item.icon}
                {item.label}
              </Dropdown.Item>
              {item.hasDivider && <Dropdown.Divider />}
            </div>
          ))
          }
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default LoggedProfileDropdown