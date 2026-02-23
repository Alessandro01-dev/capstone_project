import { Button } from "react-bootstrap"
import Select from 'react-select'
import { languagesMock, languageLevels, languageTaughtLevels } from "../../languagesMock"
import classes from './LanguagesSelector.module.css'

const LanguagesSelector = ({ isNative, isTeacher = false, temporaryLanguage, setTemporaryLanguage, temporaryLevel, setTemporaryLevel, onAdd, title }) => {

  const getFilteredLevels = () => {
    if (isNative) return [];

    if (title === 'Learning Languages') {

      return languageLevels.filter(l => ['A1', 'A2', 'B1', 'B2'].includes(l.value));
    }

    if (title === 'Spoken Languages') {

      return languageLevels.filter(l => ['B1', 'B2', 'C1', 'C2'].includes(l.value));
    }

    return isTeacher ? languageTaughtLevels : languageLevels;
  };

  const filteredOptions = getFilteredLevels();


  const formatLevelOptionLabel = (languageLevels) => (
    <div
      className={classes['level-option-container']}
    >
      <div
        className={classes['level-option-label']}
      >
        {languageLevels.label}
      </div>
      <div
        className={classes['level-option-description']}
      >
        {languageLevels.description}
      </div>
    </div>
  );

  return (
    <div
      className={`d-flex ${isNative ? '' : 'flex-column flex-xxl-row'} justify-content-between w-100 gap-2`}
    >
      <Select
        className={isNative ? 'w-100' : 'flex-grow-1 w-100'}
        classNamePrefix="react-select"
        value={temporaryLanguage}
        options={languagesMock}
        placeholder="Select language..."
        onChange={setTemporaryLanguage}
        isSearchable={true}
      />

      <div
        className={`d-flex align-items-center justify-content-between flex-grow-1 gap-2 ${isNative ? '' : 'w-100'}`}
      >
        {!isNative && (
          <Select
            className="w-100"
            classNamePrefix="react-select"
            value={temporaryLevel}
            options={filteredOptions}
            formatOptionLabel={formatLevelOptionLabel}
            onChange={setTemporaryLevel}
            isSearchable={false}
          />
        )}

        <Button
          onClick={onAdd}
          variant='dark'
          className="px-4 align-self-stretch"
        >
          Add
        </Button>
      </div>
    </div>
  )
}

export default LanguagesSelector