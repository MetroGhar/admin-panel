import React, { useState } from "react";
import { toast } from "react-toastify";
import "../../Style/Style.css";
const axios = require("axios");

const Bulk = () => {
  const [csv, setCsv] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCsv = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myFile", csv, csv.name);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      setLoading(true);
      const data = await axios.post(
        "http://13.127.219.251/api/v1/project/bulkupload",
        formData,
        config
      );
      if (data.status === 200) {
        setLoading(false);
        toast.success("Successfully your property data saved", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log({
          open: true,
          message: "instand succseessfull",
          type: "success",
        });
      }
      console.log("csv", formData);
    } catch (error) {
      setLoading(false);
      console.log(error);
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

  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box p-0 rounded-none">
          <div className="flex justify-center items-center border-b my-4">
            <h3 className="font-bold text-lg mb-2">Bulk Upload</h3>
            <label
              htmlFor="my-modal-6"
              className="btn-sm text-2xl cursor-pointer absolute right-4 mb-2"
            >
              ✕
            </label>
          </div>

          {loading ? (
            <p className="py-8 text-center text-green-500">Please waite...</p>
          ) : (
            <form className="px-8" onSubmit={(e) => handleCsv(e)}>
              <div className="flex flex-col gap-y-2">
                <input
                  type="file"
                  onChange={(e) => setCsv(e.target.files[0])}
                  name=""
                  id=""
                />
                <span className="text-xs">
                  Note : Please select only .csv file
                </span>
              </div>

              <button
                className="mt-12 flex justify-center mx-auto p-2 px-6 text-white rounded-sm cursor-pointer border-none bg-[#1E90A5] mb-4"
                type="submit"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bulk;
