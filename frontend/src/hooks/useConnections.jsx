import { useState } from 'react'

const useConnections = () => {
  const [connectionsIsLoading, setConnectionsIsLoading] = useState(false)
  const [connectionsData, setConnectionsData] = useState(null)
  const [connectionsError, setConnectionsError] = useState(null)

  const URL = import.meta.env.VITE_BASE_SERVER_URL

  const createConnectionRequest = async (requestBody) => {
    setConnectionsIsLoading(true)
    setConnectionsError(null)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/connections`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(requestBody)
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      return data
    } catch (error) {
      setConnectionsError(error.message)
    } finally {
      setConnectionsIsLoading(false)
    }
  }

  const getSentRequests = async () => {
    setConnectionsIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/connections/sent`, {
        headers: { "Authorization": `Bearer ${token}` }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      setConnectionsData(data.requests)
      return data.requests
    } catch (error) {
      setConnectionsError(error.message)
    } finally {
      setConnectionsIsLoading(false)
    }
  }

  const getReceivedRequests = async () => {
    setConnectionsIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/connections/received`, {
        headers: { "Authorization": `Bearer ${token}` }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      setConnectionsData(data.requests)
      return data.requests
    } catch (error) {
      setConnectionsError(error.message)
    } finally {
      setConnectionsIsLoading(false)
    }
  }

  const acceptRequest = async (requestId) => {
    setConnectionsIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/connections/${requestId}/accept`, {
        method: "PATCH",
        headers: { "Authorization": `Bearer ${token}` }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      return data
    } catch (error) {
      setConnectionsError(error.message)
    } finally {
      setConnectionsIsLoading(false)
    }
  }

  const rejectRequest = async (requestId) => {
    setConnectionsIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/connections/${requestId}/reject`, {
        method: "PATCH",
        headers: { "Authorization": `Bearer ${token}` }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      return data
    } catch (error) {
      setConnectionsError(error.message)
    } finally {
      setConnectionsIsLoading(false)
    }
  }

  return {
    connectionsIsLoading,
    connectionsData,
    setConnectionsData,
    connectionsError,
    createConnectionRequest,
    getSentRequests,
    getReceivedRequests,
    acceptRequest,
    rejectRequest
  }
}

export default useConnections
