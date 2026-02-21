import { Form } from "react-bootstrap"
import classes from './TitleSection.module.css'

const TitleSection = ({ title, setTitle }) => {

  return (
    <div
      className="d-flex flex-column gap-3"
    >
      <h4>Title</h4>
      <Form.Control
        className={classes['custom-input']}
        name="title"
        type='text'
        placeholder="Title of The Article"
        value={title || ''}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  )
}

export default TitleSection