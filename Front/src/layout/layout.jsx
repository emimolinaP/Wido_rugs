import {Outlet} from 'react-router'
import Navbar from "../components/navbar/Navbar"
import './layout-style.css'
const  Layout = () => {

    return (
        <div className="layout w-full mx-AuthButtons "  >
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}
export default Layout