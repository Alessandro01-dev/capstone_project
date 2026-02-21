import { useState } from 'react';
import Select from 'react-select';
import { hobbiesMock } from './hobbiesMock';
import { Button } from 'react-bootstrap';
import classes from './InterestsSettings.module.css'

const InterestsSettings = () => {

  const [temporarySelection, setTemporarySelection] = useState([]);
  const [confirmedHobbies, setConfirmedHobbies] = useState([]);

  const handleAddHobbies = () => {
    const newHobbies = temporarySelection.filter(
      (item) => !confirmedHobbies.find((hobby) => hobby.value === item.value)
    );

    const updatedHobbies = [...confirmedHobbies, ...newHobbies];

    updatedHobbies.sort((a, b) => a.label.localeCompare(b.label));

    setConfirmedHobbies(updatedHobbies);
    setTemporarySelection([]);
  };


  const removeHobby = (hobbyValue) => {
    setConfirmedHobbies(confirmedHobbies.filter(hobby => hobby.value !== hobbyValue));
  };

  return (
    <div
      className='d-flex flex-column gap-3'
    >
      <h4>
        Interests & Hobbies
      </h4>

      <div
        className='d-flex gap-2'
      >
        <Select
          className='w-100'
          classNamePrefix="react-select"
          isMulti
          value={temporarySelection}
          options={hobbiesMock}
          placeholder="Search hobbies..."
          onChange={(selected) => setTemporarySelection(selected || [])}
          hideSelectedOptions={true}
        />
        <Button
          onClick={handleAddHobbies}
          variant='dark'
          className='px-4'
        >
          Add
        </Button>
      </div>

      <div
        className={classes['confirmed-hobbies-container']}
      >
        {confirmedHobbies.length === 0 && (
          <p
            className={classes['no-interests-paragraph']}
          >
            No interests added yet...
          </p>
        )}

        {confirmedHobbies.map((hobby) => (
          <div
            key={hobby.value}
            className={classes['single-hobby-tag']}
          >
            <p
              className='m-0'
            >
              {hobby.label}
            </p>
            <p
              onClick={() => removeHobby(hobby.value)}
              className={`${classes['remove-tag-close-button']} m-0`}
            >
              ×
            </p>
          </div>
        ))}
      </div>
      <div
        className='d-flex align-items-center align-self-end gap-2'
      >
        <Button
          variant='outline-dark'
          className='px-4'
          onClick={() => {
            setConfirmedHobbies([])
          }}
        >
          Cancel
        </Button>
        <Button
          variant='success'
          className='px-4'
          disabled={confirmedHobbies.length === 0}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default InterestsSettings;
