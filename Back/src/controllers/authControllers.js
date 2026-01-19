import bcrypt from 'bcryptjs'
import AdmModel from '../models/AdmModel.js'
import { registerSchema, loginSchema } from '../schemas/authSchema.js'
import { ZodError } from 'zod'

export const registerUser = async (req,res) => {
    try {
        // Traer la clave secreta de JWT
        const JWT_SECRET = process.env.JWT_SECRET

        // Extraer los datos del usuario
        const { username, password } = registerSchema.parse(req.body)

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10)

        // Crear el usuario y guardarlo en la DB
        const newAdm = await AdmModel.create({
            username,
            password: hashedPassword,
        })
        console.log(newAdm)
        res.json({message:"bieeen"})

        // Generar un token con JWT
        // payload
        // const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
        //     expiresIn: '1h',
        // })

        // console.log('NEW USER', newUser)
        // console.log('token', token)

        // // Enviar el token como una cookie
        // res.cookie('accessToken', token, {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === 'production',
        //     sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        //     maxAge: 60 * 60 * 1000,
        // })
        //     .status(201)
        //     .json({ message: 'Usuario registrado con éxito' })
    } catch (error) {
        res.json(error)
    }
}
