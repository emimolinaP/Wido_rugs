import { Routes, Route } from 'react-router'
import Layout from './layout/layout'
import { UserContextProviver } from './context/UserContext'
import { Toaster } from 'react-hot-toast'

import ProtectedRoute from './components/Protected/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Productos from './pages/Productos'
import AdminGallery from './pages/Admin'
function App() {
    return (
        <UserContextProviver>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/rugs" element={<Productos />}></Route>
                    <Route path="/dashboard" element={
                        <ProtectedRoute>
                            <AdminGallery/>
                        </ProtectedRoute>
                        }></Route>
                </Route>
            </Routes>
            <Toaster />
        </UserContextProviver>
    )
}

export default App
