import React from "react";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import metro from "../../Assest/6961783 1.png";
import eye from "../../Assest/image-removebg-preview (4) 1.png";
import logo from "../../Assest/logo.png";
import auth from "../../firebase.init";
const Signup = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const handleSignup = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const phoneNumber = e.target.phoneNumber.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name, phoneNumber: phoneNumber });
  };

  const location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";
  if (loading) {
    return;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  console.log(error);

  return (
    <div className="flex gap-12 justify-center items-center">
      <div className="div">
        <img
          style={{ width: "860px", height: "100vh" }}
          className="img-fluid"
          src={metro}
          alt=""
        />
      </div>
      <div className="">
        <img
          style={{ width: "270px", height: "107px" }}
          className="flex mx-auto"
          src={logo}
          alt=""
        />

        <form
          onSubmit={handleSignup}
          style={{ width: "434px" }}
          className="pr-16 mx-auto mt-12"
        >
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            name="name"
            placeholder="Name"
            id=""
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm mt-4"
            type="text"
            name="email"
            placeholder="Email Address"
            id=""
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm mt-4"
            type="number"
            name="phoneNumber"
            placeholder="Mobile No."
            id=""
          />

          <div className="text-lg mt-4 relative flex justify-between items-center">
            <input
              name="password"
              type="password"
              placeholder="Password"
              className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
            />

            <button
              className="border-none absolute right-2 hover:bg-white
           rounded-l-none z-30"
            >
              <img className="w-6 h-4" src={eye} alt="" />
            </button>
          </div>

          <input
            className="btn mt-8 border-none text-xs hover:bg-green-700/60 mx-auto flex bg-green-700/70 w-full text-white"
            value="Create Account"
            type="submit"
          />
        </form>

        <p className="mt-8">
          Already have an account?{" "}
          <Link to="/" className="text-green-600" href="#">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
