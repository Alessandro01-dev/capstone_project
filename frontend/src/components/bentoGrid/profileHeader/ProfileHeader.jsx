import { useAuth } from '../../../contexts/AuthContext'
import { SemiCircleProgress, Text } from "@mantine/core"
import classes from './ProfileHeader.module.css'
import { calculateProfileCompletion } from '../../../utils/calculateProfileCompletion';
import { Link } from 'react-router-dom';

const ProfileHeader = () => {

  const { authData } = useAuth();

  const profilePercentage = calculateProfileCompletion(authData);

  const getMissingStep = (user) => {
    if (!user?.bio) return "Add a bio to your profile";
    if (user?.languages?.native.length === 0) return "Share your native languages";
    if (user?.languages?.spoken.length === 0) return "Share your spoken languages";
    if (user?.languages?.learning.length === 0) return "Share your learning languages";
    if (user?.interests?.length === 0) return "Select your interests";
    return "Just practice. Your profile looks great!";
  };

  const nextStep = getMissingStep(authData);

  return (
    <div
      className="d-flex flex-column flex-lg-row justify-content-between align-items-center w-100 gap-3"
    >
      <div
        className="d-flex flex-column gap-3 justify-content-between"
      >
        <div className="d-flex align-items-center gap-2">
          <h2 className="fw-bold m-0 text-nowrap">
            Hi, {authData?.name}!
          </h2>
          {authData?.isTutor ? (
            <span className="badge rounded-pill bg-secondary small">TUTOR</span>
          ) : (
            <span className="badge rounded-pill bg-secondary small">LEARNER</span>
          )}
        </div>
        <p
          className="text-muted m-0 small"
        >
          Your language journey continues here.
          Complete your profile to get found!
        </p>
        <p className="text-success small fw-bold m-0">
          Next step: {nextStep}
        </p>
      </div>
      <div
        className='d-flex flex-column flex-xl-row align-items-center justify-content-between'
      >
        <div
          className={`${classes['progress-bar-main-container']} w-100`}
        >
          <SemiCircleProgress
            fillDirection="left-to-right"
            orientation="up"
            filledSegmentColor="green.9"
            size={240}
            thickness={34}
            value={profilePercentage}
            label={
              <Text
                component="span"
                className={`${classes['progress-bar-label']} text-success fw-bold`}
                size="xs"
                ta="center"
              >
                {`Profile at ${profilePercentage}%`}
              </Text>
            }
          />
        </div>
        {profilePercentage < 100 && (
          <Link
            to="/settings"
            className="btn btn-link p-0 text-success fw-bold small text-decoration-none"
          >
            + Add missing info
          </Link>
        )}
      </div>
    </div>
  )
}

export default ProfileHeader