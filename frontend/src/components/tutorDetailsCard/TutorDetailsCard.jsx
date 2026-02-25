import { useParams } from "react-router-dom"
import VerifiedIcon from '../../assets/VerifiedIcon'
import { getLanguageName } from '../../utils/getLanguageName'
import classes from './TutorDetailsCard.module.css'
import { Alert, Badge, Button, Spinner } from "react-bootstrap"
import useUsers from "../../hooks/useUsers"
import { useEffect, useState } from "react"
import { getInterestLabel } from "../../utils/getInterestLabel"
import ConnectionRequestModal from "../connectionRequestModal/ConnectionRequestModal"
import nobiofound from '../../assets/no_bio_found.webp'

const TutorDetailsCard = () => {

  const [showModal, setShowModal] = useState()

  const params = useParams()
  const { tutorId } = params

  const { getUserById, usersData, usersIsLoading, usersError } = useUsers()

  useEffect(() => {
    getUserById(tutorId)
  }, [tutorId])

  console.log(usersData?.interests)

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

      {usersError && (
        <Alert
          className="text-center"
          variant="danger"
        >
          {usersError}
        </Alert>
      )}

      {!usersIsLoading && usersData && (
        <>
          <div
            className={classes["details-card-profile-container"]}
          >
            <div
              className={classes["details-card-profile-picture-container"]}>
              <img
                className="w-100 h-100 d-block object-fit-cover"
                src={usersData.avatar}
                alt="tutor details picture"
              />
              {usersData.nationality && (<div
                className={classes["details-card-profile-flag"]}
              >
                <img
                  className="w-100 h-100 object-fit-cover d-block"
                  src={`https://flagcdn.com/w640/${usersData.nationality.code.toLowerCase()}.png`}
                  alt="teacher details nationality flag picture" />
              </div>
              )}
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
            {usersData.languages?.native?.length > 0 && (
              <div
                className="d-flex gap-2 mb-3"
              >
                <p
                  className={`${classes["info-details-section-title"]} m-0`}
                >
                  My language{usersData.languages?.native?.length === 1 ? "" : "s"}:
                </p>
                {usersData.languages?.native?.map(language => (
                  <div
                    className="d-flex align-items-center gap-1"
                    key={language.code}
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
              </div>
            )}
            {usersData.languages?.spoken?.length > 0 && (
              <div
                className="d-flex gap-2"
              >
                <p
                  className={`${classes["info-details-section-title"]} m-0`}
                >
                  I speak:
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
                  I'm learning:
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
                className='d-flex align-items-start gap-2 mt-2'
              >
                <p className={`${classes['info-interests-section-title']} m-0`}>
                  My interests:
                </p>

                <div className='d-flex flex-wrap gap-2'>
                  {usersData.interests?.map((interest) => (
                    <Badge
                      key={`${usersData._id} ${interest}`}
                      className={`${classes['interest-badge']} rounded-pill`}
                    >
                      {getInterestLabel(interest)}
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
          {usersData.bio ? (
            <p
              className={`${classes["details-bio"]} "m-0"`}
            >
              {usersData.bio}
            </p>
          ) : (
            <div
              className="d-flex flex-column align-items-center justify-content-between gap-2"
            >
              <p
                className={`${classes['no-bio-found-msg']} m-0 text-muted text-center`}
              >It seems like no one wrote anything here...</p>
              <div
                className={classes['no-bio-found-img-container']}
              >
                <img
                  className="w-100 d-block object-fit-cover"
                  src={nobiofound}
                  alt="no bio found" />
              </div>
            </div>
          )}
        </>
      )}
      {usersData && (
        <>
          <Button
            variant="success"
            className="align-self-end"
            onClick={() => setShowModal(true)}
          >
            Contact {usersData?.name}
          </Button>

          <ConnectionRequestModal
            show={showModal}
            handleClose={() => setShowModal(false)}
            targetUser={usersData}
            type="practice"
          />
        </>
      )}
    </div>
  )
}

export default TutorDetailsCard