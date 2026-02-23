import { Button, Form, Spinner } from "react-bootstrap"
import classes from './AddComment.module.css'
import { useState } from "react"
import { useAuth } from "../../../../contexts/AuthContext"
import { Rating } from "@mantine/core"
import useComments from "../../../../hooks/useComments"
import { useParams } from "react-router-dom"
import toast from "react-hot-toast"

const AddComment = ({ onAdd }) => {

  const { postId } = useParams()
  const { authData } = useAuth()
  const { createComment, commentsIsLoading } = useComments()

  const [formData, setFormData] = useState({
    content: "",
    rating: 0
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      content: formData.content,
      rating: formData.rating
    }

    const newComment = await createComment(postId, payload)

    if (newComment) {
      setFormData({ content: "", rating: 0 })
      onAdd()
      toast.success("Comment added successfully!");
    }

    console.log("Payload pronto per il post:", payload)
  }

  const isCommentValid = formData.content.trim().length > 0 && formData.rating > 0;


  return (
    <div
      className={classes['add-comment-main-container']}
    >
      <div
        className='d-flex align-items-center gap-3'
      >
        <div
          className={classes["card-profile-img-container"]}
        >
          <img
            className="w-100 h-100 d-block object-fit-cover"
            src={authData?.avatar}
            alt="author card profile picture"
          />
          {authData?.nationality?.code && (<div className={classes["author-card-profile-flag-picture"]}>
            <img
              className="w-100 h-100 d-block object-fit-cover"
              src={`https://flagcdn.com/w640/${authData?.nationality?.code?.toLowerCase()}.png`}
              alt="author card flag picture"
            />
          </div>)}
        </div>
        <div
          className="d-flex align-items-center justify-content-between w-100"
        >
          <div>
            <h6
              className='m-0'
            >
              {authData?.name} {authData?.surname} (you)
            </h6>
            <p
              className={`${classes['author-card-job-title']} m-0 small`}
            >
              Community Tutor
            </p>
          </div>
          <div className="d-flex flex-column align-items-end">
            <span className="small text-secondary mb-1">Rating:</span>
            <Rating
              value={formData.rating}
              onChange={(value) => {
                setFormData({
                  ...formData,
                  rating: value
                })
              }}
              name="rating"
              fractions={2}
              color="yellow"
              size="md"
            />
          </div>
        </div>
      </div>
      <Form
        className="d-flex flex-column"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Label>What are your thoughts?</Form.Label>
          <Form.Control
            className={classes["add-comment-text-area"]}
            as="textarea"
            value={formData.content}
            onChange={(e) => {
              setFormData({
                ...formData,
                content: e.target.value
              })
            }}
            name="content"
          />
        </Form.Group>
        <Button
          className="align-self-end"
          variant="dark"
          size="sm"
          type="submit"
          disabled={commentsIsLoading || !isCommentValid}
        >
          {commentsIsLoading ? (
            <Spinner
              className="mx-auto"
              size="sm"
            />
          ) : "Send"}
        </Button>
      </Form>
    </div>
  )
}

export default AddComment