import { useParams } from "react-router-dom"
import VerifiedIcon from '../../assets/VerifiedIcon'
import { getLanguageName } from '../../utils/getLanguageName'
import classes from './TutorDetailsCard.module.css'
import { Badge, Spinner } from "react-bootstrap"
import useUsers from "../../hooks/useUsers"
import { useEffect } from "react"

const TutorDetailsCard = () => {

  const params = useParams()
  const { tutorId } = params

  const { getUserById, usersData, usersIsLoading, usersError } = useUsers()

  useEffect(() => {
    getUserById(tutorId)
  }, [tutorId])

  return (
    <div
      className={classes["details-card-main-container"]}
    >
      {usersIsLoading && (
        <Spinner
          className="mx-auto"
          size="sm"
        />
      )}
      {!usersIsLoading && usersData && (
        <>
          <div
            className={classes["details-card-profile-container"]}
          >
            <div
              className={classes["details-card-profile-picture-container"]}>
              <img
                className="w-100 d-block object-fit-cover"
                src={usersData.avatar}
                alt="tutor details picture"
              />
              <div
                className={classes["details-card-profile-flag"]}
              >
                <img
                  className="w-100 h-100 object-fit-cover d-block"
                  src={`https://flagcdn.com/w640/${usersData.nationality?.code.toLowerCase()}.png`}
                  alt="teacher details nationality flag picture" />
              </div>
            </div>
            <div
              className="d-flex flex-column"
            >
              <h3>
                {usersData.name} {usersData.surname}
              </h3>
              {usersData.isTutor && (
                <div
                  className="d-flex align-items-center gap-2"
                >
                  <p
                    className="m-0 text-secondary"
                  >
                    Community Tutor
                  </p>
                  <VerifiedIcon />
                </div>
              )}
            </div>
          </div>
          <div
            className="d-flex flex-column"
          >
            {usersData.languages?.spoken?.length > 0 && (
              <div
                className="d-flex gap-2"
              >
                <p
                  className={`${classes["info-details-section-title"]} "m-0"`}
                >
                  speaks:
                </p>
                {usersData.languages?.spoken?.map(language => (
                  <div
                    key={`${language.code} ${language}`}
                    className="d-flex gap-1"
                  >
                    <p
                      className="m-0"
                    >
                      {getLanguageName(language.code)}
                    </p>
                    <p>
                      ({language.level})
                    </p>
                  </div>
                ))}
              </div>
            )}
            {usersData.languages?.learning?.length > 0 && (
              <div
                className="d-flex gap-2"
              >
                <p
                  className={`${classes["info-details-section-title"]} "m-0"`}
                >
                  learns:
                </p>
                {usersData.languages?.learning?.map(language => (
                  <div
                    key={`${language.code} ${language}`}
                    className="d-flex gap-1"
                  >
                    <p
                      className="m-0"
                    >
                      {getLanguageName(language.code)}
                    </p>
                    <p>
                      ({language.level})
                    </p>
                  </div>
                ))}
              </div>
            )}
            {usersData.interests?.length > 0 && (
              <div
                className='d-flex align-items-start gap-2'
              >
                <p className={`${classes['info-interests-section-title']} m-0`}>
                  interests:
                </p>

                <div className='d-flex flex-wrap gap-2'>
                  {usersData.interests?.map((interest) => (
                    <Badge
                      key={`${usersData._id} ${interest}`}
                      className={`${classes['interest-badge']} rounded-pill`}
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
          <h5
            className="m-0"
          >
            About me
          </h5>
          <p
            className={`${classes["details-bio"]} "m-0"`}
          >
            {usersData.bio}
          </p>
        </>
      )}
    </div>
  )
}

export default TutorDetailsCard