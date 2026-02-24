import { useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import useUsers from "../../../../hooks/useUsers";
import LanguagesSelector from "./languagesSelector/LanguagesSelector";
import LanguageTagsContainer from "./languageTagsContainer/LanguageTagsContainer";
import SaveButtons from "./saveButtons/SaveButtons";
import toast from "react-hot-toast";

const LanguagesSection = ({ title, isNative, subFieldName, confirmedLanguages, setConfirmedLanguages }) => {

  const { authData, getProfile } = useAuth();
  const { updateUser, usersIsLoading } = useUsers();

  const [temporaryLanguage, setTemporaryLanguage] = useState(null);
  const [temporaryLevel, setTemporaryLevel] = useState(null);

  const handleAddLanguages = () => {
    if (!temporaryLanguage || (!isNative && !temporaryLevel)) return;

    if (confirmedLanguages.some(language => language.code === temporaryLanguage.value)) {
      return toast.error("Language already added");
    }

    const newLang = {
      code: temporaryLanguage.value,
      label: temporaryLanguage.label,
      ...(isNative ? {} : { level: temporaryLevel.value })
    };

    setConfirmedLanguages([...confirmedLanguages, newLang]);
    setTemporaryLanguage(null);
    setTemporaryLevel(null);
  };

  const handleSave = async () => {
    try {
      const sanitized = confirmedLanguages.map(language => ({
        code: language.code,
        ...(language.level ? { level: language.level } : {})
      }));

      const updatedLanguages = {
        ...authData.languages,
        [subFieldName]: sanitized
      };

      await updateUser(authData._id, { languages: updatedLanguages });
      await getProfile();
      toast.success(`${title} saved!`);
    } catch (error) {
      toast.error("Error saving changes");
    }
  };

  const handleCancel = () => {
    setConfirmedLanguages(authData?.languages?.[subFieldName] || []);
  };

  const sanitize = (arr) => arr.map(language => ({
    code: language.code,
    ...(language.level ? { level: language.level } : {})
  }));

  const hasChanges = JSON.stringify(sanitize(confirmedLanguages)) !==
    JSON.stringify(sanitize(authData?.languages?.[subFieldName] || []));


  return (
    <div className='d-flex flex-column gap-3 border p-4 rounded-4 bg-white'>
      <h4>{title}</h4>
      <LanguagesSelector
        isNative={isNative}
        temporaryLanguage={temporaryLanguage}
        setTemporaryLanguage={setTemporaryLanguage}
        temporaryLevel={temporaryLevel}
        setTemporaryLevel={setTemporaryLevel}
        onAdd={handleAddLanguages}
        title={title}
      />
      <LanguageTagsContainer
        isNative={isNative}
        confirmedLanguages={confirmedLanguages}
        setConfirmedLanguages={setConfirmedLanguages}
      />
      <SaveButtons
        onCancel={handleCancel}
        onSave={handleSave}
        isDisabled={!hasChanges || usersIsLoading}
        isLoading={usersIsLoading}
      />
    </div>
  );
};

export default LanguagesSection
