import { registerUser } from '../controllers/authControllers.js'
import express from 'express'

const router = express.Router()

router.post('/registrar', registerUser)
router.post('/login', (req, res) => {
    console.log('POSt')

    res.json({ messege: 'possstaaa' })
})
router.post('/logout', (req, res) => {
    console.log('POSt')

    res.json({ messege: 'possstaaa' })
})
router.get('/profile', (req, res) => {
    console.log('POSt')

    res.json({ messege: 'possstaaa' })
})
export default router
