import { useState } from 'react'
import classes from './Settings.module.css'
import InterestsSettings from './interestsSettings/InterestsSettings'
import LanguagesSettings from './languagesSettings/LanguagesSettings'
import AccountSettings from './accountSettings/AccountSettings'
import { Col, Container, Row } from 'react-bootstrap'

const Settings = () => {

  const [activeTab, setActiveTab] = useState('Account')

  const tabItems = [
    { id: 1, label: 'Account' },
    { id: 2, label: 'Languages' },
    { id: 3, label: 'Interests' },
    { id: 4, label: 'Community' }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'Account': return <AccountSettings />;
      case 'Languages': return <LanguagesSettings />;
      case 'Interests': return <InterestsSettings />;
      case 'Community': return <h4>Community</h4>;
    }
  }


  return (
    <div
      className={classes['profile-settings-main-container']}
    >
      <h3
        className='text-center'
      >
        Settings
      </h3>
      <div
        className='d-flex align-items-center justify-content-between'
      >
        {tabItems.map(item => (
          <p
            className={`${classes['tab-title']} ${activeTab === item.label && classes['active']} m-0`}
            key={item.id}
            onClick={() => setActiveTab(item.label)}
          >
            {item.label}
          </p>
        ))}
      </div>

      <Container>
        <Row
          className='pt-5'
        >
          <Col
            className="mx-auto"
            md={10}
            lg={8}
          >
            {renderContent()}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Settings