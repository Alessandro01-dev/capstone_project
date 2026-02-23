import { useState } from 'react'

const useTutors = () => {
  const [tutorsIsLoading, setTutorsIsLoading] = useState(false)
  const [tutorsData, setTutorsData] = useState(null)
  const [tutorsError, setTutorsError] = useState(null)

  const URL = import.meta.env.VITE_BASE_SERVER_URL

  const getTutors = async (page = 1, pageSize = 4) => {
    setTutorsIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/tutors?page=${page}&pageSize=${pageSize}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()

      setTutorsData(prev => ({
        ...data,
        tutors: page === 1 ? data.tutors : [...(prev?.tutors || []), ...data.tutors]
      }));

      return data
    } catch (error) {
      setTutorsError(error.message)
    } finally {
      setTutorsIsLoading(false)
    }
  }

  const getTutorById = async (tutorId) => {
    setTutorsIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/tutors/${tutorId}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      setTutorsData(data.tutor)
      return data.tutor
    } catch (error) {
      setTutorsError(error.message)
    } finally {
      setTutorsIsLoading(false)
    }
  }

  const createTutor = async (newTutor) => {
    setTutorsIsLoading(true)
    setTutorsError(null)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/tutors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(newTutor)
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      return await response.json()
    } catch (error) {
      setTutorsError(error.message)
    } finally {
      setTutorsIsLoading(false)
    }
  }

  const updateTutor = async (tutorId, updatedData) => {
    setTutorsIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/tutors/${tutorId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(updatedData)
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      return await response.json()
    } catch (error) {
      setTutorsError(error.message)
    } finally {
      setTutorsIsLoading(false)
    }
  }

  const deleteTutor = async (tutorId) => {
    setTutorsIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/tutors/${tutorId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      return await response.json()
    } catch (error) {
      setTutorsError(error.message)
    } finally {
      setTutorsIsLoading(false)
    }
  }

  return {
    tutorsIsLoading,
    tutorsData,
    tutorsError,
    setTutorsError,
    getTutors,
    getTutorById,
    createTutor,
    updateTutor,
    deleteTutor
  }
}

export default useTutors
