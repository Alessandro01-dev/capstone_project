import { useState } from 'react'

const useUsers = () => {
  const [usersIsLoading, setUsersIsLoading] = useState(false)
  const [usersData, setUsersData] = useState(null)
  const [usersError, setUsersError] = useState(null)

  const URL = import.meta.env.VITE_BASE_SERVER_URL

  const getUsers = async () => {
    setUsersIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/users`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      setUsersData(data)
      return data
    } catch (error) {
      setUsersError(error.message)
    } finally {
      setUsersIsLoading(false)
    }
  }

  const getUserById = async (userId) => {
    setUsersIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${URL}/users/${userId}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message);
      }

      const data = await response.json();
      setUsersData(data.user);
      return data; 
    } catch (error) {
      setUsersError(error.message);
    } finally {
      setUsersIsLoading(false);
    }
  };

  const getUsersNear = async (lat, lng, distance = 50) => {
    setUsersIsLoading(true);

    try {
      const token = localStorage.getItem('token');

      const params = new URLSearchParams({ lat, lng, distance });

      const response = await fetch(`${URL}/users/near?${params}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message);
      }

      const data = await response.json();
      setUsersData(data.users);
      return data.users;
    } catch (error) {
      setUsersError(error.message);
    } finally {
      setUsersIsLoading(false);
    }
  };


  const updateUser = async (userId, updatedData) => {
    setUsersIsLoading(true)
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${URL}/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(updatedData)
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message);
      }

      const data = response.json();

      return data
    } catch (error) {
      setUsersError(error.message)
    } finally {
      setUsersIsLoading(false)
    }
  }

  const createUser = async (newUser) => {
    setUsersIsLoading(true)
    try {
      const response = await fetch(`${URL}/users`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newUser)
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()

      return data
    } catch (error) {
      setUsersError(error.message)
    } finally {
      setUsersIsLoading(false)
    }
  }

  return {
    usersIsLoading,
    usersData,
    usersError,
    getUsers,
    getUserById,
    getUsersNear,
    updateUser,
    createUser
  }
}

export default useUsers