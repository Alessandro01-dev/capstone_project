import { Form } from "react-bootstrap"
import classes from './ReadTimeSection.module.css'

const ReadTimeSection = ({ readTime, setReadTime }) => {

  const handleReadTimeChange = (e) => {
    const { name, value } = e.target
    setReadTime(readTime => ({ ...readTime, [name]: value }));
  }

  return (
    <div className="d-flex flex-column gap-2">
      <h4>Read Time</h4>
      <div className="d-flex gap-2">
        <Form.Control
          className={classes['custom-input']}
          name="value"
          type="number"
          min="0"
          value={readTime.value || ''}
          onChange={handleReadTimeChange}
        />
        <Form.Select
          className={classes['custom-input']}
          name="unit"
          value={readTime.unit || ''}
          onChange={handleReadTimeChange}
        >
          <option value="min">min</option>
          <option value="hours">hours</option>
        </Form.Select>
      </div>
    </div>
  )
}

export default ReadTimeSection