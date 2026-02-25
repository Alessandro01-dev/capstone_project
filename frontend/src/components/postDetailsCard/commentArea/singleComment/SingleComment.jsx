import { useParams } from 'react-router-dom'
import LikesIcon from '../../../../assets/LikesIcon'
import { useAuth } from '../../../../contexts/AuthContext'
import classes from './SingleComment.module.css'
import useComments from '../../../../hooks/useComments'
import { Rating } from '@mantine/core'
import TrashIcon from '../../../../assets/TrashIcon'
import toast from 'react-hot-toast'
import { Button, Modal, Spinner } from 'react-bootstrap'
import { useState } from 'react'

const SingleComment = ({ comment, onDelete }) => {

  const { authData } = useAuth()
  const { postId } = useParams()
  const { deleteComment, commentsIsLoading } = useComments()

  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const isLoggedUserComment = comment.user?._id === authData?._id

  const handleOpenModal = () => setShowDeleteModal(true)
  const handleCloseModal = () => setShowDeleteModal(false)

  const confirmDelete = async () => {
    const result = await deleteComment(postId, comment._id)
    if (result) {
      toast.success("Comment deleted")
      onDelete()
      handleCloseModal()
    }
  }

  return (
    <>
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
                {comment.user?.nationality?.code && (<div className={classes["author-card-profile-flag-picture"]}>
                  <img
                    className="w-100 h-100 d-block object-fit-cover"
                    src={`https://flagcdn.com/w640/${comment.user?.nationality?.code?.toLowerCase()}.png`}
                    alt="author card flag picture"
                  />
                </div>)}
              </div>
              <div>
                <h6
                  className='m-0'
                >
                  {comment.user?.name} {" "} {comment.user?.surname} {isLoggedUserComment ? "(me)" : ""}
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
              onClick={handleOpenModal}
              className={classes['delete-comment-icon']}
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
      <Modal show={showDeleteModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Delete Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this comment? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="dark" onClick={handleCloseModal} disabled={commentsIsLoading}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete} disabled={commentsIsLoading}>
            {commentsIsLoading ? <Spinner size="sm" className="mx-auto" /> : "Delete"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SingleComment