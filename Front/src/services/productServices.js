import axios from "axios"

const API_URL = import.meta.env.VITE_BACKEND_URL + "/auth"

export const getGalleryItems = async () => {
  const response = await axios.get(`${API_URL}/gallery`)
  return response.data
}

export const createGalleryItem = async (formData) => {
  const response = await axios.post(`${API_URL}/gallery`, formData, {
    withCredentials: true
  })
  return response.data
}

export const deleteGalleryItem = async (id) => {
  await axios.delete(
    `${API_URL}/gallery/${id}`,
    { withCredentials: true }
  )
}