import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import eye from "../../Assest/login/Eye.png";
import lock from "../../Assest/login/Forgot Password.png";
import gmail from "../../Assest/login/Gmail.png";
import metro from "../../Assest/login/Group 47535.png";
import logo from "../../Assest/login/logo.png";
import auth from "../../firebase.init";
import "../Style/Style.css";
const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";
  if (loading) {
    return;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <>
   
    <div className="w-full grid grid-cols-6 h-full justify-end items-center">
    <div className="col-span-2  w-full ml-60 z-20">
        <img className="img-fluid z-20" src={metro} alt="" />
        </div>
    
      
       <div className="w-full col-span-4 z-10 bg-login">
       {/* <img className="img-fluid w-full h-full z-10" src={shape} alt="" /> */}
      <div className="flex justify-start flex-col items-center h-full">
       <div className="mt-16 flex flex-col justify-center items-center">
       <img src={logo} alt="" />
      <h2 className="mt-2 text-2xl">welcome to  METROGHAR  admin panel</h2>
       </div>
      <form className="w-6/12 ml-auto pr-16 mt-16">
      <h2 className="text-xl">Email </h2>
        <div className="flex w-full justify-start items-start mx-auto">
          <p className="absolute mt-3 ml-2" name="phone" id="">
            <img src={gmail} alt="" />
          </p>
          <div className="absolute ml-10 border-r border-[#000000] mt-3 h-[28px]"></div>
          <input
            className=" mt-1 placeholder:text-[#767676] block w-full border-none shadow-md rounded-lg border-[#1E90A5] h-[46px] pr-3 px-2 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm pl-12"
            type="text"
            name=""
            placeholder="Example@gmail.com "
            id=""
          />
        </div>

        <h2 className="text-xl mt-4">Password </h2>
        <div className="flex w-full justify-start items-start mx-auto">
          <p className="absolute mt-3 ml-2" name="phone" id="">
            <img src={lock} alt="" />
          </p>
          <div className="absolute ml-10 border-r border-[#000000] mt-3 h-[28px]"></div>
          <input
            className=" mt-1 placeholder:text-[#767676] block w-full border-none shadow-md rounded-lg border-[#1E90A5] h-[46px] pr-3 px-2 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm pl-12"
            type="password"
            name=""
            placeholder="Type.. "
            id=""
          />
          <img className="absolute right-[70px] mt-3" src={eye} alt="" />
        </div>

        <input type="submit" value="Login" className="bg-[#2149D1] w-full rounded-lg text-white mt-6 py-2 cursor-pointer" />
      </form>
      </div>
       </div>
      
    </div>
    </>
  );
};

export default Login;
