import { Button, Form } from 'react-bootstrap';
import classes from './BecomeTeacherForm.module.css';
import LanguagesTaughtSection from './languagesTaughtSection/LanguagesTaugthSection';
import TeacherBioSection from './teacherBioSection/TeacherBioSection';
import CertificationsSection from './certificationsSection/CertificationsSection';
import ProfessionalDetailsSection from './professionalDetailsSection/ProfessionalDetailsSection';
import { useState } from 'react';

const BecomeTeacherForm = () => {

  const [certificationsList, setCertificationsList] = useState([]);
  const [biography, setBiography] = useState("");
  const [professionalDetails, setProfessionalDetails] = useState({
    experience: 1,
    availability: "",
    hourlyRate: 20
  });
  const [taughtNativeLanguages, setTaughtNativeLanguages] = useState([]);
  const [taughtOtherLanguages, setTaughtOtherLanguages] = useState([]);

  const handleFinalSubmit = () => {
    const payload = {
      bio: biography,
      availability: professionalDetails.availability,
      experience: professionalDetails.experience,
      hourlyRate: professionalDetails.hourlyRate,
      languagesTaught: {
        natives: taughtNativeLanguages.map(language => ({ code: language.code })),
        others: taughtOtherLanguages.map(language => ({ code: language.code, level: language.level }))
      },
      certifications: certificationsList.map(certification => ({
        name: certification.name,
        institution: certification.institution,
        year: certification.year,
        file: certification.file
      }))
    };
    console.log(payload);
  };

  return (
    <Form className={classes['teacher-form-main-container']}>

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
      />

      <ProfessionalDetailsSection
        professionalDetails={professionalDetails}
        setProfessionalDetails={setProfessionalDetails}
      />
      
      <div className="d-flex justify-content-end gap-3 border-top pt-5 mb-5">
        <Button
          variant="outline-dark"
          className="px-3 py-2"
        >
          Cancel
        </Button>
        <Button
          variant="success"
          className="px-3 py-2 shadow-sm"
          onClick={handleFinalSubmit}
        >
          Submit Application
        </Button>
      </div>
    </Form>
  );
};

export default BecomeTeacherForm;
