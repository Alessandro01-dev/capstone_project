import LikesIcon from '../../../../assets/LikesIcon'
import classes from './SingleComment.module.css'

const SingleComment = ({ comment }) => {
  return (
    <div
      className={classes['single-comment-main-container']}
    >
      <div
        className='d-flex align-items-center gap-3'
      >
        <div
          className={classes["card-profile-img-container"]}
        >
          <img
            className="w-100 d-block object-fit-cover"
            src={comment.user.avatar}
            alt="author card profile picture"
          />
          <div className={classes["author-card-profile-flag-picture"]}>
            <img
              className="w-100 h-100 d-block object-fit-cover"
              src={`https://flagcdn.com/w640/${comment.user.nationality.code}.png`}
              alt="author card flag picture"
            />
          </div>
        </div>
        <div>
          <h6
            className='m-0'
          >
            {comment.user.name} {" "} {comment.user.surname}
          </h6>
          {comment.user.isTutor && <p
            className={`${classes['author-card-job-title']} m-0 small`}
          >
            Community Tutor
          </p>}
        </div>
      </div>
      <div>
        {comment.content}
      </div>
      <div
        className='d-flex gap-1 align-self-end'
      >
        <LikesIcon />
        <p className='m-0'>24</p>
      </div>
    </div>
  )
}

export default SingleComment