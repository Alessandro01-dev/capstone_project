import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import LanguagesSection from "./languagesSection/LanguagesSection";

const LanguagesSettings = () => {
  const { authData } = useAuth();
  const hasLoadedInitialData = useRef(false);

  const [native, setNative] = useState([]);
  const [spoken, setSpoken] = useState([]);
  const [learning, setLearning] = useState([]);

  useEffect(() => {

    if (authData?.languages && !hasLoadedInitialData.current) {
      setNative(authData.languages.native || []);
      setSpoken(authData.languages.spoken || []);
      setLearning(authData.languages.learning || []);

      hasLoadedInitialData.current = true;
    }
  }, [authData]);

  return (
    <div className='d-flex flex-column gap-5'>
      <LanguagesSection
        title='Native Languages'
        isNative={true}
        subFieldName="native"
        confirmedLanguages={native}
        setConfirmedLanguages={setNative}
      />
      <LanguagesSection
        title='Spoken Languages'
        isNative={false}
        subFieldName="spoken"
        confirmedLanguages={spoken}
        setConfirmedLanguages={setSpoken}
      />
      <LanguagesSection
        title='Learning Languages'
        isNative={false}
        subFieldName="learning"
        confirmedLanguages={learning}
        setConfirmedLanguages={setLearning}
      />
    </div>
  );
};

export default LanguagesSettings;