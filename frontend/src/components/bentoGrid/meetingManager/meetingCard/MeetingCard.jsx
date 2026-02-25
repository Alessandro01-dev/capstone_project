import TrashIcon from '../../../../assets/TrashIcon';
import classes from './MeetingCard.module.css'

const MeetingCard = ({ meeting, onDelete }) => {
  const dateInstance = new Date(meeting.fullDate);
  const day = dateInstance.getDate().toString().padStart(2, '0');
  const month = dateInstance.toLocaleString('en-US', { month: 'short' }).toUpperCase();

  return (
    <div className={classes['meeting-card-container']}>
      <div className={classes['calendar-icon']}>
        <div className={classes['calendar-header']}>{month}</div>
        <div className={classes['calendar-body']}>{day}</div>
      </div>

      <div className="ms-3 text-start flex-grow-1">
        <p className="mb-0 fw-bold text-dark">{meeting.title}</p>
        <p className="mb-0 text-muted small">
          {meeting.time} @ {meeting.location}
        </p>
      </div>

      <div
        className="text-danger bg-transparent border-0 p-1"
        style={{ cursor: 'pointer' }}
        onClick={onDelete}
      >
        <TrashIcon />
      </div>
    </div>
  );
};

export default MeetingCard;