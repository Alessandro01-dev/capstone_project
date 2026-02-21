import { Form, InputGroup } from "react-bootstrap";
import classes from './ProfessionalDetailsSection.module.css'

const ProfessionalDetailsSection = ({ professionalDetails, setProfessionalDetails }) => {

  const maxLength = 500;
  const isOverLimit = professionalDetails.availability.length > maxLength;

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProfessionalDetails({
      ...professionalDetails,
      [name]: value
    })
  }

  return (
    <div className="d-flex flex-column gap-3">
      <h4>4. Professional Details</h4>

      <div>
        <h6>Years of Experience</h6>
        <Form.Control
          className={classes['custom-input']}
          name="experience"
          min={0}
          max={40}
          type="number"
          value={professionalDetails.experience}
          onChange={handleInputChange}
          isInvalid={professionalDetails.experience < 0 || professionalDetails.experience > 40}
        />
      </div>

      <div>
        <h6>Availability</h6>
        <Form.Control
          className={classes['custom-input']}
          name="availability"
          as="textarea"
          rows={5}
          placeholder="Describe your weekly teaching schedule and any specific preferences or limits..."
          value={professionalDetails.availability}
          onChange={handleInputChange}
          isInvalid={isOverLimit}
        />
        <div className="d-flex justify-content-end mt-1">
          <small className={isOverLimit ? "text-danger fw-bold" : "text-muted"}>
            {professionalDetails.availability.length} / {maxLength}
          </small>
        </div>
      </div>


      <div>
        <h6>Hourly Rate</h6>
        <InputGroup>
          <InputGroup.Text>€</InputGroup.Text>
          <Form.Control
            className={classes['custom-input']}
            name="hourlyRate"
            min={10}
            max={50}
            type="number"
            value={professionalDetails.hourlyRate}
            onChange={handleInputChange}
            isInvalid={professionalDetails.hourlyRate < 10 || professionalDetails.hourlyRate > 50}
          />
          <InputGroup.Text>/ hour</InputGroup.Text>
        </InputGroup>
      </div>
    </div>
  )
}

export default ProfessionalDetailsSection