import { Button } from "react-bootstrap"

const SaveButtons = ({onCancel, isDisabled}) => {
  return (
    <div
      className='d-flex align-items-center align-self-end gap-2'
    >
      <Button
        variant='outline-dark'
        className='px-4'
        onClick={onCancel}
      >
        Cancel
      </Button>
      <Button
        variant='success'
        className='px-4'
        disabled={isDisabled}
      >
        Save Changes
      </Button>
    </div>
  )
}

export default SaveButtons