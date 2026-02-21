import { Alert, Row, Spinner } from 'react-bootstrap'
import CommunityPostCard from './communityPostCard/CommunityPostCard'
import useCommunityPosts from '../../hooks/useCommunityPosts'
import { useEffect, useState, useRef, useCallback } from 'react'

const CommunityPostsList = () => {

  const { getPosts, postsData, postsIsLoading, postsError } = useCommunityPosts()
  const [page, setPage] = useState(1)
  const observer = useRef()

  const lastPostRef = useCallback(node => {
    if (postsIsLoading) return
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && postsData?.currentPage < postsData?.totalPages) {
        setPage(prev => prev + 1)
      }
    })

    if (node) observer.current.observe(node)
  }, [postsIsLoading, postsData])

  useEffect(() => {
    getPosts(page, 10)
  }, [page])

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
      {posts.map(post => (
        <CommunityPostCard
          key={post._id}
          post={post}
        />
      ))}

      <div ref={lastPostRef} style={{ height: '20px' }} />

      {posts.length === 0 && !postsIsLoading && (
        <p
          className="text-center"
        >
          No community posts found.
        </p>
      )}

      {postsIsLoading && (
        <Spinner
          className="mx-auto"
        />
      )}
    </Row>
  )
}

export default CommunityPostsList