import { Alert, Row, Spinner } from 'react-bootstrap'
import CommunityPostCard from './communityPostCard/CommunityPostCard'
import useCommunityPosts from '../../hooks/useCommunityPosts'
import { useEffect } from 'react'

const CommunityPostsList = () => {

  const { getPosts, postsData, postsIsLoading, postsError } = useCommunityPosts()

  useEffect(() => {
    getPosts(1, 10)
  }, [])

  const posts = postsData?.blogPosts || []

  return (
    <Row
      className='g-3'
    >
      {postsError && (
        <Alert
          className='text-center'
          variant="danger"
        >
          {postsError}
        </Alert>
      )}

      {postsIsLoading && posts.length === 0 ? (
        <Spinner
          className="mx-auto"
        />
      ) : (
        <>
          {posts.length > 0 ? (
            posts.map(post => (
              <CommunityPostCard
                key={post._id}
                post={post}
              />
            ))
          ) : (
            !postsIsLoading && <p className="text-center">No community posts found.</p>
          )}
        </>
      )}
    </Row>
  )
}

export default CommunityPostsList