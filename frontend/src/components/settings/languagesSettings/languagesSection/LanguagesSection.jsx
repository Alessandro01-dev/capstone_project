import { useState } from "react";
import { languageLevels } from "../languagesMock";
import LanguagesSelector from "./languagesSelector/LanguagesSelector"
import LanguageTagsContainer from "./languageTagsContainer/LanguageTagsContainer"
import SaveButtons from "./saveButtons/SaveButtons"

const LanguagesSection = ({ title, isNative }) => {

  const [temporaryLanguage, setTemporaryLanguage] = useState(null);
  const [temporaryLevel, setTemporaryLevel] = useState(languageLevels[0]);
  const [confirmedLanguages, setConfirmedLanguages] = useState([]);

  const handleAddLanguage = () => {
    if (!temporaryLanguage || !temporaryLevel) return;

    if (confirmedLanguages.find(l => l.code === temporaryLanguage.value)) {
      alert("Language already added!");
      return;
    }

    const languageObject = {
      code: temporaryLanguage.value,
      label: temporaryLanguage.label,
      ...(isNative ? {} : { level: temporaryLevel.value })
    };

    const updatedLanguages = [...confirmedLanguages, languageObject];
    updatedLanguages.sort((a, b) => a.label.localeCompare(b.label));

    setConfirmedLanguages(updatedLanguages);
    setTemporaryLanguage(null);
    setTemporaryLevel(languageLevels[0]);
  };

  return (
    <div className='d-flex flex-column gap-3'>
      <h4>{title}</h4>

      <LanguagesSelector
        isNative={isNative}
        temporaryLanguage={temporaryLanguage}
        setTemporaryLanguage={setTemporaryLanguage}
        temporaryLevel={temporaryLevel}
        setTemporaryLevel={setTemporaryLevel}
        onAdd={handleAddLanguage}
      />

      <LanguageTagsContainer
        isNative={isNative}
        confirmedLanguages={confirmedLanguages}
        setConfirmedLanguages={setConfirmedLanguages}
      />

      <SaveButtons
        onCancel={() => setConfirmedLanguages([])}
        isDisabled={confirmedLanguages.length === 0}
      />
    </div>
  )
}

export default LanguagesSection