import { Button, Form } from "react-bootstrap"
import classes from './AddComment.module.css'

const AddComment = () => {
  return (
    <div
      className={classes['add-comment-main-container']}
    >
      <div
        className='d-flex align-items-center gap-3'
      >
        <div
          className={classes["card-profile-img-container"]}
        >
          <img
            className="w-100 d-block object-fit-cover"
            src='https://picsum.photos/200'
            alt="author card profile picture"
          />
          <div className={classes["author-card-profile-flag-picture"]}>
            <img
              className="w-100 h-100 d-block object-fit-cover"
              src="https://flagcdn.com/w640/it.png"
              alt="author card flag picture"
            />
          </div>
        </div>
        <div>
          <h6
            className='m-0'
          >
            Mario Rossi (you)
          </h6>
          <p
            className={`${classes['author-card-job-title']} m-0 small`}
          >
            Community Tutor
          </p>
        </div>
      </div>
      <Form
        className="d-flex flex-column"
      >
        <Form.Group className="mb-3">
          <Form.Label>What are your thoughts?</Form.Label>
          <Form.Control 
          className={classes["add-comment-text-area"]}
          as="textarea" 
          />
        </Form.Group>
        <Button
          className="align-self-end"
          variant="dark"
          size="sm"
        >
          Send
        </Button>
      </Form>
    </div>
  )
}

export default AddComment