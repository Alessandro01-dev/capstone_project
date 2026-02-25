import { Modal, Button, Form, Spinner, Alert } from 'react-bootstrap';
import { DateInput, TimeInput } from '@mantine/dates';
import classes from './MeetingModal.module.css'

const MeetingModal = ({
  show,
  onHide,
  onSave,
  newMeeting,
  setNewMeeting,
  selectedDate,
  setSelectedDate,
  isLoading,
  error,
  timeInputRef
}) => (
  <Modal show={show} onHide={onHide} centered>
    <Modal.Header closeButton className="border-0 pb-0">
      <Modal.Title className="fw-bold">New Meeting</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      {error && <Alert variant="danger" className="py-2 small">{error}</Alert>}
      <div className="d-flex flex-column gap-3">
        <Form.Group>
          <label className="small fw-bold mb-1 text-muted">Meeting Title</label>
          <Form.Control
            className={classes['custom-input']}
            placeholder="Ex: Coffee with Thomas"
            value={newMeeting.title}
            onChange={(e) => setNewMeeting({ ...newMeeting, title: e.target.value })}
          />
        </Form.Group>

        <div className="d-flex gap-2">
          <div className="flex-grow-1">
            <label className="small fw-bold mb-1 text-muted">Date</label>
            <DateInput
              classNames={{
                input: classes['mantine-custom-input'],
                placeholder: classes['mantine-custom-placeholder']
              }}
              value={selectedDate}
              onChange={setSelectedDate}
              placeholder="Pick a date"
              minDate={new Date()}
              popoverProps={{ zIndex: 10000 }}
              clearable
            />
          </div>
          <div className='w-25'>
            <label className="small fw-bold mb-1 text-muted">Time</label>
            <TimeInput
              classNames={{
                input: classes['mantine-custom-input'],
                placeholder: classes['mantine-custom-placeholder']
              }}
              ref={timeInputRef}
              value={newMeeting.time}
              onChange={(e) => setNewMeeting({ ...newMeeting, time: e.target.value })}
            />
          </div>
        </div>

        <Form.Group>
          <label className="small fw-bold mb-1 text-muted">Location</label>
          <Form.Control
            className={classes['custom-input']}
            placeholder="Ex: Piazza Duomo"
            value={newMeeting.location}
            onChange={(e) => setNewMeeting({ ...newMeeting, location: e.target.value })}
          />
        </Form.Group>
      </div>
    </Modal.Body>

    <Modal.Footer className="border-0 pt-0 mt-2">
      <Button variant="outline-secondary" className="px-4" onClick={onHide} disabled={isLoading}>
        Cancel
      </Button>
      <Button
        variant="success"
        className="px-4 shadow-sm d-flex align-items-center gap-2"
        onClick={onSave}
        disabled={
          isLoading ||
          !selectedDate ||
          !newMeeting.title.trim() ||
          !newMeeting.time.trim() ||
          !newMeeting.location.trim()
        }
      >
        {isLoading ? (
          <Spinner className='mx-auto' size="sm" />
        ) : 'Save Meeting'}
      </Button>
    </Modal.Footer>
  </Modal>
);

export default MeetingModal;