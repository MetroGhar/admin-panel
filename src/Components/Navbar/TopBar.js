import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import noti from "../../Assest/navbar/Frame 16.png";
import logo from "../../Assest/navbar/Group 2390.jpg";
import search from "../../Assest/Vector (1).png";
import auth from "../../firebase.init";
import "../Style/Style.css";

const TopBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/");
  };
  console.log(user);
  const menu = (
    <>
      {user ? (
        <div className="dropdown dropdown-end">
          <label
            tabIndex="0"
            className="btn btn-ghost bg-gray-500 btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <h3 className="text-center text-lg text-white flex justify-center items-center h-full">
                  {user?.email?.slice(0, 2)}
                </h3>
              )}
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black text-lg bg-gray-200 rounded-box w-52"
          >
            <li>
              <Link to="/dashboard/profile" className="justify-between">
                Profile
              </Link>
            </li>

            <li>
              <button className="hover:underline" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 border-b-2 border-gray-100 shadow-sm h-16 px-12 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <Link to="/dashboard" className="normal-case text-xl">
          <img className="img-fluid" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="form-control relative mt-0">
          <input
            type="text"
            placeholder="Search here...."
            className="input input-bordered w-96 z-20"
          />

          <button
            className="btn bg-white border-none hover:bg-white absolute top-0 right-2
           rounded-l-none "
          >
            <img className="w-4 h-4 z-30" src={search} alt="" />
          </button>
        </div>
      </div>
      <div className="navbar-end">
        <button className="px-14">
         <img src={noti} alt="" />
        </button>
        {menu}
      </div>
    </div>
  );
};

export default TopBar;
