import { registerUser,loginUser,profile, logout } from '../controllers/authControllers.js'
import express from 'express'

const router = express.Router()

router.get('/profile', profile)
router.post('/registrar', registerUser)
router.post('/login', loginUser)
router.post('/logout', logout)

export default router
