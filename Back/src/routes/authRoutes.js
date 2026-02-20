import { registerUser,loginUser,profile } from '../controllers/authControllers.js'
import express from 'express'

const router = express.Router()

router.get('/profile', profile)
router.post('/registrar', registerUser)
router.post('/login', loginUser)
router.post('/logout', (req, res) => {
    console.log('POSt')

    res.json({ messege: 'possstaaa' })
})

export default router
