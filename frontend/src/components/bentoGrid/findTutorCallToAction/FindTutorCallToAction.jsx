import { Button } from "react-bootstrap"
import { useAuth } from "../../../contexts/AuthContext"
import { Link } from "react-router-dom"

const FindTutorCallToAction = () => {

  const { authData } = useAuth()

  return (
    <>

      <h4 className="fw-bold text-center m-0">Language Mates Nearby</h4>
      <p className="text-muted m-0 text-center">Unlock real-world practice with tutors and peers in <strong>{authData?.location?.city}</strong>!</p>

      <div className="bg-light rounded d-flex flex-column justify-content-center align-items-center">
        <img
          className="w-100 d-block object-fit-cover rounded"
          src="https://www.pearson.com/content/dam/one-dot-com/one-dot-com/pearson-languages/en-gb/lifestyle/friends-chatting-laughing-cafe-600x400.jpg"
          alt=""
        />
      </div>

      <Link
        to="/findtutor"
        className="w-100 btn btn-success py-2 fw-bold shadow-sm"
      >
        Explore Local Tutors
      </Link>
    </>
  )
}

export default FindTutorCallToAction