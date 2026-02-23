import { useParams } from "react-router-dom"
import classes from './TeacherDetailsCard.module.css'
import { getLanguageName } from "../../utils/getLanguageName"
import VerifiedIcon from "../../assets/VerifiedIcon"
import { Badge, Spinner } from "react-bootstrap"
import useTutors from "../../hooks/useTutors"
import { useEffect } from "react"

const TeacherDetailsCard = () => {

  const { teacherId } = useParams()

  const { getTutorById, tutorsIsLoading, tutorsData, tutorsError } = useTutors()

  useEffect(() => {

    getTutorById(teacherId)

  }, [teacherId])

  return (
    <div
      className={classes["details-card-main-container"]}
    >
      {tutorsError ? (
        <div className="alert alert-danger m-3">{tutorsError}</div>
      ) : (tutorsIsLoading || !tutorsData) ? (
        <Spinner
          className="mx-auto"
        />
      ) : (
        <>
          <div
            className={classes["details-card-profile-container"]}
          >
            <div
              className={classes["details-card-profile-picture-container"]}>
              <img
                className="w-100 h-100 d-block object-fit-cover"
                src={tutorsData.user?.avatar}
                alt="teacher details picture"
              />
              <div
                className={classes["details-card-profile-flag"]}
              >
                <img
                  className="w-100 h-100 object-fit-cover d-block"
                  src={`https://flagcdn.com/w640/${tutorsData.user?.nationality?.code.toLowerCase()}.png`}
                  alt="teacher details nationality flag picture" />
              </div>
            </div>
            <div
              className="d-flex flex-column"
            >
              <h3>
                {tutorsData.user?.name} {tutorsData.user?.surname}
              </h3>
              <div
                className="d-flex align-items-center gap-2"
              >
                <p
                  className="m-0 text-secondary"
                >
                  Professional teacher
                </p>
                {tutorsData.isVerified && (
                  <VerifiedIcon />
                )}
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-column gap-2"
          >
            {tutorsData.languagesTaught?.natives?.length > 0 && (
              <div
                className="d-flex gap-2"
              >
                <p
                  className={`${classes["info-details-section-title"]} m-0`}
                >
                  I teach:
                </p>
                {tutorsData.languagesTaught?.natives?.map(language => (
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
                {tutorsData.languagesTaught?.others?.map(language => (
                  <div
                    className="d-flex align-items-center gap-1"
                    key={language.code}
                  >
                    <p
                      className="m-0"
                    >
                      {getLanguageName(language.code)}
                    </p>
                    <p
                      className="m-0"
                    >
                      {language.level}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {tutorsData.user?.languages?.spoken?.length > 0 && (
              <div
                className="d-flex gap-2"
              >
                <p
                  className={`${classes["info-details-section-title"]} m-0`}
                >
                  I speak:
                </p>
                {tutorsData.user?.languages?.spoken?.map(language => (
                  <div
                    className="d-flex gap-1"
                    key={language.code}
                  >
                    <p
                      className="m-0"
                    >
                      {getLanguageName(language.code)}
                    </p>
                    <p
                      className="m-0"
                    >
                      ({language.level})
                    </p>
                  </div>
                ))}
              </div>
            )}
            {tutorsData.user?.languages?.learning?.length > 0 && (
              <div
                className="d-flex gap-2"
              >
                <p
                  className={`${classes["info-details-section-title"]} m-0`}
                >
                  I'm learning:
                </p>
                {tutorsData.user.languages?.learning?.map(language => (
                  <div
                    className="d-flex gap-1"
                    key={language.code}
                  >
                    <p
                      className="m-0"
                    >
                      {getLanguageName(language.code)}
                    </p>
                    <p
                      className="m-0"
                    >
                      ({language.level})
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <h5
            className="m-0"
          >
            About me as a teacher
          </h5>
          <p
            className={`${classes["details-bio"]} "m-0"`}
          >
            {tutorsData.bio}
          </p>
          {tutorsData.certifications?.length > 0 && (
            <>
              <h5
                className="m-0"
              >
                Certifications
              </h5>
              <div>
                {tutorsData.certifications?.map(certification => (
                  <div
                    className="d-flex flex-column gap-2"
                    key={certification.name}
                  >
                    <div
                      className="d-flex gap-2 align-items-center"
                    >
                      <h6
                        className="m-0"
                      >
                        {certification.name}
                      </h6>
                      {certification.isVerified && <VerifiedIcon />}
                    </div>
                    <p
                      className="m-0"
                    >
                      {certification.institution}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
          {tutorsData.availability && (
            <>
              <h5
                className="m-0"
              >
                Availability
              </h5>
              <p
                className="m-0"
              >
                {tutorsData.availability}
              </p>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default TeacherDetailsCard
