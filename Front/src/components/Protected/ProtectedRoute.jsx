import { Navigate } from "react-router"
import { useContext } from "react"
import { useUser } from "../../context/UserContext"
const ProtectedRoute = ({ children }) => {
    const { userInfo } = useUser()

    if (!userInfo) {
        return <Navigate to="/login" />
    }

    return children
}
export default ProtectedRoute