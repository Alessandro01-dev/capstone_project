import { useState, useRef, useEffect, useMemo } from 'react';
import { Button, Spinner, Alert } from 'react-bootstrap';
import toast from 'react-hot-toast';
import classes from './MeetingManager.module.css';
import NoScheduledMeetings from '../../../assets/NoScheduledMeeting';
import useUsers from '../../../hooks/useUsers';
import { useAuth } from '../../../contexts/AuthContext';
import MeetingCard from './meetingCard/MeetingCard';
import MeetingModal from './meetingModal/MeetingModal';

const MeetingManager = () => {
  const { authData } = useAuth();
  const { updateUser, usersIsLoading, usersError } = useUsers();
  const timeInputRef = useRef(null);

  const [meetings, setMeetings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [newMeeting, setNewMeeting] = useState({ title: '', location: '', time: '' });

  useEffect(() => {
    if (authData?.meetings) {
      setMeetings(authData.meetings);
    }
  }, [authData]);

  const sortedMeetings = useMemo(() => {
    return [...meetings].sort((a, b) => new Date(a.fullDate) - new Date(b.fullDate));
  }, [meetings]);

  const handleSave = async () => {
    const userId = authData?._id || authData?.user?._id;
    if (!userId) return;

    const meetingDate = selectedDate ? new Date(selectedDate) : null;
    const meetingToAdd = { ...newMeeting, fullDate: meetingDate, id: Date.now() };
    const updatedMeetings = [...meetings, meetingToAdd];

    try {
      const success = await updateUser(userId, { meetings: updatedMeetings });
      if (success) {
        setMeetings(updatedMeetings);
        setNewMeeting({ title: '', location: '', time: '' });
        setSelectedDate(null);
        setShowModal(false);
        toast.success('Meeting scheduled successfully!');
      }
    } catch (err) {
      toast.error("Failed to save meeting.");
    }
  };

  const handleDelete = async (indexToDelete) => {
    const userId = authData?._id || authData?.user?._id;
    const updatedMeetings = meetings.filter((_, index) => index !== indexToDelete);

    try {
      const success = await updateUser(userId, { meetings: updatedMeetings });
      if (success) {
        setMeetings(updatedMeetings);
        toast.success('Meeting removed.');
      }
    } catch (err) {
      toast.error("Failed to delete meeting.");
    }
  };

  return (
    <>
      <h4 className="fw-bold mb-3 text-start">Meeting Manager</h4>
      <div className="w-100">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="fw-bold m-0 text-start">Next Meetings</h4>
          <div
            className={classes['add-meeting-btn']}
            style={{ cursor: 'pointer' }}
            onClick={() => setShowModal(true)}
          >
            +
          </div>
        </div>

        {usersError && <Alert variant="danger" className="mt-3 py-2 small">{usersError}</Alert>}

        <div className="d-flex flex-column gap-3 py-3">
          {usersIsLoading && !showModal ? (
            <div className="d-flex justify-content-center py-5">
              <Spinner animation="border" variant="success" />
            </div>
          ) : sortedMeetings.length > 0 ? (
            sortedMeetings.map((meeting, index) => (
              <MeetingCard
                key={meeting.id || index}
                meeting={meeting}
                onDelete={() => handleDelete(index)}
              />
            ))
          ) : (
            <div className="d-flex flex-column align-items-center justify-content-center opacity-75">
              <NoScheduledMeetings />
              <p className="my-2 text-muted small fw-medium">No meetings scheduled yet.</p>
              <Button variant="outline-success" size="sm" onClick={() => setShowModal(true)}>
                + Schedule your first one
              </Button>
            </div>
          )}
        </div>

        <MeetingModal
          show={showModal}
          onHide={() => setShowModal(false)}
          onSave={handleSave}
          newMeeting={newMeeting}
          setNewMeeting={setNewMeeting}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          isLoading={usersIsLoading}
          error={usersError}
          timeInputRef={timeInputRef}
        />
      </div>
    </>
  );
};

export default MeetingManager;