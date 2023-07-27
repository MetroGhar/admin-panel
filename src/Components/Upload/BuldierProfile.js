import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cancel from "../../Assest/icons8-cancel-64 2.png";
import camera from "../../Assest/Subtract1.png";
import { getAllProperty } from "../../feature/propertySlice/propertySlice";

const BuldierProfile = ({ handleSubmit }) => {
  // code with redux
  const dispatch = useDispatch();
  const data = useSelector((state) => state.property);

  // code with local state
  const handleChange = (e) => {
    dispatch(getAllProperty({ name: e.target.name, data: e.target.value }));
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    console.log("this is image", formData);

    await fetch("http://13.127.219.251/api/v1/image/upload", {
      method: "POST",
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) =>
        //   setData((prevState) => ({
        //   ...prevState,
        //   builderimage: data.imgUrl,
        // }
        // ))
        dispatch(getAllProperty({ name: "builderimage", data: data?.imgUrl }))
      );
    console.log("this is full project data", data);
  };
  const deleteImage = async (tag) => {
    console.log("hello", tag);
    await axios
      .post("http://13.127.219.251/api/v1/image/delete", { tag })
      .then(() =>
        //   setData((prevState) => ({
        //   ...prevState,
        //   builderimage: null,
        // }
        // ))
        dispatch(getAllProperty({ name: "builderimage", data: "" }))
      );
  };

  return (
    <div className="px-12 mt-14 pb-12">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 justify-center items-center gap-32">
          <div className="col-span-3">
            <div className="grid grid-cols-2 gap-12">
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="text"
                placeholder="Builder/company Name"
                name="buildername"
                defaultValue={data?.buildername || ""}
                onChange={handleChange}
              />
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="text"
                name="builderemail"
                defaultValue={data?.builderemail || ""}
                placeholder="Email Id "
                onChange={handleChange}
              />
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="text"
                placeholder="Year of Establishment
              "
                defaultValue={data?.builderyoe || ""}
                name="builderyoe"
                onChange={handleChange}
              />
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="text"
                placeholder="Projects "
                name="builderproject"
                defaultValue={data?.builderproject || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="avatar flex flex-col justify-center items-center gap-2">
            <div className="w-24 rounded-full ">
              <img src={data?.builderimage} alt="" />
            </div>
            {data?.builderimage ? (
              ""
            ) : (
              <input
                hidden
                onChange={uploadImage}
                name="builderimage"
                type="file"
                id="imageUser"
              />
            )}
            <label htmlFor="imageUser" className="w-6  h-6 cursor-pointer">
              {data?.builderimage ? (
                <img
                  className="img-fluid"
                  onClick={() => deleteImage(data?.builderimage)}
                  src={cancel}
                  alt=""
                />
              ) : (
                <img className="img-fluid" src={camera} alt="" />
              )}
            </label>
          </div>
        </div>

        <div className="flex justify-between gap-x-14 mt-14">
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            name="companytype"
            defaultValue={data?.companytype || ""}
            placeholder="Type Of Company "
            onChange={handleChange}
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Website   "
            name="builderwebsite"
            defaultValue={data?.builderwebsite || ""}
            onChange={handleChange}
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Mobile No."
            name="buildercontact"
            defaultValue={data?.buildercontact || ""}
            onChange={handleChange}
          />
        </div>

        <input
          className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm mt-12"
          type="text"
          placeholder="Address"
          name="builderaddress"
          defaultValue={data?.builderaddress || ""}
          onChange={handleChange}
        />

        <input
          className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm mt-8"
          type="text"
          name="builderdescription"
          defaultValue={data?.