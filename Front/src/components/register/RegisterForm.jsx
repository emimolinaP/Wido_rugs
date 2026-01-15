import   {useState} from 'react'
import {useForm}  from 'react-hook-form'
import {FaEye,FaEyeSlash} from 'react-icons/fa'
const  RegisterForm = () => {
    const {register, handleSubmit,formState:{errors},reset} = useForm({
        mode: 'onChange'
    })

    const onSubmit = (data) => {
        //registrpo de usuario
    }
    return(
        <form onSubmit= {handleSubmit(onSubmit)}
        className='mt-8 flex flex-col gap-4 lg:gap-6 max-w-[500px] max-auto'>

            <div>
                <input {...register('username',{
                    required: 'El nombre de usuario es requerido',
                    minLength:{
                        value:3,
                        message: "Mínimo de 3 caracteres",
                    },
                    maxLength:{
                        value:20,
                        message:"Máximo de 20 caracteres"
                    },
                })}
                className="p-2 outline-2 rounded border focus:outline-primary w-full" name='username' autoComplete='usernames' 
                placeholder="Nombre de Usuario"type="text" />
                {errors.username && (
                    <p className='text-red-500 text-sm mt-2 ml-1'>{errors.username.message}</p>
                )}
            </div>
            <div>
                <input />
            </div>

        </form>
    )
}
export default RegisterForm