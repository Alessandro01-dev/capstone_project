import { useParams } from 'react-router-dom'
import LikesIcon from '../../../../assets/LikesIcon'
import { useAuth } from '../../../../contexts/AuthContext'
import classes from './SingleComment.module.css'
import useComments from '../../../../hooks/useComments'
import { Rating } from '@mantine/core'
import TrashIcon from '../../../../assets/TrashIcon'

const SingleComment = ({ comment, onDelete }) => {

  const { authData } = useAuth()
  const { postId } = useParams()
  const { deleteComment } = useComments()

  const isLoggedUserComment = comment.user?._id === authData?._id

  const handleDelete = async () => {
    if (window.confirm("Sei sicuro di voler eliminare questo commento?")) {
      const result = await deleteComment(postId, comment._id)
      if (result) {
        onDelete()
      }
    }
  }

  return (
    <div
      className={classes['single-comment-main-container']}
    >
      <div
        className='d-flex align-items-center gap-3'
      >
        <div
          className='d-flex align-items-center justify-content-between w-100'
        >
          <div
            className='d-flex align-items-center justify-content-between gap-2'
          >
            <div
              className={classes["card-profile-img-container"]}
            >
              <img
                className="w-100 h-100 d-block object-fit-cover"
                src={comment.user?.avatar}
                alt="author card profile picture"
              />
              <div className={classes["author-card-profile-flag-picture"]}>
                <img
                  className="w-100 h-100 d-block object-fit-cover"
                  src={`https://flagcdn.com/w640/${comment.user?.nationality?.code?.toLowerCase()}.png`}
                  alt="author card flag picture"
                />
              </div>
            </div>
            <div>
              <h6
                className='m-0'
              >
                {comment.user?.name} {" "} {comment.user?.surname}
              </h6>
              {comment.user?.isTutor && <p
                className={`${classes['author-card-job-title']} m-0 small`}
              >
                Community Tutor
              </p>}
            </div>
          </div>
          <Rating
            value={comment.rating}
            readOnly
            size="xs"
            color="yellow"
          />
        </div>
      </div>
      <div>
        {comment.content}
      </div>
      <div
        className='d-flex gap-1 justify-content-between w-100'
      >
        {isLoggedUserComment && (
          <div
            onClick={handleDelete}
            className="text-danger"
          >
            <TrashIcon
            />
          </div>
        )}
        <div
          className='ms-auto'
        >
          <LikesIcon />
        </div>

      </div>
    </div>
  )
}

export default SingleComment