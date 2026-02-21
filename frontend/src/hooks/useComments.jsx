import { useState } from 'react'

const URL = import.meta.env.VITE_BASE_SERVER_URL

const useComments = () => {
  const [commentsIsLoading, setCommentsIsLoading] = useState(false)
  const [commentsData, setCommentsData] = useState(null)
  const [commentsError, setCommentsError] = useState(null)

  const getComments = async (postId, page = 1, pageSize = 4) => {
    setCommentsIsLoading(true)
    setCommentsError(null)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/blogPosts/${postId}/comments?page=${page}&pageSize=${pageSize}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      setCommentsData(data)
      return data
    } catch (error) {
      setCommentsError(error.message)
    } finally {
      setCommentsIsLoading(false)
    }
  }

  const createComment = async (postId, payload) => {
    setCommentsIsLoading(true)
    setCommentsError(null)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/blogPosts/${postId}/comments`, {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()

      return data.newComment 
    } catch (error) {
      setCommentsError(error.message)
    } finally {
      setCommentsIsLoading(false)
    }
  }

  const deleteComment = async (postId, commentId) => {
    setCommentsIsLoading(true)
    setCommentsError(null)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/blogPosts/${postId}/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      return data.deletedComment
    } catch (error) {
      setCommentsError(error.message)
    } finally {
      setCommentsIsLoading(false)
    }
  }

  return {
    getComments,
    createComment,
    deleteComment,
    commentsIsLoading,
    commentsData,
    commentsError
  }
}

export default useComments
