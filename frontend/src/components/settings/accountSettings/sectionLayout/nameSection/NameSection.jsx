import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import SectionLayout from '../SectionLayout';
import classes from './NameSection.module.css'

const NameSection = ({ initialName, onSave, isLoading }) => {
  const [name, setName] = useState(initialName || "");

  useEffect(() => {
    setName(initialName || "");
  }, [initialName]);

  const handleCancel = () => {
    setName(initialName || "");
  };

  const handleSave = () => {
    onSave(name)
  };

  return (
    <SectionLayout
      title="Name"
      currentValue={name}
      initialValue={initialName}
      onCancel={handleCancel}
      onSave={handleSave}
      isLoading={isLoading}
    >
      {(isEditing) => (
        isEditing ? (
          <Form.Control
            className={classes['custom-input']}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
        ) : (
          <p
            className={`${classes['name-content']} m-0`}
          >
            {name}
          </p>
        )
      )}
    </SectionLayout>
  );
};

export default NameSection;