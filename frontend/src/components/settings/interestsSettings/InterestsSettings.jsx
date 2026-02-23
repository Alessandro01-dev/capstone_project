import { useEffect, useMemo, useState } from 'react';
import Select from 'react-select';
import { hobbiesMock } from './hobbiesMock';
import { Button } from 'react-bootstrap';
import classes from './InterestsSettings.module.css'
import SaveButtons from '../languagesSettings/languagesSection/saveButtons/SaveButtons';
import { useAuth } from '../../../contexts/AuthContext';
import useUsers from '../../../hooks/useUsers';
import toast from 'react-hot-toast';

const InterestsSettings = () => {
  const { authData, getProfile } = useAuth();
  const { updateUser, usersIsLoading } = useUsers();

  const [temporarySelection, setTemporarySelection] = useState([]);
  const [confirmedHobbies, setConfirmedHobbies] = useState([]);

  useEffect(() => {
    if (authData?.interests) {
      const initialHobbies = authData.interests.map(interest => {
        const found = hobbiesMock.find(h => h.value === interest);
        return found ? found : { value: interest, label: interest };
      });
      setConfirmedHobbies(initialHobbies);
    }
  }, [authData]);

  const handleAddHobbies = () => {
    if (temporarySelection.length === 0) return;

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

  const handleSave = async () => {
    try {
      const interestsData = confirmedHobbies.map(h => h.value);
      await updateUser(authData._id, { interests: interestsData });
      await getProfile();
      toast.success("Interests updated!");
    } catch (error) {
      toast.error("Error saving interests");
    }
  };

  const handleCancel = () => {
    const original = authData?.interests?.map(interest => {
      const found = hobbiesMock.find(h => h.value === interest);
      return found ? found : { value: interest, label: interest };
    }) || [];
    setConfirmedHobbies(original);
  };

  const hasChanges = useMemo(() => {
    const currentValues = confirmedHobbies.map(h => h.value).sort();
    const originalValues = (authData?.interests || []).slice().sort();
    return JSON.stringify(currentValues) !== JSON.stringify(originalValues);
  }, [confirmedHobbies, authData?.interests]);

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
        <SaveButtons
          onCancel={handleCancel}
          onSave={handleSave}
          isDisabled={!hasChanges || usersIsLoading}
          isLoading={usersIsLoading}
        />
      </div>
    </div>
  );
};

export default InterestsSettings;
