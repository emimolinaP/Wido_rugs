import axios from "axios"

const API_URL = import.meta.env.VITE_BACKEND_URL + "/auth"

export const getGalleryItems = async () => {
  const response = await axios.get(`${API_URL}/dashboard`)
  return response.data
}

export const createGalleryItem = async (formData) => {
  const response = await axios.post(`${API_URL}/dashboard`, formData, {
    withCredentials: true
  })
  return response.data
}

export const deleteGalleryItem = async (id) => {
  await axios.delete(
    `${API_URL}/dashboard/${id}`,
    { withCredentials: true }
  )
}