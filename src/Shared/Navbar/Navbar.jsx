
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo.png"
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import avatarImg from '../../assets/home/placeholder.jpg'


const Navbar = () => {
  const { user, logOut } = useAuth;
  const [isOpen, setIsOpen] = useState(false)


  const navLinks = <>
        <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/assignment'>All Scholarship</Link>
            </li>
            <li>
              <Link to="/createAssignment">User Dashboard</Link>
            </li>
            <li>
              <Link to="/pendingAssignment">Admin Dashboard</Link>
            </li>
    </>
  return (
    <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-20 text-white bg-black lg:p-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <img className="h-6 w-8 md:h-10 md:w-14 rounded-xl" src={logo} alt="" />
        <Link to='/' className="btn btn-ghost md:text-xl">Student Scholarship</Link>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3 font-semibold px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          <label className="cursor-pointer grid place-items-center">
            <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </label>
        </div>
        <div className='relative ml-3'>
              <div className='flex flex-row items-center gap-3'>
                {/* Dropdown btn */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                  <AiOutlineMenu />
                  <div className='hidden md:block'>
                    <img
                      className='rounded-full'
                      referrerPolicy='no-referrer'
                      src={user && user.photoURL ? user.photoURL : avatarImg}
                      alt='profile'
                      height='30'
                      width='30'
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                  <div className='flex flex-col cursor-pointer'>
                    {user ? (
                      <>
                      <Link
                      to='/dashboard'
                      className='block px-4 py-3 hover:bg-neutral-100 text-black transition font-semibold'
                    >
                      Dashboard
                    </Link>
                        <div
                          onClick={logOut}
                          className='px-4 py-3 hover:bg-neutral-100 text-black transition font-semibold cursor-pointer'
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to='/login'
                          className='px-4 py-3 hover:bg-neutral-100 text-black transition font-semibold'
                        >
                          Login
                        </Link>
                        <Link
                          to='/signup'
                          className='px-4 py-3 hover:bg-neutral-100 text-black transition font-semibold'
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
      </div>
    </div>
  );
};

export default Navbar;