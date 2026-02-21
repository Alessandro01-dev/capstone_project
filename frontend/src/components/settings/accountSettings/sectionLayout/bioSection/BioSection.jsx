import { useState } from 'react';
import { Form } from 'react-bootstrap';
import SectionLayout from '../SectionLayout';
import classes from './BioSection.module.css'

const BioSection = ({ initialBio, onSave, isLoading }) => {

  const [bio, setBio] = useState(initialBio || "")

  const maxLength = 1000;
  const isOverLimit = bio.length > maxLength;

  const handleCancel = () => {
    setBio(initialBio || "")
  }

  const handleSave = () => {
    onSave(bio)
  }

  return (
    <SectionLayout
      title="Biography"
      currentValue={bio}
      initialValue={initialBio}
      onCancel={handleCancel}
      customDisable={isOverLimit}
      onSave={handleSave}
      isLoading={isLoading}
    >
      {(isEditing) => (
        isEditing ? (
          <div className="w-100">
            <Form.Control
              className={classes['custom-input']}
              as="textarea"
              rows={6}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              isInvalid={isOverLimit}
              placeholder="Describe yourself..."
              autoFocus
            />
            <div className="d-flex justify-content-end mt-1">
              <small className={isOverLimit ? "text-danger fw-bold" : "text-muted"}>
                {bio.length} / {maxLength}
              </small>
            </div>
          </div>
        ) : (
          <p
            className={`${classes['bio-content']} m-0`}
          >
            {bio}
          </p>
        )
      )}
    </SectionLayout>
  );
};

export default BioSection;
