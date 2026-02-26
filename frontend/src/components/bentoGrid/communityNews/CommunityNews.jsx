import { Badge } from "react-bootstrap"
import { Link } from "react-router-dom"
import useCommunityPosts from '../../../hooks/useCommunityPosts'
import { useEffect } from "react";
import classes from './CommunityNews.module.css'

const CommunityNews = () => {

  const { getPosts, postsData, postsIsLoading } = useCommunityPosts();

  useEffect(() => {
    getPosts();
  }, []);

  const latestPost = postsData?.blogPosts[0];

  return (
    <>
      {latestPost && (
        <div
          className="d-flex flex-column align-items-center justify-content-between h-100"
        >
          <Badge bg="warning" text="dark" className="mb-2 align-self-end">Blog News</Badge>
          <h4 className="fw-bold text-white text-center">{latestPost.title}</h4>
          <div
            className={classes['community-post-cover-container']}
          >
            <img className="w-100 h-100 object-fit-cover d-block rounded" src={latestPost.cover} alt="community post cover image" />
          </div>
          <div
            className={`${classes['community-news-post-content']} m-0`}
            dangerouslySetInnerHTML={{ __html: latestPost.content }}
          />
          <Link
            to={`/communityPosts/${latestPost._id}`}
            className={`${classes['read-more-btn']} text-warning fw-bold`}>
            Read more →
          </Link>
        </div>
      )}
    </>
  )
}

export default CommunityNews