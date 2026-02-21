import { useParams } from "react-router-dom"
import classes from './PostDetailsCard.module.css'
import CommentsIcon from '../../assets/CommentsIcon'
import LikesIcon from '../../assets/LikesIcon'
import CommentArea from "./commentArea/CommentArea"
import useCommunityPosts from "../../hooks/useCommunityPosts"
import { useEffect } from "react"
import { Alert, Spinner } from "react-bootstrap"

const PostDetailsCard = () => {

  const params = useParams()
  const { postId } = params

  const { getPostById, postsData, postsIsLoading, postsError } = useCommunityPosts()

  useEffect(() => {
    if (postId) {
      getPostById(postId)
    }
  }, [postId])

  return (
    <div
      className={classes["details-card-main-container"]}
    >
      {postsError ? (
        <Alert
          variant="danger"
          className="text-center">
          {postsError}
        </Alert>
      ) : postsIsLoading || !postsData ? (
        <Spinner
          className="mx-auto"
        />
      ) : (
        <>
          <h1
            className="text-center"
          >
            {postsData.title}
          </h1>
          <div
            className={classes["details-card-cover-post-container"]}
          >
            <img
              className="w-100 object-fit-cover d-block"
              src={postsData.cover}
              alt="post cover"
            />
          </div>
          <div
            className='d-flex align-items-center gap-3'
          >
            <div
              className={classes["card-profile-img-container"]}
            >
              <img
                className="w-100 d-block object-fit-cover"
                src={postsData.user.avatar}
                alt="author card profile picture"
              />
              <div className={classes["author-card-profile-flag-picture"]}>
                <img
                  className="w-100 h-100 d-block object-fit-cover"
                  src={`https://flagcdn.com/w640/${postsData.user.nationality.code.toLowerCase()}.png`}
                  alt="author card flag picture"
                />
              </div>
            </div>
            <div>
              <h5
                className='m-0'
              >
                {postsData.user.name} {" "} {postsData.user.surname}
              </h5>
              {postsData.user.isTutor && <p
                className={`${classes['author-card-job-title']} m-0`}
              >
                Community Tutor
              </p>}
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-between"
          >
            <div
              className="d-flex align-items-center align-self-start justify-content-center gap-2 text-secondary small"
            >
              <p className="m-0">{postsData.readTime.value} {postsData.readTime.unit}</p>
              <p className="m-0">&#8226;</p>
              <p className="m-0">26 feb 2026</p>
            </div>
            <div
              className='d-flex gap-4'
            >
              <div
                className='d-flex gap-1'
              >
                <CommentsIcon />
                <p className='m-0'>4</p>
              </div>
              <div
                className='d-flex gap-1'
              >
                <LikesIcon />
                <p className='m-0'>24</p>
              </div>
            </div>
          </div>
          <p
            className={`${classes['post-content']} m-0`}
          >
            {postsData.content}
          </p>
          <CommentArea
            comments={postsData.comments}
          />
        </>
      )}
    </div>
  )
}

export default PostDetailsCard