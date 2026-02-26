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

      const data = await response.json()

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      setPostsData(prev => ({
        ...data,
        blogPosts: page === 1 ? data.blogPosts : [...(prev?.blogPosts || []), ...data.blogPosts]
      }));

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

  const getUserPosts = async (userId) => {
    setPostsIsLoading(true);
    setPostsError(null);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${URL}/blogPosts/user/${userId}`, {
        headers: { "Authorization": `Bearer ${token}` }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      return data.blogPosts;
    } catch (error) {
      setPostsError(error.message);
    } finally {
      setPostsIsLoading(false);
    }
  };

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

      const data = await response.json()

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      setPostsData(data)
      return data
    } catch (error) {
      setPostsError(error.message)
    } finally {
      setPostsIsLoading(false)
    }
  }

  const createPost = async (newPost) => {
    setPostsIsLoading(true)
    setPostsError(null)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/blogPosts`, {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Errore nella creazione del post')
      }

      return data
    } catch (error) {
      setPostsError(error.message)
    } finally {
      setPostsIsLoading(false)
    }
  }

  const updatePost = async (postId, body) => {
    setPostsIsLoading(true)
    setPostsError(null)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/blogPosts/${postId}`, {
        method: 'PATCH',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message)
      return data
    } catch (error) {
      setPostsError(error.message)
    } finally {
      setPostsIsLoading(false)
    }
  }

  const deletePost = async (postId) => {
    setPostsIsLoading(true)
    setPostsError(null)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/blogPosts/${postId}`, {
        method: 'DELETE',
        headers: { "Authorization": `Bearer ${token}` }
      })
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message)
      }
      return true
    } catch (error) {
      setPostsError(error.message)
    } finally {
      setPostsIsLoading(false)
    }
  }

  const toggleLikePost = async (postId) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/blogPosts/${postId}/like`, {
        method: 'PATCH',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })

      const data = await response.json()

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message)
      }

      setPostsData(data.updatedPost)

      return data
    } catch (error) {
      setPostsError(error.message)
    }
  }


  return {
    getPosts,
    getPostById,
    getUserPosts,
    searchPostsByTitle,
    createPost,
    updatePost,
    deletePost,
    toggleLikePost,
    postsIsLoading,
    postsData,
    postsError
  }
}

export default useCommunityPosts
