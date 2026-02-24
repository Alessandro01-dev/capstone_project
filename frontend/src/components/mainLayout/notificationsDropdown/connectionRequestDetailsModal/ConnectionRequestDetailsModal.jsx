import { Modal, Button, Badge } from 'react-bootstrap';
import useConnections from '../../../../hooks/useConnections';
import toast from 'react-hot-toast';
import classes from './ConnectionRequestDetailsModal.module.css';
import { getLanguageName } from '../../../../utils/getLanguageName'

const ConnectionRequestDetailsModal = ({ show, handleClose, request, refreshList }) => {

  const { acceptRequest, rejectRequest, connectionsIsLoading } = useConnections();

  const handleAction = async (action) => {
    const result = action === 'accept' ? await acceptRequest(request._id) : await rejectRequest(request._id);
    if (result) {
      toast.success(`Request ${action}ed successfully!`);
      refreshList();
      handleClose();
    }
  };

  if (!request) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="fw-bold">
          Connection Request
        </Modal.Title>
      </Modal.Header>

      <Modal.Body
        className={classes['modal-body-container']}
      >
        <div
          className={classes['profile-info']}
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
          <div>
            <p
              className="m-0 fs-5 fw-bold"
            >
              {request.from?.name} {request.from?.surname}
            </p>
            <div className="d-flex gap-2 align-items-center mt-1">
              <Badge
                className='rounded-pill'
                bg={request.type === 'tutoring' ? 'danger' : 'success'}
              >
                {request.type}
              </Badge>
              <span className="text-muted small fw-bold">
                {getLanguageName(request.language?.code)} ({request.language?.level})
              </span>
            </div>
          </div>
        </div>

        <div>
          <p
            className={classes['message-label']}
          >
            Message:
          </p>
          <div
            className={classes['message-box']}
          >
            "{request.message}"
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="border-0 pt-0 mt-2">
        <Button
          variant="outline-danger"
          className="px-4"
          onClick={() => handleAction('reject')}
          disabled={connectionsIsLoading}
        >
          Decline
        </Button>
        <Button
          variant="success"
          className="px-4 shadow-sm"
          onClick={() => handleAction('accept')}
          disabled={connectionsIsLoading}
        >
          Accept Connection
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConnectionRequestDetailsModal;
