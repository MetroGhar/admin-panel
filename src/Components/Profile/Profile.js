import React, { useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import sub from "../../Assest/Subtract1.png";
import auth from "../../firebase.init";

const Profile = ({ profileData }) => {
  const [user, loading, error] = useAuthState(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [inputs, setInputs] = useState({});
  const [info, setInfo] = useState([]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBasicInfo = () => {
    setInfo(inputs);
  };
  profileData(info);

  const handleUserPhotoChange = async () => {
    await updateProfile({ photoURL: "photourlll" });
  };

  return (
    <div
      style={{
        width: "980px",
        height: "880px",
        margin: "auto",
        border: "2px solid #E5E5E5",
        borderRadius: "12px",
      }}
      className="my-16"
    >
      <div className="grid grid-cols-2 justify-between items-center">
        <div className=""></div>
        <div className="flex justify-center items-center">
          <h2 className="text-3xl mt-8">profile</h2>
          <div className="mr-8 mt-8 flex flex-col justify-end items-center mx-auto">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <input type="file" id="photo-btn" hidden />
            <button onClick={handleUserPhotoChange}>
              <label for="photo-btn">
                <img className="w-5 h-5 mt-2 cursor-pointer" src={sub} alt="" />
              </label>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-24 px-16">
        <div className="flex justify-between gap-x-14">
          <input
            name="companyName"
            onChange={handleChange}
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Company Name "
          />
          <input
            name="emailId"
            onChange={handleChange}
            readOnly
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder={user.email}
          />
          <input
            readOnly
            name="mobileNo"
            onChange={handleChange}
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder={user.phoneNumber}
          />
        </div>

        <input
          name="address"
          onChange={handleChange}
          className=" placeholder:text-slate-400 block w-full mt-8 border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
          type="text"
          placeholder="Address
            "
        />

        <div className="flex justify-between mt-8 gap-x-14">
          <input
            name="yearOfEstablishment"
            onChange={handleChange}
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Year of Establishment
            "
          />
          <input
            name="projects"
            onChange={handleChange}
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Projects"
          />
          <input
            name="website"
            onChange={handleChange}
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Website"
          />
        </div>

        <input
          name="typeOfCompany"
          onChange={handleChange}
          className=" placeholder:text-slate-400 block w-64 border-b-2 border-slate-300 py-2 pr-3 mt-8 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
          type="text"
          placeholder="Type Of Company 
            "
        />

        <input
          name="descriptions"
          onChange={handleChange}
          className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 mt-8 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
          type="text"
          placeholder="Descriptions
            "
        />

        <button
          onClick={handleBasicInfo}
          className="mt-32 flex mx-auto btn btn-primary w-full"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Profile;
