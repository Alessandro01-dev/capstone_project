import { useState } from 'react';
import { Form } from 'react-bootstrap';
import SectionLayout from '../SectionLayout';
import classes from './SurnameSection.module.css'

const SurnameSection = ({ initialSurname, onSave, isLoading }) => {
  const [surname, setSurname] = useState(initialSurname);

  const handleCancel = () => {
    setSurname(initialSurname);
  };

  const handleSave = () => {
    onSave(surname);
  };

  return (
    <SectionLayout
      title="Surname"
      currentValue={surname}
      initialValue={initialSurname}
      onCancel={handleCancel}
      onSave={handleSave}
      isLoading={isLoading}
    >
      {(isEditing) => (
        isEditing ? (
          <Form.Control
            className={classes['custom-input']}
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            autoFocus
          />
        ) : (
          <p
            className={`${classes['surname-content']} m-0`}
          >
            {surname}
          </p>
        )
      )}
    </SectionLayout>
  );
};

export default SurnameSection;