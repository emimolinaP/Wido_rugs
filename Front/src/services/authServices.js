import axios from 'axios'
const API_URL = import.meta.env.VITE_BACKEND_URL + '/auth'

axios.defaults.withCredentials = true

export const getProfileService = async () => {
    try{
        const response = await axios.get(`${API_URL}/profile`)
        console.log("response A /profile",response)
        return response.data
    }catch(error){
        console.log(error)
        throw new Error("Error al obtener el perfil")
    }
}

export const loginService = async (data,reset,setRedirect,setUserInfo) => {
    try{
        const response = await axios.post(`${API_URL}/login`,data,{
            headers:{'Content-Type':'application/json'},
            withCredentials: true,
        })

        if(response.status === 200){
            console.log("res", response.data)
            setUserInfo(response.data)
            reset()
            setRedirect(true)
            return{
                succes: true,
                message: 'Inicio de sesión exitoso',
            }
        }

    } catch(error){
        console.log("error al loguearse1",error)
        return {
            succes: false,
            message:'Error al loguearse',
        }  
    }   
}

export const logoutService = async () => {
    try {
        const response = await axios.post(`${API_URL}/logout`)
        return response.data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error al cerrar la sesión')
    }
}
