import express from 'express'
import { connectDB, disconnectDB } from './config/configdb.js'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        methods: ['GET,POST,PUT,DELETE,OPTIONS'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cookie',
            'Set-Cookie',
        ],
        credentials: true,
    })
)
app.use( cookieParser() )
app.use(express.json())

const PORT = 3001

app.use('/api/auth', authRoutes)

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`servidor corriendo en puerto:  ${PORT}`)
        })
    })
    .catch(() => {
        disconnectDB()
    })
