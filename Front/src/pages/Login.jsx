import LoginForm from '../components/Login/LoginForm'
import './css_style/login_style.css'
export default function Login() {
    const handleLogin = (data) => {
        console.log('Login:', data)
        // db
    }

    return (
        <div className="background -mt-20">
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="card w-full max-w-md shadow-xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-center mb-2">
                            Iniciar sesión
                        </h2>
                        <p className="text-center text-sm text-gray-500 mb-4">
                            Accedé a tu cuenta
                        </p>

                        <LoginForm onSubmit={handleLogin} />
                    </div>
                </div>
            </div>
        </div>
    )
}
