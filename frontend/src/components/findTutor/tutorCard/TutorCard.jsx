import { Badge, Col } from 'react-bootstrap'
import { getLanguageName } from '../../../utils/getLanguageName'
import classes from './TutorCard.module.css'
import { useNavigate } from 'react-router-dom'
import { getInterestLabel } from '../../../utils/getInterestLabel'

const TutorCard = ({ tutor }) => {

  const navigate = useNavigate()

  const handleTutorProfileDetailsRedirect = () => {
    navigate(`/tutors/${tutor._id}`)
  }

  return (
    <Col
      xs={12}
      lg={6}
      xl={4}
    >
      <div
        className={classes["tutor-card-container"]}
        onClick={handleTutorProfileDetailsRedirect}
      >
        <div
          className='d-flex align-items-center gap-3'
        >
          <div
            className={classes["card-profile-img-container"]}
          >
            <img
              className="w-100 h-100 d-block object-fit-cover"
              src={tutor?.avatar}
              alt="tutor card profile picture"
            />
            {tutor.nationality && (<div className={classes["tutor-card-profile-flag-picture"]}>
              <img
                className="w-100 h-100 d-block object-fit-cover"
                src={`https://flagcdn.com/w640/${tutor.nationality.code.toLowerCase()}.png`}
                alt="tutor card flag picture"
              />
            </div>)}
          </div>
          <div>
            <h5
              className='m-0'
            >
              {tutor.name} {" "} {tutor.surname}
            </h5>
            {tutor.isTutor && <p
              className={`${classes['tutor-card-job-title']} m-0`}
            >
              Community Tutor
            </p>}
          </div>
        </div>
        <div
          className='d-flex gap-2'
        >
          {(tutor.languages?.native?.length > 0 || tutor.languages?.spoken?.length > 0) && (<>
            <p
              className={`${classes['tutor-card-languages-section-title']} m-0`}>
              Languages
            </p>
            <div
              className='d-flex flex-wrap gap-2'
            >
              {tutor.languages?.native?.map(language => (
                <div
                  key={`${tutor._id} ${language.code}`}
                  className='d-flex align-items-center gap-1'
                >
                  <p
                    className="m-0"
                  >
                    {getLanguageName(language.code)}
                  </p>
                  <Badge
                    bg="danger"
                    className="rounded-pill"
                  >
                    Native
                  </Badge>
                </div>
              ))}
              {tutor.languages?.spoken?.map(language => (
                <div
                  key={`${tutor._id} ${language.code}`}
                  className='d-flex align-items-center gap-1'
                >
                  <p
                    key={language.code}
                    className="m-0"
                  >
                    {getLanguageName(language.code)}
                  </p>
                  <p
                    className='m-0'
                  >
                    ({language.level})
                  </p>
                </div>
              ))}
            </div>
          </>
          )}
        </div>
        {tutor.interests?.length > 0 && (
          <div
            className='d-flex align-items-start gap-2'
          >
            <p className={`${classes['tutor-card-interests-section-title']} m-0`}>
              Interests
            </p>

            <div className='d-flex flex-wrap gap-2'>
              {tutor.interests?.map(interest => (
                <Badge
                  key={`${tutor._id} ${interest}`}
                  className={`${classes['tutor-card-interest-badge']} rounded-pill`}
                >
                  {getInterestLabel(interest)}
                </Badge>
              ))}
            </div>
          </div>
        )}
        <div
          className={classes['tutor-card-bio']}
        >
          {tutor.bio}
        </div>
        <div className="d-flex align-items-center gap-1 mt-1">
          <small className="text-success fw-bold">
            {tutor.distanceKm ? (
              <>Distance: {tutor.distanceKm.toFixed(1)} km away</>
            ) : (
              <>Location: {tutor.location?.city}, {" "}{tutor.location?.country}</>
            )}
          </small>
        </div>
      </div>
    </Col>
  )
}

export default TutorCard