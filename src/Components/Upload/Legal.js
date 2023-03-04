import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cancel from "../../Assest/icons8-cancel-64 2.png";
import { getAllProperty } from "../../feature/propertySlice/propertySlice";
const Legal = () => {

    // code with redux
    const dispatch = useDispatch();
    const data = useSelector((state) => state.property);
  
  
  
    // code with local state
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image",file);

  const result =   await axios.post("http://52.66.198.155/api/v1/image/upload", formData)
      console.log("this is image response ",result.data.imgUrl)
      // setData((prevState) => ({
      //   ...prevState,
      //   [e.target.name]: result.data.imgUrl,
      // }))
      dispatch(getAllProperty({ name: e.target.name,data: result.data.imgUrl}))
    
  };
  const handleChange = (e) => {
    dispatch(getAllProperty({ name: e.target.name,data: e.target.value}))
    
  };


  const handleLegal = (e) => {
    e.preventDefault();
  };

  const deleteImage = async (tag) => {
    console.log("tag", tag);

    await axios
      .post("http://52.66.198.155/api/v1/image/delete", { tag })
      .then(() =>
        // setData((prevState) => ({
        //   ...prevState,
        //   ocimage: null,
        // }))
        dispatch(getAllProperty({ name: "ocimage",data: null}))
      );
  };
  const deleteImagecc = async (tag) => {
    console.log("tag", tag);

    await axios
      .post("http://52.66.198.155/api/v1/image/delete", { tag })
      .then(() =>
        // setData((prevState) => ({
        //   ...prevState,
        //   ccimage: null,
        // }))
        dispatch(getAllProperty({ name: "ccimage",data: null}))
      );
  };
  const deleteImagekh = async (tag) => {
    console.log("tag", tag);

    await axios
      .post("http://52.66.198.155/api/v1/image/delete", { tag })
      .then(() =>
        // setData((prevState) => ({
        //   ...prevState,
        //   khataimage: null,
        // }))
        dispatch(getAllProperty({ name: "khataimage",data: null}))
      );
  };
  const deleteImagere = async (tag) => {
    console.log("tag", tag);

    await axios
      .post("http://52.66.198.155/api/v1/image/delete", { tag })
      .then(() =>
        // setData((prevState) => ({
        //   ...prevState,
        //   reraimage: null,
        // }))
        dispatch(getAllProperty({ name: "reraimage",data: null}))
      );
  };


  return (
    <div className="mt-12 px-12 pb-12">
      <from onSubmit={handleLegal}>
        <div className="flex justify-between gap-12">
          <select
            name="projectoc"
            onChange={handleChange}
            className="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
          >
            <option disabled selected>Occupancy Certificate (OC)</option>
            <option selected={data?.projectoc === "yes"}  value="yes">Yes</option>
            <option selected={data?.projectoc === "no"} value="no">No</option>
          </select>

          <div className=" border p-2 w-full">
            <label className="block">
              <span className="sr-only">Choose file </span>
              {data?.ocimage ? (
                <div className="relative ">
                  <img
                    className="w-14 h-14 img-fluid"
                    src={data?.ocimage[0]}
                    alt=""
                  />
                  <img
                    className="img-fluid absolute top-2 left-10 w-4 h-4"
                    onClick={() => deleteImage(data.ocimage)}
                    src={cancel}
                    alt=""
                  />
                </div>
              ) : (
                <input
                  onChange={uploadImage}
                  name="ocimage"
                  accept=".doc,.docx,.pdf"
                  type="file"
                  className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-none file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50
      hover:file:bg-violet-100
    "
                />
              )}
            </label>
          </div>
        </div>
        <div className="flex justify-between gap-12 mt-14">
          <select
            name="projectcc"
            onChange={handleChange}
            className="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
          >
            <option disabled selected>
              Occupancy Certificate (CC)
            </option>
            <option selected={data?.projectcc === "yes"} value="yes">Yes</option>

            <option selected={data?.projectcc === "no"} value="no">No</option>
          </select>

          <div className=" border p-2 w-full">
            <label className="block">
              <span className="sr-only">Choose file </span>
              {data?.ccimage ? (
                <div className="relative ">
                  <img
                    className="w-14 h-14 img-fluid"
                    src={data?.ccimage[0]}
                    alt=""
                  />
                  <img
                    className="img-fluid absolute top-2 left-10 w-4 h-4"
                    onClick={() => deleteImagecc(data.ccimage)}
                    src={cancel}
                    alt=""
                  />
                </div>
              ) : (
                <input
                  onChange={uploadImage}
                  name="ccimage"
                  type="file"
                  accept=".doc,.docx,.pdf"
                  className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-none file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50
      hover:file:bg-violet-100
    "
                />
              )}
            </label>
          </div>
        </div>
        <div className="flex justify-between gap-12 mt-14">
          <div className="flex gap-6 w-full">
            <select
              name="khatatype"
              onChange={handleChange}
              className="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
            >
              <option disabled selected>
                Khata Type
              </option>

              <option  selected={data?.khatatype === "A Khata"} value="A Khata">A Khata</option>
              <option selected={data?.khatatype === "E Khata"} value="E Khata">E Khata</option>
            </select>
            <input
              name="khatano"
              onChange={handleChange}
              defaultValue={data?.khatano || ""}
              className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
              type="text"
              placeholder="Khata Number "
            />
          </div>

          <div className=" border p-2 w-full">
            <label className="block">
              <span className="sr-only">Choose file </span>

              {data?.khataimage ? (
                <div className="relative ">
                  <img
                    className="w-14 h-14 img-fluid"
                    src={data?.khataimage[0]}
                    alt=""
                  />
                  <img
                    className="img-fluid absolute top-2 left-10 w-4 h-4"
                    onClick={() => deleteImagekh(data.khataimage)}
                    src={cancel}
                    alt=""
                  />
                </div>
              ) : (
                <input
                  onChange={uploadImage}
                  name="khataimage"
                  type="file"
                  accept=".doc,.docx,.pdf"
                  className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-none file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50
      hover:file:bg-violet-100
    "
                />
              )}
            </label>
          </div>
        </div>

        <div className="flex justify-between gap-12 mt-14">
          <div className="flex gap-6 w-full">
            <select
              name="reraapproved"
              onChange={handleChange}
              className="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
            >
              <option disabled selected>
                RERA Approved
              </option>
              <option selected={data?.reraapproved === "yes"} value="yes">Yes</option>
              <option selected={data?.reraapproved === "no"} value="no">No</option>
            </select>
            <input
              name="reraauthority"
              defaultValue={data?.reraauthority || ""}
              onChange={handleChange}
              className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
              type="text"
              placeholder="Approval Authority Name "
            />
          </div>

          <div className=" border p-2 w-full">
            <label className="block">
              <span className="sr-only">Choose file </span>

              {data?.reraimage ? (
                <div className="relative ">
                  <img
                    className="w-14 h-14 img-fluid"
                    src={data?.reraimage[0]}
                    alt=""
                  />
                  <img
                    className="img-fluid absolute top-2 left-10 w-4 h-4"
                    onClick={() => deleteImagere(data.reraimage)}
                    src={cancel}
                    alt=""
                  />
                </div>
              ) : (
                <input
                  onChange={uploadImage}
                  name="reraimage"
                  type="file"
                  accept=".doc,.docx,.pdf"
                  className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-none file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50
      hover:file:bg-violet-100
    "
                />
              )}
            </label>
          </div>
        </div>
       
      </from>
    </div>
  );
};

export default Legal;
