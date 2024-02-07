import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handlesignOut = () => {
        logOut()
          .then(() => console.log('User LogOut Success'))
          .catch(error => console.error(error))
      }
    const navItems = <>
        <li className="font-semibold font-poppins text-black text-base ">
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "white"
            } > Home
            </NavLink>
        </li>
        <li className="font-semibold font-poppins text-black text-base "> 
        <NavLink to="/register" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "white"
        } > Register
        </NavLink>
        </li>

        <li className="font-semibold font-poppins text-black text-base ">
            <NavLink to="/login" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "white"
            } > Login
            </NavLink>
        </li>
    </>
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-extrabold">Juhosi</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            {
                user ? 
                <div className="navbar-end">
                <button className="btn mr-10" onClick={handlesignOut}> Sign Out</button>
            </div>
            :
            <></>
            }
           
        </div>
    );
};

export default Navbar;