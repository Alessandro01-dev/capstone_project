import LanguagesSelector from "../../settings/languagesSettings/languagesSection/languagesSelector/LanguagesSelector"
import LanguageTagsContainer from "../../settings/languagesSettings/languagesSection/languageTagsContainer/LanguageTagsContainer"
import { languageTaughtLevels } from '../../settings/languagesSettings/languagesMock';
import { useState } from "react";

const LanguagesTaughtSection = ({
  taughtNativeLanguages,
  setTaughtNativeLanguages,
  taughtOtherLanguages,
  setTaughtOtherLanguages
}) => {

  const [temporaryNativeLanguages, setTemporaryNativeLanguages] = useState(null);

  const [temporaryTaughtLanguages, setTemporaryTaughtLanguages] = useState(null);
  const [tempTaughtLevel, setTempTaughtLevel] = useState(languageTaughtLevels[0]);

  const handleAddNative = () => {
    if (temporaryNativeLanguages) {
      const isAlreadyAdded = taughtNativeLanguages.find(
        (language) => language.code === temporaryNativeLanguages.value
      );

      if (!isAlreadyAdded) {
        setTaughtNativeLanguages([
          ...taughtNativeLanguages,
          {
            code: temporaryNativeLanguages.value,
            label: temporaryNativeLanguages.label,
            level: 'Native'
          }
        ]);
      }
      setTemporaryNativeLanguages(null);
    }
  };

  const handleAddTaught = () => {
    if (temporaryTaughtLanguages && tempTaughtLevel) {
      const isAlreadyAdded = taughtOtherLanguages.find(
        (language) => language.code === temporaryTaughtLanguages.value
      );

      if (!isAlreadyAdded) {
        setTaughtOtherLanguages([
          ...taughtOtherLanguages,
          {
            code: temporaryTaughtLanguages.value,
            label: temporaryTaughtLanguages.label,
            level: tempTaughtLevel.value
          }
        ]);
      }
      setTemporaryTaughtLanguages(null);
      setTempTaughtLevel(languageTaughtLevels[0]);
    }
  };

  return (
    <div className="d-flex flex-column gap-3">
      <h4>2. Languages You Teach</h4>
      <h6>Native Languages</h6>
      <LanguagesSelector
        isNative={true}
        temporaryLanguage={temporaryNativeLanguages}
        setTemporaryLanguage={setTemporaryNativeLanguages}
        onAdd={handleAddNative}
      />
      <LanguageTagsContainer
        isNative={true}
        confirmedLanguages={taughtNativeLanguages}
        setConfirmedLanguages={setTaughtNativeLanguages}
      />

      <h6>Other Languages</h6>
      <LanguagesSelector
        isNative={false}
        isTeacher={true}
        temporaryLanguage={temporaryTaughtLanguages}
        setTemporaryLanguage={setTemporaryTaughtLanguages}
        temporaryLevel={tempTaughtLevel}
        setTemporaryLevel={setTempTaughtLevel}
        onAdd={handleAddTaught}
      />
      <LanguageTagsContainer
        isNative={false}
        confirmedLanguages={taughtOtherLanguages}
        setConfirmedLanguages={setTaughtOtherLanguages}
      />
    </div>
  );
};

export default LanguagesTaughtSection;
