import { useState } from 'react';
import { Modal, Button, Form, Spinner, Alert } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useAuth } from '../../contexts/AuthContext';
import useConnections from '../../hooks/useConnections';
import LanguageTagsContainer from '../settings/languagesSettings/languagesSection/languageTagsContainer/LanguageTagsContainer';
import LanguagesSelector from '../settings/languagesSettings/languagesSection/languagesSelector/LanguagesSelector'
import classes from './ConnectionRequestModal.module.css'

const ConnectionRequestModal = ({ show, handleClose, targetUser, type }) => {

  const { authData } = useAuth();
  const { createConnectionRequest, connectionsIsLoading, connectionsError } = useConnections();

  const [temporaryLanguage, setTemporaryLanguage] = useState(null);
  const [temporaryLevel, setTemporaryLevel] = useState(null);
  const [confirmedLanguages, setConfirmedLanguages] = useState([]);
  const [message, setMessage] = useState('');

  const isLoggedUser = authData?._id === targetUser?._id;

  const handleAddLanguage = () => {
    if (!temporaryLanguage || !temporaryLevel) return;

    const newLang = {
      code: temporaryLanguage.value,
      label: temporaryLanguage.label,
      level: temporaryLevel.value
    };

    setConfirmedLanguages([newLang]);
    setTemporaryLanguage(null);
    setTemporaryLevel(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (confirmedLanguages.length === 0) {
      return toast.error("Please add a language for this request");
    }

    const result = await createConnectionRequest({
      to: targetUser._id,
      type: type,
      language: {
        code: confirmedLanguages[0].code,
        level: confirmedLanguages[0].level
      },
      message: message
    });

    if (result) {
      setConfirmedLanguages([]);
      setMessage('');
      handleClose();
      toast.success('Request sent successfully!');
    }
  };

  const minLengthMsg = 50;
  const maxLengthMsg = 500;
  const isTooShortMsg = message.length > 0 && message.length < minLengthMsg;
  const isOverLimitMsg = message.length > maxLengthMsg;
  const isInvalid = isTooShortMsg || isOverLimitMsg;

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header
        className='border-0'
        closeButton
      >
        <Modal.Title>Request contact to {targetUser?.name} {targetUser?.surname}</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body className="d-flex flex-column gap-3">
          {connectionsError && <Alert variant="danger">{connectionsError}</Alert>}

          <div className="border p-3 rounded-4 bg-light">
            <p className="fw-bold mb-2">Language and Level</p>
            <LanguagesSelector
              isNative={false}
              temporaryLanguage={temporaryLanguage}
              setTemporaryLanguage={setTemporaryLanguage}
              temporaryLevel={temporaryLevel}
              setTemporaryLevel={setTemporaryLevel}
              onAdd={handleAddLanguage}
              title="Request Language"
            />
          </div>

          <LanguageTagsContainer
            isNative={false}
            confirmedLanguages={confirmedLanguages}
            setConfirmedLanguages={setConfirmedLanguages}
          />

          <Form.Group className="mt-2">
            <Form.Label className="fw-bold">Your Message</Form.Label>
            <Form.Control
              className={classes['custom-input']}
              required
              as="textarea"
              rows={4}
              placeholder="Explain why you'd like to connect..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              isInvalid={isInvalid}
            />
            <div className="d-flex justify-content-end mt-1">
              <small className={isInvalid ? "text-danger fw-bold" : "text-muted"}>
                {message.length} / {maxLengthMsg}
              </small>
            </div>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer
          className='border-0'
        >
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button
            variant="success"
            type="submit"
            disabled={connectionsIsLoading || isLoggedUser || confirmedLanguages.length === 0}
            className="px-4"
          >
            {connectionsIsLoading ? (
              <Spinner size="sm" />
            ) : 'Send Request'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ConnectionRequestModal;