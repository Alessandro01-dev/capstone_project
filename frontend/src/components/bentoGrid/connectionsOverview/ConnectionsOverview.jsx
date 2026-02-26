import { useEffect, useState, useCallback } from 'react';
import { Spinner, ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import useConnections from '../../../hooks/useConnections';
import { useAuth } from '../../../contexts/AuthContext';
import { useSocket } from '../../../contexts/SocketContext';
import TrashIcon from '../../../assets/TrashIcon';
import connectionRequestImage from '../../../assets/connection_request.png';
import classes from './ConnectionsOverview.module.css';

const ConnectionsOverview = () => {

  const { authData } = useAuth();
  const socket = useSocket();
  const { getSentRequests, getReceivedRequests, deleteConnection, connectionsIsLoading } = useConnections();

  const [connections, setConnections] = useState([]);

  const fetchConnections = useCallback(async () => {
    if (!authData?._id) return;

    try {
      const [sentRequests, receivedRequests] = await Promise.all([
        getSentRequests(),
        getReceivedRequests()
      ]);

      const mergedRequests = [...(sentRequests || []), ...(receivedRequests || [])];
      const acceptedConnections = mergedRequests.filter(request => request.status === 'accepted');

      setConnections(acceptedConnections);
    } catch (error) {
      console.error("Error fetching connections:", error);
    }

  }, [authData?._id]);

  useEffect(() => {
    fetchConnections();
  }, [fetchConnections]);

  useEffect(() => {
    if (!socket) return;

    const handleSocketNotification = (data) => {
      if (['ACCEPTANCE', 'REJECTION', 'DELETION'].includes(data.type)) {
        fetchConnections();
      }
    };

    socket.on('notification_received', handleSocketNotification);
    return () => socket.off('notification_received', handleSocketNotification);
  }, [socket, fetchConnections]);

  const handleDeleteContact = async (connectionId) => {
    const success = await deleteConnection(connectionId);
    if (success) {
      toast.success("Contact removed successfully");
      fetchConnections();
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-between w-100 h-100">
      <h4 className="fw-bold text-center mb-3">Your Contacts</h4>

      {connectionsIsLoading && connections.length === 0 ? (
        <div className="text-center my-auto">
          <Spinner animation="border" variant="success" size="sm" />
        </div>
      ) : connections.length > 0 ? (
        <div className="flex-grow-1 overflow-auto w-100 pe-1">
          <ListGroup variant="flush">
            {connections.map((request) => {
              const contact = request.from?._id === authData?._id ? request.to : request.from;

              if (!contact) return null;

              return (
                <ListGroup.Item
                  key={request._id}
                  className="d-flex align-items-center justify-content-center gap-2  px-0 py-2"
                >
                  <div
                    className={classes['connection-request-img-container']}
                  >
                    <div
                      className={classes["contact-profile-img-container"]}
                    >
                      <img
                      src={contact.avatar}
                      alt={`${contact.name} avatar`}
                      className="w-100 h-100 object-fit-cover d-block"
                    />
                    {contact.nationality && (<div className={classes["contact-flag-picture"]}>
                      <img
                        className="w-100 h-100 d-block object-fit-cover"
                        src={`https://flagcdn.com/w640/${contact.nationality.code.toLowerCase()}.png`}
                        alt="contact flag picture"
                      />
                    </div>)}
                    </div>
                  </div>
                  <div className="text-start overflow-hidden"
                  >
                    <p className="mb-0 fw-bold small text-truncate">
                      {contact.name} {contact.surname}
                    </p>
                    <p className={`${classes['contact-email']} mb-0 text-success fw-medium text-truncate`}
                    >
                      {contact.email}
                    </p>
                  </div>

                  <div
                    className="text-muted opacity-50 ms-2 cursor-pointer"
                    onClick={() => handleDeleteContact(request._id)}
                  >
                    <TrashIcon size={14} />
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center justify-content-center my-auto">
          <p className="small text-muted text-center px-2 m-0">
            No active contacts. Don't wait for others to find you!
          </p>
          <div className={classes["connection-request-img-container"]}>
            <img
              className="w-100 d-block object-fit-cover opacity-50"
              src={connectionRequestImage}
              alt="No connections found"
            />
          </div>
        </div>
      )}

      <Link
        to="/findtutor"
        className="w-100 btn btn-success py-2 fw-bold shadow-sm"
      >
        {connections.length > 0 ? 'Find More Partners' : 'Start Connecting'}
      </Link>
    </div>
  );
};

export default ConnectionsOverview;