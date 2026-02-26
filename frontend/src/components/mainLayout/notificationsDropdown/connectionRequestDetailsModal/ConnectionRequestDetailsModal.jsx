import { Modal, Button, Badge } from 'react-bootstrap';
import useConnections from '../../../../hooks/useConnections';
import toast from 'react-hot-toast';
import classes from './ConnectionRequestDetailsModal.module.css';
import { getLanguageName } from '../../../../utils/getLanguageName'

const ConnectionRequestDetailsModal = ({ show, handleClose, request, refreshList }) => {
  const { acceptRequest, rejectRequest, connectionsIsLoading } = useConnections();

  const processRequest = async (type) => {
    const action = type === 'accept' ? acceptRequest : rejectRequest;
    const result = await action(request._id);

    if (result) {
      toast.success(`Request ${type}ed successfully!`);

      refreshList();
      handleClose();
    }
  };

  if (!request) return null;

  const { from, type, language, message } = request;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="fw-bold">Connection Request</Modal.Title>
      </Modal.Header>

      <Modal.Body className="pt-3">
        <div className="d-flex align-items-center gap-3 mb-4">
          <div className={classes['avatar-container']}>
            <img
              className="object-fit-cover w-100 h-100 d-block"
              src={from.avatar}
              alt={`${from.name} avatar`}
            />
            {from.nationality?.code && (
              <img
                className={classes['flag-picture']}
                src={`https://flagcdn.com/w640/${from.nationality.code?.toLowerCase()}.png`}
                alt="flag"
              />
            )}
          </div>

          <div>
            <h5 className="mb-1 fw-bold">{from.name} {from.surname}</h5>
            <div className="d-flex gap-2 align-items-center">
              <Badge pill bg={type === 'tutoring' ? 'danger' : 'success'} className="text-uppercase">
                {type}
              </Badge>
              <span className="text-muted small fw-bold">
                {getLanguageName(language?.code)} ({language?.level})
              </span>
            </div>
          </div>
        </div>

        <div className="bg-light p-3 rounded-3">
          <p className="small text-muted fw-bold mb-2 uppercase-label">Message</p>
          <p className="mb-0 fst-italic text-dark">"{message}"</p>
        </div>
      </Modal.Body>

      <Modal.Footer className="border-0 pt-0">
        <Button
          variant='danger'
          className="px-4 fw-bold"
          onClick={() => processRequest('reject')}
          disabled={connectionsIsLoading}
        >
          Decline
        </Button>
        <Button
          variant="success"
          className="px-4 fw-bold"
          onClick={() => processRequest('accept')}
          disabled={connectionsIsLoading}
        >
          Accept
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConnectionRequestDetailsModal