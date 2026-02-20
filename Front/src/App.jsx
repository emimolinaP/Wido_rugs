import { Routes, Route } from 'react-router'
import Layout from './layout/layout'
import { UserContextProviver } from './context/UserContext'
import { Toaster } from 'react-hot-toast'

import Home from './pages/Home'
import Login from './pages/Login'
function App() {
    return (
        <UserContextProviver>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Route>
            </Routes>
            <Toaster />
        </UserContextProviver>
    )
}

export default App
