import { useEffect, useState } from 'react';
import { Dropdown, Badge, Spinner } from 'react-bootstrap';
import { useSocket } from '../../../contexts/SocketContext';
import useConnections from '../../../hooks/useConnections';
import NotificationsIcon from '../../../assets/NotificationsIcon';
import classes from './NotificationsDropdown.module.css';
import ConnectionRequestDetailsModal from './connectionRequestDetailsModal/ConnectionRequestDetailsModal';
import nopendingrequests from '../../../assets/no_pending_requests.webp';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const NotificationsDropdown = () => {
  const socket = useSocket();
  const navigate = useNavigate();
  const { getReceivedRequests, getSentRequests, markAsRead, connectionsIsLoading } = useConnections();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [receivedRequests, setReceivedRequests] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);

  const fetchInitialData = async () => {
    const [received, sent] = await Promise.all([
      getReceivedRequests(),
      getSentRequests()
    ]);
    if (received) {
      setReceivedRequests(received);
    }
    if (sent) {
      setSentRequests(sent);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const pendingRequests = receivedRequests.filter(req => req.status === 'pending');
  const newSentUpdates = sentRequests.filter(req =>
    (req.status === 'accepted' || req.status === 'rejected') && !req.readBySender
  );

  const allNotifications = [...pendingRequests, ...newSentUpdates];

  const handleNotificationClick = async (request) => {
    setIsDropdownOpen(false);

    if (request.status === 'pending') {
      setSelectedRequest(request);
      setShowModal(true);
      return;
    }

    const success = await markAsRead(request._id);
    if (success) {
      setSentRequests(prev =>
        prev.map(req => req._id === request._id ? { ...req, readBySender: true } : req)
      );
      navigate('/');
    }
  };

  useEffect(() => {
    if (!socket) return;

    const handleSocketNotification = (data) => {
      const { type, request, requestId } = data;

      if (type === 'NEW_REQUEST') {
        setReceivedRequests(prev => [request, ...prev]);
        toast.success(`New request from ${request.from.name}`);
      } else if (type === 'ACCEPTANCE' || type === 'REJECTION') {
        setSentRequests(prev => {
          const exists = prev.find(item => String(item._id) === String(request._id));
          return exists
            ? prev.map(item => String(item._id) === String(request._id) ? request : item)
            : [request, ...prev];
        });
        if (type === 'ACCEPTANCE') toast.success(`${request.to.name} accepted!`);
      } else if (type === 'DELETION') {
        setReceivedRequests(prev => prev.filter(item => String(item._id) !== String(requestId)));
        setSentRequests(prev => prev.filter(item => String(item._id) !== String(requestId)));
      }
    };

    socket.on('notification_received', handleSocketNotification);
    return () => socket.off('notification_received', handleSocketNotification);
  }, [socket]);

  return (
    <div>
      <Dropdown
      className={classes["notification-container"]} 
      align="end" show={isDropdownOpen} onToggle={() => setIsDropdownOpen(!isDropdownOpen)}>
        <Dropdown.Toggle
          as="div"
          className={`${classes["notification-icon-container"]} ${allNotifications.length > 0 ? classes.animate : ''} ${classes['remove-dropdown-toggle']}`}
        >
          <NotificationsIcon />
          {allNotifications.length > 0 && (
            <Badge pill bg="danger" className={classes["notification-badge"]}>
              {allNotifications.length}
            </Badge>
          )}
        </Dropdown.Toggle>


        <Dropdown.Menu className={classes["notification-menu"]}>
          <div className="px-3 py-2 border-bottom fw-bold">Notifications</div>

          {connectionsIsLoading ? (
            <div className="text-center py-3"><Spinner size="sm" /></div>
          ) : allNotifications.length === 0 ? (
            <div className="px-3 py-3 text-center">
              <p className="small text-muted mb-2">This space is feeling a little... empty. Why not be the first to say hi?</p>
              <img className="w-50 opacity-50" src={nopendingrequests} alt="empty" />
            </div>
          ) : (
            allNotifications.map((request) => {
              const isStatusPending = request.status === 'pending';
              const isStatusAccepted = request.status === 'accepted';
              const isStatusRejected = request.status === 'rejected';
              const isUnread = isStatusPending || (!request.readBySender);

              const displayUser = isStatusPending ? request.from : request.to;

              return (
                <div
                  key={request._id}
                  className={`dropdown-item d-flex align-items-center gap-2 py-2 border-bottom cursor-pointer ${isUnread ? classes['unread-bg'] : ''}`}
                  onClick={() => handleNotificationClick(request)}
                >
                  <div className={classes['avatar-container']}>
                    <img
                      className="object-fit-cover w-100 h-100 d-block"
                      src={displayUser?.avatar}
                      alt={`user avatar`}
                    />
                    {displayUser?.nationality?.code && (
                      <img
                        className={classes['flag-picture']}
                        src={`https://flagcdn.com/w640/${displayUser?.nationality?.code?.toLowerCase()}.png`}
                        alt="flag"
                      />
                    )}
                  </div>

                  <div className="flex-grow-1 overflow-hidden">
                    <p className="mb-0 small fw-bold">
                      {isStatusPending && `${displayUser?.name} ${displayUser?.surname}`}
                      {isStatusAccepted && `Accepted: ${displayUser?.name}`}
                      {isStatusRejected && `Declined: ${displayUser?.name}`}
                    </p>
                    <p className={`mb-0 text-muted ${classes['notification-text-small']}`}>
                      {isStatusPending && 'wants to connect with you'}
                      {isStatusAccepted && 'is now connected with you!'}
                      {isStatusRejected && 'Your request was not accepted'}
                    </p>
                  </div>

                  {isUnread && <div className={classes['unread-dot']}></div>}
                </div>
              );
            })
          )}
        </Dropdown.Menu>
      </Dropdown>

      <ConnectionRequestDetailsModal
        show={showModal}
        handleClose={() => { setShowModal(false); setSelectedRequest(null); }}
        request={selectedRequest}
        refreshList={fetchInitialData}
      />
    </div>
  );
};

export default NotificationsDropdown