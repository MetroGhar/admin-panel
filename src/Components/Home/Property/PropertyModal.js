import React, { useState } from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { usePropertyPostApiMutation } from "../../../feature/api/apiEndPoint/propertyPostApi";
import { getAllProperty } from "../../../feature/propertySlice/propertySlice";
import Amenties from "../../Upload/Amenties";
import BasicInfo from "../../Upload/BasicInfo";
import BasicInformation from "../../Upload/BasicInformation";
import BuldierProfile from "../../Upload/BuldierProfile";
import Congratulation from "../../Upload/Congratulation";
import Legal from "../../Upload/Legal";
import Plan from "../../Upload/Plan";
import Project from "../../Upload/Project";
const axios = require("axios");

const PropertyModal = ({ saveData }) => {
  // redux state
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.property);

  useEffect(() => {
    for (const key in saveData) {
      dispatch(getAllProperty({ name: `${key}`, data: `${saveData[key]}` }));
    }
  }, [dispatch, saveData]);
  const [postProperty] = usePropertyPostApiMutation();
  // local state
  const [page, setPage] = useState(1);
  const goNextPage = () => {
    // e.preventDefault();
    setPage((page) => page + 1);
  };

  function goBackPage() {
    setPage((page) => page - 1);
  }
  const handleMultipleImage = (images) => {
    return images.map((img) => img.file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    postData.externalimages = handleMultipleImage(postData.externalimages);
    postData.internalimages = handleMultipleImage(postData.internalimages);
    postData.amenitiesimages = handleMultipleImage(postData.amenitiesimages);
    postData.othersimages = handleMultipleImage(postData.othersimages);

    for (let d in postData) {
      if (typeof postData[d] != undefined) {
        if (Array.isArray(postData[d])) {
          for (let i = 0; i < postData[d].length; i++) {
            formData.append(d, postData[d][i]);
          }
        } else {
          if (typeof postData[d] != undefined) {
            formData.append(d, postData[d]);
          }
        }
      } else {
        console.log("err");
      }
    }
    if (postData._id === undefined) {
      // axios
      //   .post("http://52.66.198.155/api/v1/project/add", formData, {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      const result = await postProperty(formData);
      if (result?.data?.success === true) {
        e.target.reset();
        toast.success("Your application has been submitted successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.warn("Opps! try again later", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }

    if ("data._id" !== undefined) {
      axios
        .put(
          `http://52.66.198.155/api/v1/admin/project/${"data._id"}`,
          "postData"
        )
        .then((res) => console.log(res.data));
    }
  };

  // post property
  const addProject = async (e) => {
    e.preventDefault();
    // const result =   await axios.post("http://52.66.198.155/api/v1/project/add", {})
    console.log(postData);
    const result = await postProperty("postData");
    if (result?.status === 200) {
      toast.success("Successfully your property saved", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.warn("Opps! try again", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  // delete
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://52.66.198.155/api/v1/floorplan/${id}`)
      .then((res) => console.log(res?.data));

    // const d = data?.floorplan?.filter((item) => item.unique_id !== id);
  };
  const handleDeletes = (id) => {
    if ("data?._id") {
      let ids = "data?.floorplan?.[id]";
      axios
        .delete(`http://52.66.198.155/api/v1/floorplan/${ids._id}`)
        .then((res) => console.log(res?.data));
    } else {
      let ids = "data?.floorplan?.[id]";
      axios
        .delete(`http://52.66.198.155/api/v1/floorplan/${ids}`)
        .then((res) => console.log(res?.data));
    }
  };

  return (
    <div className="w-full">
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal bg-zinc-900/60">
        <div className="modal-box w-11/12 max-w-full p-0  rounded-none">
          <div className="flex justify-center items-center border-b my-2 sticky top-0 z-40 bg-white">
            <h3 className="font-bold text-lg mb-2">Upload Listing</h3>
            <label
              htmlFor="my-modal-3"
              className="btn-sm text-2xl cursor-pointer absolute right-4 mb-2"
            >
              ✕
            </label>
          </div>

          <div className="div">
            {page === 7 ? "" : <BasicInfo setPage={setPage} page={page} />}
            {page === 1 && <BasicInformation />}
            {page === 2 && <Plan />}
            {page === 3 && <Amenties />}
            {page === 4 && <Legal />}
            {page === 5 && <Project />}

            {page === 6 && <BuldierProfile handleSubmit={addProject} />}
            {page === 7 && <Congratulation />}
          </div>

          {page === 7 ? (
            ""
          ) : (
            <div
              className={`grid justify-center mt-6 px-8 gap-x-2 mx-auto ${
                page === 1 ? "grid-cols-1" : "grid-cols-4"
              }`}
            >
              {/* <label
              htmlFor="my-modal-3"
              className=" p-2 px-6 text-white rounded-sm cursor-pointer border-none bg-[#1E90A5] mb-4"
            >
              Continue
            </label> */}
              {page === 1 ? (
                ""
              ) : (
                <button
                  className="w-full p-2 px-6 text-primary rounded-sm cursor-pointer btn mb-4 btn-outline"
                  onClick={goBackPage}
                >
                  Back
                </button>
              )}

              {page === 6 ? (
                <button
                  onClick={addProject}
                  className="col-span-3 p-2 px-6 text-white rounded-sm cursor-pointer border-none bg-[#1E90A5] mb-4"
                  type="submit"
                >
                  Submit
                </button>
              ) : (
                <button
                  className="col-span-3 p-2 px-6 text-white rounded-sm cursor-pointer border-none bg-[#1E90A5] mb-4"
                  onClick={goNextPage}
                >
                  Continue
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
