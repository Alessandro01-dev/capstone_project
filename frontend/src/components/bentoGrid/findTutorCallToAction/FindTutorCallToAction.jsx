import { Button } from "react-bootstrap"
import { useAuth } from "../../../contexts/AuthContext"

const FindTutorCallToAction = () => {

  const { authData } = useAuth()

  console.log(authData)

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

      <Button
        variant="success"
        className="w-100 py-2 fw-bold"
      >
        Explore Local Tutors
      </Button>
    </>
  )
}

export default FindTutorCallToAction