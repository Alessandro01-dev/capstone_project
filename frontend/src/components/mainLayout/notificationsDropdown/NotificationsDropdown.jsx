import { useEffect, useState } from 'react';
import { Dropdown, Badge, Spinner } from 'react-bootstrap';
import useConnections from '../../../hooks/useConnections'
import NotificationsIcon from '../../../assets/NotificationsIcon';
import classes from './NotificationsDropdown.module.css';
import ConnectionRequestDetailsModal from './connectionRequestDetailsModal/ConnectionRequestDetailsModal';
import nopendingrequests from '../../../assets/no_pending_requests.webp'

const NotificationsDropdown = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { getReceivedRequests, connectionsData, connectionsIsLoading } = useConnections();

  useEffect(() => {
    getReceivedRequests();
  }, []);

  const pendingRequests = connectionsData?.filter(request => request.status === 'pending') || [];

  return (
    <div
      className={`${classes["notification-container"]} ${pendingRequests.length > 0 ? classes.animate : ''}`}
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <div>
        <NotificationsIcon />

        {pendingRequests.length > 0 && (
          <Badge
            pill
            bg="danger"
            className={classes["notification-badge"]}
          >
            {pendingRequests.length}
          </Badge>
        )}
      </div>

      <Dropdown align="end" show={isDropdownOpen} onToggle={() => setIsDropdownOpen(!isDropdownOpen)}>
        <Dropdown.Menu className={classes["notification-menu"]}>
          <div className="px-3 py-2 border-bottom fw-bold">Requests</div>

          {connectionsIsLoading ? (
            <div className="text-center py-3"><Spinner size="sm" /></div>
          ) : pendingRequests.length === 0 ? (
            <div className="px-3 py-3 text-muted small text-center">
              <div
                className="d-flex flex-column align-items-center justify-content-between gap-2"
              >
                <p
                  className={`${classes['no-requests-found-msg']} m-0 text-muted text-center`}
                >This space is feeling a little... empty</p>
                <div
                  className={classes['no-requests-found-img-container']}
                >
                  <img
                    className="w-100 d-block object-fit-cover"
                    src={nopendingrequests}
                    alt="no requests found" />
                </div>
              </div>
            </div>
          ) : (
            pendingRequests.map(request => (
              <Dropdown.Item
                key={request._id}
                onClick={() => {
                  setSelectedRequest(request);
                  setShowModal(true);
                  setIsDropdownOpen(false);
                }}
              >
                <div
                  className="d-flex align-items-center gap-2 py-2 border-bottom"
                >
                  <div
                    className={classes['request-from-avatar-container']}
                  >
                    <img
                      className='w-100 h-100 object-fit-cover d-block'
                      src={request.from.avatar}
                      alt="request from avatar"
                    />
                    {request.from?.nationality?.code && (<div className={classes["request-from-flag-picture"]}>
                      <img
                        className="w-100 h-100 d-block object-fit-cover"
                        src={`https://flagcdn.com/w640/${request.from.nationality.code.toLowerCase()}.png`}
                        alt="request from flag picture"
                      />
                    </div>)}
                  </div>
                  <div className={classes["request-info"]}>
                    <p className={classes["user-name"]}>
                      {request.from?.name} {request.from?.surname}
                    </p>
                    <p className={classes["request-message"]}>
                      {request.message}
                    </p>
                  </div>
                </div>
              </Dropdown.Item>
            ))
          )}
        </Dropdown.Menu>
      </Dropdown>

      <ConnectionRequestDetailsModal
        show={showModal}
        handleClose={() => {
          setShowModal(false);
          setSelectedRequest(null);
        }}
        request={selectedRequest}
        refreshList={getReceivedRequests}
      />

    </div>
  );
};

export default NotificationsDropdown;
