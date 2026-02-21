import { useState } from 'react'
import EditIcon from '../../../../assets/EditIcon'
import { Button, Spinner } from 'react-bootstrap'
import classes from './SectionLayout.module.css'

const SectionLayout = ({ title, children, currentValue, initialValue, onCancel, isLoading, customDisabled, onSave }) => {

  const [isEditing, setIsEditing] = useState(false)

  const isSaveDisabled = currentValue === initialValue;

  const handleCancel = () => {
    onCancel()
    setIsEditing(false)
  }

  return (
    <div
      className={`${classes['account-settings-section-main-container']} d-flex flex-column justify-content-between gap-2`}
    >
      <div
        className='d-flex align-items-center justify-content-between'
      >
        <h4
          className='m-0'
        >
          {title}
        </h4>
        <div
          onClick={() => setIsEditing(true)}
          className={`${isEditing ? 'd-none' : 'd-block'} ${classes['edit-icon']}`}
        >
          <EditIcon />
        </div>
      </div>
      {typeof children === 'function' ? children(isEditing) : children}
      <div
        className={`${classes['section-layout-footer']} d-flex align-items-center align-self-end gap-2`}
      >
        {isEditing && (
          <>
            <Button
              size='sm'
              variant='outline-dark'
              className='px-4'
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              size='sm'
              variant='success'
              className='px-4'
              disabled={isSaveDisabled || isLoading || customDisabled}
              onClick={async () => {
                await onSave();
                setIsEditing(false)
              }}
            >
              {isLoading ? (
                <Spinner
                  className='mx-auto'
                  size='sm'
                />
              ) : "Save Changes"}
            </Button>
          </>
        )}
      </div>

    </div >
  )
}

export default SectionLayout