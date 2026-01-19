import axios from 'axios'
const API_URL = import.meta.env.VITE_BACKEND_URL + '/auth'

axios.defaults.withCredentials = true

export const getProfileService = async () => {}

export const loginService = async () => {}

export const logoutService = async () => {}
