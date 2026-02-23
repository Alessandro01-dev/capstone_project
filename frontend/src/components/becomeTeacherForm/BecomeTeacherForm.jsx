import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import classes from './BecomeTeacherForm.module.css';
import LanguagesTaughtSection from './languagesTaughtSection/LanguagesTaugthSection';
import TeacherBioSection from './teacherBioSection/TeacherBioSection';
import CertificationsSection from './certificationsSection/CertificationsSection';
import ProfessionalDetailsSection from './professionalDetailsSection/ProfessionalDetailsSection';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import useTutors from '../../hooks/useTutors';
import toast from 'react-hot-toast';

const BecomeTeacherForm = () => {

  const { authData, getProfile } = useAuth();
  const [resetKey, setResetKey] = useState(0);

  const { createTutor, tutorsIsLoading, tutorsError, setTutorsError } = useTutors();

  const [certificationsList, setCertificationsList] = useState([]);
  const [biography, setBiography] = useState("");
  const [professionalDetails, setProfessionalDetails] = useState({
    experience: 1,
    availability: "",
    hourlyRate: 20
  });
  const [taughtNativeLanguages, setTaughtNativeLanguages] = useState([]);
  const [taughtOtherLanguages, setTaughtOtherLanguages] = useState([]);

  const handleReset = () => {

    setResetKey(prev => prev + 1);
    setCertificationsList([]);
    setBiography("");
    setProfessionalDetails({
      experience: 1,
      availability: "",
      hourlyRate: 20
    });
    setTaughtNativeLanguages([]);
    setTaughtOtherLanguages([]);

    if (setTutorsError) setTutorsError(null);

    toast.success("Form cleared");

  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      user: authData?._id,
      bio: biography,
      availability: professionalDetails.availability,
      experience: professionalDetails.experience,
      hourlyRate: professionalDetails.hourlyRate,
      languagesTaught: {
        natives: taughtNativeLanguages.map(lang => ({ code: lang.code })),
        others: taughtOtherLanguages.map(lang => ({ code: lang.code, level: lang.level }))
      },
      certifications: certificationsList.map(certification => ({
        name: certification.name,
        institution: certification.institution,
        year: certification.year,
        file: certification.file
      }))
    };

    const result = await createTutor(payload);

    if (result) {
      toast.success("Congratulations! You are now a tutor!", { icon: '🎓' });
      await getProfile();

    }
  };

  const isFormValid =
    biography.trim().length >= 50 &&
    biography.trim().length <= 1000 &&
    taughtNativeLanguages.length > 0 &&
    certificationsList.length > 0 &&
    professionalDetails.availability.trim() !== "" &&
    professionalDetails.hourlyRate > 0;

  return (
    <Form className={classes['teacher-form-main-container']}
      onSubmit={handleFinalSubmit}
    >

      <TeacherBioSection
        biography={biography}
        setBiography={setBiography}
      />

      <LanguagesTaughtSection
        taughtNativeLanguages={taughtNativeLanguages}
        setTaughtNativeLanguages={setTaughtNativeLanguages}
        taughtOtherLanguages={taughtOtherLanguages}
        setTaughtOtherLanguages={setTaughtOtherLanguages}
      />

      <CertificationsSection
        certificationsList={certificationsList}
        setCertificationsList={setCertificationsList}
        key={resetKey}
      />

      <ProfessionalDetailsSection
        professionalDetails={professionalDetails}
        setProfessionalDetails={setProfessionalDetails}
      />

      {tutorsError && (
        <Alert variant="danger" className="text-center">
          {tutorsError}
        </Alert>
      )}

      <div className="d-flex justify-content-end gap-3 border-top pt-5 mb-5">
        <Button
          variant="outline-dark"
          className="px-3 py-2"
          disabled={tutorsIsLoading}
          onClick={handleReset}
        >
          Cancel
        </Button>
        <Button
          type='submit'
          variant="success"
          className="px-3 py-2 shadow-sm"
          disabled={tutorsIsLoading || !isFormValid}
        >
          {tutorsIsLoading ? (
            <Spinner
              className='mx-auto'
              size='sm'
            />
          ) : (
            "Submit Application"
          )}
        </Button>
      </div>
    </Form>
  );
};

export default BecomeTeacherForm;
