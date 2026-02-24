import { useEffect, useState } from 'react';
import Select from 'react-select';
import SectionLayout from '../SectionLayout';
import { countriesMock } from './countriesMock';
import classes from './NationalitySection.module.css'

const NationalitySection = ({ initialNationality, onSave, isLoading }) => {

  const [nationality, setNationality] = useState(initialNationality || { name: "", code: "" });

  useEffect(() => {
    setNationality(initialNationality || { name: "", code: "" });
  }, [initialNationality]);

  const handleCancel = () => {
    setNationality(initialNationality || { name: "", code: "" });
  };

  const currentOption = countriesMock.find(c => c.value === nationality.code) || null;

  return (
    <SectionLayout
      title="Nationality"
      currentValue={JSON.stringify(nationality)}
      initialValue={JSON.stringify(initialNationality)}
      onCancel={handleCancel}
      onSave={() => onSave(nationality)}
      isLoading={isLoading}
    >
      {(isEditing) => (
        isEditing ? (
          <div className="w-100">
            <Select
              options={countriesMock}
              value={currentOption}
              placeholder="Select your nationality..."
              isSearchable={true}
              onChange={(option) => setNationality({
                name: option.label,
                code: option.value
              })}
            />
          </div>
        ) : (
          <div className="d-flex align-items-center gap-3">
            {nationality.code ? (
              <>
                <img
                  className={classes['nationality-flag']}
                  src={`https://flagcdn.com/w640/${nationality.code?.toLowerCase()}.png`}
                  alt="nationality flag"
                />
                <p className="m-0 fw-medium">{nationality.name}</p>
              </>
            ) : (
              <p className="m-0 text-secondary italic">No nationality specified</p>
            )}
          </div>
        )
      )}
    </SectionLayout>
  );
};

export default NationalitySection;