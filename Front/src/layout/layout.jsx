import {Outlet} from 'react-router'
import Navbar from "../components/navbar/Navbar"

const  Layout = () => {

    return (
        <div className="w-full max-w-[1000px] mx-AuthButtons px-6 pb-10">
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}
export default Layout