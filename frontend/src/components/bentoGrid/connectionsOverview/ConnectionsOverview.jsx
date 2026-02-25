import { Button } from "react-bootstrap"
import connectionRequest from '../../../assets/connection_request.png'
import classes from './ConnectionsOverview.module.css'

const ConnectionsOverview = () => {

  const data = {
    requestsCount: 3,
    location: "Palermo, Italy"
  };

  return (
    <>
      <h4 className="fw-bold text-center m-0">Connection Requests</h4>
      <p className="small text-muted text-center px-2 m-0">
        No new requests at the moment. Don't wait for others to find you!
      </p>
      <div className={classes["connection-request-img-container"]}>
        <img
          className="w-100 d-block object-fit-cover"
          src={connectionRequest}
          alt="two bubble chat with different idioms"
        />
      </div>

      <Button
        variant="success"
        className="w-100 py-2 fw-bold"
        disabled
      >
        Reply
      </Button>
    </>
  )
}

export default ConnectionsOverview