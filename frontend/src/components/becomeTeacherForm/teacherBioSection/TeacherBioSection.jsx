import { Form } from "react-bootstrap";
import classes from './TeacherBioSection.module.css'

const TeacherBioSection = ({ biography = "", setBiography }) => {

  const handleInputChange = (e) => {
    setBiography(e.target.value);
  }

  const minLength = 50;
  const maxLength = 1000;
  const isTooShort = biography.length > 0 && biography.length < minLength;
  const isOverLimit = biography.length > maxLength;
  const isInvalid = isTooShort || isOverLimit;

  return (
    <div className="d-flex flex-column gap-3">
      <h4>1. About You</h4>
      <Form.Control
        className={classes['custom-input']}
        name="biography"
        as="textarea"
        rows={5}
        placeholder="Describe your teaching style and background..."
        value={biography}
        onChange={handleInputChange}
        isInvalid={isInvalid}
      />
      <div className="d-flex justify-content-end mt-1">
        <small className={isInvalid ? "text-danger fw-bold" : "text-muted"}>
          {biography.length} / {maxLength}
        </small>
      </div>
    </div>
  )
}

export default TeacherBioSection