import { Badge, Col } from 'react-bootstrap'
import classes from './CommunityPostCard.module.css'
import CommentsIcon from '../../../assets/CommentsIcon'
import LikesIcon from '../../../assets/LikesIcon'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../../../utils/formatDate'

const CommunityPostCard = ({ post }) => {

  const navigate = useNavigate()

  const handleCommunityPostNavigate = () => {
    navigate(`/communityPosts/${post._id}`)
  }

  return (
    <Col
      xs={12}
    >
      <div
        className={classes['community-post-card-main-container']}
        onClick={handleCommunityPostNavigate}
      >
        <div
          className={classes['community-post-card-top-container']}
        >
          <div
            className={classes['community-post-card-left-container']}
          >
            <div
              className='d-flex align-items-center gap-3'
            >
              <div
                className={classes["card-profile-img-container"]}
              >
                <img
                  className="w-100 h-100 d-block object-fit-cover"
                  src={post?.user?.avatar}
                  alt="author card profile picture"
                />
                {post?.user?.nationality?.code && (<div className={classes["author-card-profile-flag-picture"]}>
                  <img
                    className="w-100 h-100 d-block object-fit-cover"
                    src={`https://flagcdn.com/w640/${post?.user?.nationality?.code.toLowerCase()}.png`}
                    alt="author card flag picture"
                  />
                </div>)}
              </div>
              <div>
                <h5
                  className='m-0'
                >
                  {post?.user?.name} {" "} {post?.user?.surname}
                </h5>
                {post?.user?.isTutor && <p
                  className={`${classes['author-card-job-title']} m-0`}
                >
                  Community Tutor
                </p>}
              </div>
            </div>
            <h5>{post.title}</h5>
            <div
              className={classes["post-content"]}
              dangerouslySetInnerHTML={{ __html: post?.content }}
            />
          </div>
          <div
            className={classes['community-post-card-right-container']}
          >
            <Badge
              className='align-self-end bg-secondary'
            >
              {post?.category}
            </Badge>
            <div
              className={classes['community-post-card-cover-container']}
            >
              <img
                className='d-block w-100 object-fit-cover'
                src={post?.cover}
                alt="community post cover"
              />
            </div>
          </div>
        </div>
        <div
          className={classes['community-post-card-bottom-container']}
        >
          <p
            className='m-0'
          >
            {formatDate(post?.createdAt)}
          </p>
          <div
            className='d-flex gap-4'
          >
            <div
              className='d-flex gap-1'
            >
              <CommentsIcon />
              <p className='m-0'>{post?.comments.length}</p>
            </div>
            <div
              className='d-flex gap-1'
            >
              <LikesIcon />
              <p className='m-0'>{post?.likes?.length}</p>
            </div>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default CommunityPostCard