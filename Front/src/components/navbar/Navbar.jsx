import { Link } from 'react-router';
import Cart from './Cart'
import './navbar.css'

const Navbar = () => {
  const isAdm = True;
  return (
    <div className="navbar shadow-md w-full">
      <div className="flex-none">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Pedir mi alfombra!</a></li>
            <li><a></a></li>
            <li><Link to={"/login"}>Login</Link></li>
            {isAdm && <li><Link to={"/administracion"}>Administración</Link></li>}
          </ul>
        </div>
      </div>

      <div className="flex-1">
        <Link className="titulo btn btn-ghost text-5xl text-green-800 font-serif" to="/">Wido Rugs</Link>
      </div>
      <Cart/>
    </div>
  );
};

export default Navbar;