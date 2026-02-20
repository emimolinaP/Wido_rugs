import { useState } from 'react'
import { loginService } from '../../services/authServices'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router'
import { useUser } from '../../context/UserContext'

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: 'onChange',
    })

    const { setUserInfo, userInfo } = useUser()
    console.log(userInfo);
  
    const [showPassword, setShowPassword] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const onSubmit = async (data) => {
        
        const result = await loginService(data, reset, setRedirect, setUserInfo)

        if (result.succes) {
            toast.success(result.message)
        } else {
            toast.error(result.message)
        }
    }

    if (redirect) {
        return <Navigate to={'/administracion'} />
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Usuario</span>
                </label>
                <input
                    {...register('username', {
                        required: 'El usuario es requerido',
                        minLength: {
                            value: 6,
                            message: 'Mínimo 6 caracteres',
                        },
                        maxLength: {
                            value: 254,
                            message: 'Máximo de 2 caracteres',
                        },
                    })}
                    className={`p-2 outline-2 rounded border focus:outline-primary w-full ${
                        errors.username
                            ? 'border-red-500 outline-red-500 focus:outline-red-500'
                            : ''
                    }`}
                    autoComplete="username"
                    name="username"
                    placeholder=""
                    type="username"
                />
            </div>

            <div className="form-control relative">
                <label className="label">
                    <span className="label-text">Contraseña</span>
                </label>
                <input
                    {...register('password', {
                        required:
                            'La contraseña es requerida [6-20 caracteres de longitud]',
                        minLength: {
                            value: 6,
                            message: 'Mínimo 6 caracteres',
                        },
                        maxLength: {
                            value: 254,
                            message: 'Máximo de 254 caracteres',
                        },
                    })}
                    className={`p-2 outline-2 rounded border focus:outline-primary w-full ${
                        errors.password
                            ? 'border-red-500 outline-red-500 focus:outline-red-500'
                            : ''
                    }`}
                    autoComplete="current-password"
                    name="password"
                    placeholder="******"
                    type={showPassword ? 'text' : 'password'}
                />
                <button
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                        showPassword
                            ? 'Ocultar contraseña'
                            : 'Mostrar contraseña'
                    }
                    type="button"
                    className="cursor-pointer absolute right-4 top-[20px] transform -translate-y-1/2 text-gray-600"
                >
                    {showPassword ? (
                        <FaEyeSlash size={23} />
                    ) : (
                        <FaEye size={23} />
                    )}
                </button>
            </div>

            <button className="btn btn-primary w-full" type="submit">
                Ingresar
            </button>
        </form>
    )
}
export default LoginForm
