import mongoose from 'mongoose'
export const connectDB = async () => {
    try {
        const dbURI = process.env.MONGO_DB_URI.replace(
            '<db_username>',
            process.env.MONGO_DB_USER
        ).replace('<db_password>', process.env.MONGO_DB_PASSWORD)
        await mongoose.connect(dbURI)
        console.log('Conectado a MongoDB')
    } catch (error) {
        console.error('Error al conectarse a MongoDB', error)
    }
}
export const disconnectDB = async () => {
    try {
        await mongoose.disconnect()
        console.log('Base de datos desconectada')
    } catch (error) {
        console.error('Error al Desconectar DB', error)
    }
}
