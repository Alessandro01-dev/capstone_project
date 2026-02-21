import { useState, useCallback } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import UploadFileIcon from "../../../assets/UploadFileIcon";
import PdfIcon from '../../../assets/PdfIcon';
import classes from './CertificationsSection.module.css'
import { YearPickerInput } from '@mantine/dates';

const CertificationsSection = ({ certificationsList, setCertificationsList }) => {

  const [temporaryCertification, setTemporaryCertification] = useState({
    name: '',
    institution: '',
    year: null,
    file: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTemporaryCertification({
      ...temporaryCertification,
      [name]: value
    })
  }

  const handleYearChange = (date) => {
    setTemporaryCertification({
      ...temporaryCertification,
      year: date
    })
  }


  const onDropCertificationFile = useCallback((acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setTemporaryCertification((previousState) => ({
        ...previousState,
        file: file
      }));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropCertificationFile,
    accept: { 'application/pdf': [] },
    multiple: false
  });

  const handleAddCertificationToList = () => {
    const { name, institution, file, year } = temporaryCertification;

    if (name && institution && file && year) {
      const yearValue = new Date(year).getFullYear();

      setCertificationsList([
        ...certificationsList,
        {
          id: crypto.randomUUID(),
          name,
          institution,
          file,
          year: yearValue,
        }
      ]);

      setTemporaryCertification({
        name: '',
        institution: '',
        year: null,
        file: null
      });
    } else {
      alert("Please fill all fields, including the year and the file.");
    }
  };


  const removeCertificationFromList = (idToRemove) => {
    setCertificationsList(certificationsList.filter(
      (certification) => certification.id !== idToRemove
    ));
  };

  return (
    <div className="d-flex flex-column gap-3">
      <h4>3. Certifications</h4>

      <div className="bg-light p-4 rounded-4 border shadow-sm d-flex flex-column gap-4">
        <Form.Control
          className={classes['custom-input']}
          name="name"
          type='text'
          placeholder="Name of Certification"
          value={temporaryCertification.name}
          onChange={handleInputChange}
        />
        <Form.Control
          className={classes['custom-input']}
          name="institution"
          type='text'
          placeholder="Institution"
          value={temporaryCertification.institution}
          onChange={handleInputChange}
        />
        <YearPickerInput
          classNames={{
            input: classes['mantine-custom-input'],
            placeholder: classes['mantine-custom-placeholder']
          }}
          value={temporaryCertification.year}
          onChange={handleYearChange}
          placeholder="Year"
          maxDate={new Date()}
          popoverProps={{ position: 'top' }}
        />

        <div
          {...getRootProps()}
          className={`${classes['dropzone-rect']} ${isDragActive ? classes.active : ''} ${temporaryCertification.file ? classes['has-file'] : ''}`}
        >
          <input {...getInputProps()} />

          <div className="d-flex flex-column align-items-center gap-2">
            {temporaryCertification.file ? (
              <div className="text-center">
                <p className="m-0 fw-bold text-success small">File selected:</p>
                <p className="m-0 small">
                  {temporaryCertification.file.name}
                </p>
              </div>
            ) : (
              <>
                <p className="m-0 small">Click or drag PDF certificate</p>
                <UploadFileIcon />
              </>
            )}
          </div>

          <div className={classes['dropzone-overlay']}>
            <p className="m-0">
              {isDragActive
                ? "Drop it!"
                : (temporaryCertification.file ? "Change File" : "Upload File")}
            </p>
          </div>
        </div>


        <Button
          className="d-flex ms-auto mt-3 px-4"
          variant="dark"
          size="sm"
          onClick={handleAddCertificationToList}
        >
          Add Certification
        </Button>
      </div>

      <div className="d-flex flex-column gap-2 mx-auto">
        {certificationsList.map(certification => (
          <div
            key={certification.id}
            className={`${classes['certification-preview-card']} d-flex align-items-center gap-3 w-100 shadow-sm bg-light p-3 rounded-3 border`}
          >
            <div>
              <PdfIcon />
            </div>
            <div className={classes['text-container']}>
              <p className="m-0 fw-bold">{certification.name}</p>
              <p className="m-0 small text-muted">
                {certification.institution} • {certification.year}
              </p>
            </div>
            <span
              className={`${classes['remove-btn']} m-0`}
              onClick={() => removeCertificationFromList(certification.id)}
            >
              ×
            </span>
          </div>
        ))}
      </div>


    </div>
  )
}

export default CertificationsSection