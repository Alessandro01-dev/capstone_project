import { Button, Spinner } from "react-bootstrap"

const SaveButtons = ({ onCancel, isDisabled, onSave, isLoading }) => {
  return (
    <div
      className='d-flex align-items-center align-self-end gap-2'
    >
      <Button
        variant='outline-dark'
        className='px-4'
        disabled={isDisabled || isLoading}
        onClick={onCancel}
      >
        Cancel
      </Button>
      <Button
        variant='success'
        className='px-4 d-flex align-items-center gap-2'
        disabled={isDisabled || isLoading}
        onClick={onSave}
      >
        {isLoading ? (
          <Spinner
            className="mx-auto"
            size="sm"
          />
        ) : (
          "Save Changes"
        )}
      </Button>
    </div>
  )
}

export default SaveButtons