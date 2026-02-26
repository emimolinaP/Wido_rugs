import jwt from 'jsonwebtoken'
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
        

        // Generar un token con JWT
        // payload
        const token = jwt.sign({ userId: newAdm._id }, JWT_SECRET, {
            expiresIn: '1h',
        })

        console.log('NEW USER', newAdm)
        console.log('token', token)

        // Enviar el token como una cookie
        res.cookie('accessToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
            maxAge: 60 * 60 * 1000,
        })
            .status(201)
            .json({ message: 'Usuario registrado con éxito' })
    } catch (error) {
        res.json(error)
    }
} 
  
export const profile = async (req, res) => {
    // Extraer el accessToken enviado por el cliente
    
    const token = req.cookies.accessToken
    if (!token) {
        return res.status(401).json({ message: "No token provided" })
    }
    try {
        // Verificar o decodificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        // Buscar el usuario en la DB
        const user = await AdmModel.findById(decoded.userId)
        
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' })
        }

        res.status(200).json({
            id: user._id,
            username: user.username,
        })
    } catch (error) {
        return res.status(401).json({ message: 'No autorizado1' })
    }
}

export const loginUser = async (req,res) => {
    try{
        const JWT_SECRET = process.env.JWT_SECRET
        const {username,password} = loginSchema.parse(req.body)
    
        const user = await AdmModel.findOne({username})
        if(!user){
            return res.status(400).json({message:"invalido"})
        }
        const isPasswordvalid = await bcrypt.compare(password,user.password)
        if(!isPasswordvalid){
            return res.status(400).json({message: "Credencial invalide"})
        }
        
        
        const token = jwt.sign({userId: user._id,username: user.username}, JWT_SECRET,
        {
            expiresIn: '1h',
        }
    )

        const userData = {
            id:user._id,
            username: user.username
        }
        res.cookie('accessToken',token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite:process.env.NODE_ENV === 'production'? 'none':'lax',
            maxAge: 60*60*1000,
        })
        .status(200).json(userData)


    }catch(error){
        if(error instanceof ZodError){
            return res.status(400).json(error.issues.map(issue =>({message: issue.message})))
        }
        res.status(500).json({message:"Error al iniciar sesión",
            error:error,
        })
    }
}

export const logout = (req,res) => {
    res.clearCookie('accessToken',{
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        sameSite:process.env.NODE_ENV ===' production' ? 'none':'lax'
    })
        .status(200)
        .json({message:'cierre de sesión exitoso'})

}
