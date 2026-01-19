import mongoose from 'mongoose'

const AdmSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        minLenth: 5,
        maxLenth: 20,
    },
    password: {
        type: String,
        require: true,
        trim: true,
        minLenth: 4,
        maxLenth: 10,
    },
})
export default mongoose.model('Adm', AdmSchema)
