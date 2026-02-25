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
        <>
          <Badge bg="warning" text="dark" className="mb-2 align-self-end">Blog News</Badge>
          <h4 className="fw-bold text-white text-center">{latestPost.title}</h4>
          <div
            className={classes['community-post-cover-container']}
          >
            <img className="w-100 object-fit-cover d-block rounded" src={latestPost.cover} alt="community post cover image" />
          </div>
          <p className={`${classes['community-news-post-content']} small text-white opacity-75`}>
            {latestPost.content}
          </p>
          <Link
            to={`/communityPosts/${latestPost._id}`}
            className={`${classes['read-more-btn']} text-warning fw-bold`}>
            Read more →
          </Link>
        </>
      )}
    </>
  )
}

export default CommunityNews