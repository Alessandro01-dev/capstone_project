import { Badge } from 'react-bootstrap'
import Star from '../../../assets/Star'
import classes from './TeacherCard.module.css'
import { useNavigate } from 'react-router-dom'
import { getLanguageName } from "../../../utils/getLanguageName"
import VerifiedIcon from '../../../assets/VerifiedIcon'

const TeacherCard = ({ isActive, onHover, tutor }) => {

  const navigate = useNavigate()

  const handleTeacherProfileDetailsRedirect = () => {
    navigate(`/teachers/${tutor._id}`)
  }

  return (
    <div
      className="teacher-card-wrapper"
      onMouseEnter={onHover}
      onClick={handleTeacherProfileDetailsRedirect}
    >
      <div className={`${classes["teacher-card-main-container"]} ${isActive ? classes["active"] : ''}`}>
        <div className={classes["teacher-profile-card"]}>
          <div className={classes["teacher-card-profile-picture-container"]}>
            <img
              className="d-block w-100 h-100 object-fit-cover"
              src={tutor.user?.avatar}
              alt="teacher profile picture"
            />
            {tutor.user?.nationality?.code && (<div className={classes["teacher-card-profile-flag-picture"]}>
              <img
                className="w-100 h-100 d-block object-fit-cover"
                src={`https://flagcdn.com/w640/${tutor.user?.nationality?.code?.toLowerCase()}.png`}
                alt="teacher card flag picture"
              />
            </div>)}
          </div>
          <div className="d-flex flex-column">
            <p className="m-0">{tutor.user?.name} {tutor.user?.surname}</p>
            <div
              className={classes["teacher-card-profile-job-title"]}
            >
              {tutor.isVerified ? (
                <>
                  <p className="m-0">Professional teacher</p>
                  <VerifiedIcon />
                </>

              ) : (
                <p
                  className='m-0'
                >
                  Community Tutor
                </p>
              )}
            </div>
            <div className={classes["teacher-profile-card-rating-container"]}>
              <Star />
              <p className="m-0">{tutor.rating}</p>
            </div>
          </div>
        </div>
        <div className={classes["teacher-card-languages-container"]}>
          <p
            className={`${classes['teacher-card-languages-section-title']} m-0`}>
            Languages
          </p>
          <div className={classes["teacher-card-taught-languages-container"]}>

            {tutor.languagesTaught?.natives?.map(language => (
              <div className='d-flex align-items-center gap-1' key={language.code}>
                <p className="m-0">{getLanguageName(language.code)}</p>
                <Badge bg="danger" className="rounded-pill">Native</Badge>
              </div>
            ))}

            {tutor.languagesTaught?.others?.map(language => (
              <div className='d-flex align-items-center gap-1' key={language.code}>
                <p className="m-0">{getLanguageName(language.code)}</p>
                <p className='m-0 text-secondary'>({language.level})</p>
              </div>
            ))}

          </div>
        </div>
        <p
          className={classes["teacher-card-description"]}
        >
          {tutor.bio}
        </p>
        <div
          className='d-flex align-items-center justify-content-between gap-1'
        >
          <p
            className='text-success fw-bold m-0'
          >
             Location: {tutor.user?.location?.city}, {" "}{tutor.user?.location?.country}
          </p>
          <div
            className='d-flex align-items-center'
          >
            <p
            className='m-0 fs-5'
          >
            {tutor.hourlyRate}€
          </p>
          <p
            className='m-0 text-secondary'
          >
            / hour
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherCard
