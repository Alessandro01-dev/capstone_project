import { useState } from 'react'

const useCommunityPosts = () => {
  const [postsIsLoading, setPostsIsLoading] = useState(false)
  const [postsData, setPostsData] = useState(null)
  const [postsError, setPostsError] = useState(null)

  const URL = import.meta.env.VITE_BASE_SERVER_URL

  const getPosts = async (page = 1, pageSize = 4) => {
    setPostsIsLoading(true)
    setPostsError(null)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/blogPosts?page=${page}&pageSize=${pageSize}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      setPostsData(data)
      return data
    } catch (error) {
      setPostsError(error.message)
    } finally {
      setPostsIsLoading(false)
    }
  }

  const getPostById = async (postId) => {
    setPostsIsLoading(true)
    setPostsError(null)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/blogPosts/${postId}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      setPostsData(data.blogPost)
      return data.blogPost
    } catch (error) {
      setPostsError(error.message)
    } finally {
      setPostsIsLoading(false)
    }
  }

  const searchPostsByTitle = async (title, page = 1, pageSize = 4) => {
    setPostsIsLoading(true)
    setPostsError(null)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/search/blogPosts?title=${title}&page=${page}&pageSize=${pageSize}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      setPostsData(data)
      return data
    } catch (error) {
      setPostsError(error.message)
    } finally {
      setPostsIsLoading(false)
    }
  }

  return {
    getPosts,
    getPostById,
    searchPostsByTitle,
    postsIsLoading,
    postsData,
    postsError
  }
}

export default useCommunityPosts
