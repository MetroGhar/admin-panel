import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import eyeBig from "../../../Assest/download__13_-removebg-preview 3.png";
import eyeSmall from "../../../Assest/download__13_-removebg-preview 6.png";
import pencil from "../../../Assest/icons8-pencil-96 1.png";
import deleted from "../../../Assest/icons8-remove-96 1.png";
import home from "../../../Assest/property/Home_duotone.png";
import exlogo from "../../../Assest/property/Vector (4).png";
import select from "../../../Assest/vvb.png";
import { useApprovedApiMutation } from "../../../feature/api/apiEndPoint/approvedApi";
import { useDeletePropertyApiMutation } from "../../../feature/api/apiEndPoint/deletePropertyApi";

import { useGetPropertyDataQuery } from "../../../feature/api/apiEndPoint/getPropertyData";

import "../../Style/Style.css";
import Bulk from "./Bulk";
import PropertyModal from "./PropertyModal";

const Property = () => {
  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // redux state

  const { isLoading, isError, error, data } = useGetPropertyDataQuery({
    currentPage,
    dataPerPage,
  });
  const [deleteProperty] = useDeletePropertyApiMutation();
  const [statutsAproved] = useApprovedApiMutation();
  // local state
  const [checkData, setCheckData] = useState([]);

  const [handleProperty, setHandleProperty] = useState("All");

  const handleChange = (e, p) => {
    setCurrentPage(p);
  };

  const handleChangeRowsPerPage = (event) => {
    setDataPerPage(parseInt(event.target.value));
  };

  const handleDeleteData = async (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      const result = await deleteProperty(id);
      if (result?.data?.success) {
        toast.success("Your selected property has been deleted successfully", {
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
        toast.warn("Opps! try again", {
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
    // if (confirm) {
    //   axios
    //     .delete(`http://13.127.219.251/backend/backend/api/v1/admin/project/${id}`)
    //     .then((response) => {
    //       toast.success(
    //         "Your selected property has been deleted successfully",
    //         {
    //           position: "top-right",
    //           autoClose: 5000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "light",
    //         }
    //       );
    //       // getData();
    //     })
    //     .catch((error) => {
    //       toast.warn("Opps! try again", {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //       });
    //     });
    // }
  };
  const [saveData, setSaveData] = useState({});
  const handleEdit = (data) => {
    setSaveData(data);
  };

  const handleCheck = (id) => {
    setCheckData([...checkData, id]);
  };

  const handleStatus = async (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      let res = await statutsAproved(id);
      if (res?.data?.project?.adminapproved === true) {
        toast.success("Your selected property successfully approved", {
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
        toast.success("Your selected property successfully disabled", {
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
  };

  return (
    <div className="py-16 px-12">
      <Bulk />
      <PropertyModal saveData={saveData} />
      <div className="flex justify-between items-center rounded-2xl  px-4 py-2">
        <div className="flex gap-x-4">
          <div
            onClick={() => setHandleProperty("All")}
            className={`shadow-lg ${
              handleProperty === "All"
                ? "border-2 border-primary "
                : "border-none"
            } px-3 w-40 py-2  cursor-pointer rounded-lg`}
          >
            <p className="text-sm">All Property</p>
            {data?.All}{" "}
          </div>
          <div
            onClick={() => setHandleProperty(true)}
            className={`shadow-lg ${
              handleProperty === true
                ? "border-2 border-primary "
                : "border-none"
            } px-3  cursor-pointer w-40 py-2 rounded-lg`}
          >
            <p className="text-sm">Approved Property</p>
            {data?.Approved}
          </div>
          <div
            onClick={() => setHandleProperty(false)}
            className={`shadow-lg ${
              handleProperty === false
                ? "border-2 border-primary "
                : "border-none"
            } cursor-pointer px-3 w-40 py-2 rounded-lg`}
          >
            <p className="text-sm">Pending Property</p>
            {data?.Pending}
          </div>
          {/* <h2>Approved({count?.Approved})</h2>
          <h2>Pending({count?.Pending})</h2> */}
        </div>
        <div className="flex justify-start gap-x-6">
          <label
            htmlFor="my-modal-6"
            className="bulk-button h-9 flex justify-center items-center text-sm px-3 cursor-pointer"
          >
            <span className="text-white">Bulk Upload </span>
          </label>

          <label
            htmlFor="my-modal-3"
            className="bulk-button h-9 flex justify-center items-center text-sm px-3 cursor-pointer"
          >
            <span className="text-white">Post Property </span>
            <img src={home} alt="" />
          </label>
        </div>
      </div>

      <div className="overflow-x-auto mt-12 py-4 rounded-none">
        <div className="flex justify-center mx-auto items-center gap-x-4 mb-8">
          <input
            type="text"
            placeholder="Type here"
            className="border p-2 input-bordered w-xs"
          />
          <select className="border p-2 select-bordered w-xs">
            <option disabled selected>
              Position
            </option>
            <option>Ready To Move</option>
            <option>Ongoing</option>
            <option>New launch</option>
          </select>
          <select className="border p-2 select-bordered w-xs">
            <option disabled selected>
              Type
            </option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Mixed development</option>
            <option>Other</option>
          </select>
          <select className="border p-2 select-bordered w-xs">
            <option disabled selected>
              Location
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select className="border p-2 select-bordered w-xs">
            <option disabled selected>
              Owner
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div className="mb-8 flex justify-between items-center px-4">
          <div className="flex justify-start gap-x-2 items-center">
            <p>Show </p>
            <select
              onChange={handleChangeRowsPerPage}
              className="border p-2 py-0 select-bordered w-xs"
            >
              <option selected>{currentPage}</option>
              <option>25</option>
              <option>50</option>
              <option>75</option>
              <option>100</option>
            </select>
            <p>entries</p>
          </div>
          {/* <div className="flex justify-start gap-x-2 items-center">
            <p>Bulk Action</p>

            <div className="flex relative  items-center flex-col gap-2">
              <button
                onClick={() => setToggle(!toggle)}
                className="border py-1 px-4"
              >
                Approved
              </button>
              {toggle ? (
                <div className="border w-full flex flex-col gap-0 mt-8 absolute">
                  {" "}
                  <button
                    className="border-b px-2 hover:bg-primary hover:text-white"
                    onClick={() => handleApproved()}
                  >
                    Approved
                  </button>
                  <button
                    className="border-b px-2 hover:bg-[#FAE52C] hover:text-white"
                    onClick={() => handleApproved()}
                  >
                    Pending
                  </button>
                  <button
                    className="border-b hover:bg-[#FDA97D] hover:text-white-700 mt-1"
                    onClick={() => handleCancel()}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div> */}
          <div className="bulk-button h-8 flex justify-center items-center text-sm px-3 cursor-pointer">
            <p className="text-white flex justify-between gap-x-1 items-center">
              {" "}
              <img src={exlogo} alt="" /> Export
            </p>
          </div>
        </div>

        {isLoading ? (
          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <table className="rounded-none mt-6 w-full">
            <thead className="w-full bg-[#EDEDED] h-12">
              <tr className="text-center text-sm font-semibold w-full ">
                <th className=""></th>
                <th>Id </th>
                <th>Property Name</th>
                <th>Property Type</th>

                <th>Posted By</th>
                <th>Last Modified Date</th>
                <th>Status</th>
                <th>
                  <img src={eyeBig} alt="" />
                </th>
                <th>Action</th>
              </tr>
            </thead>

            {data?.Projects?.filter((item) =>
              handleProperty === "All"
                ? item
                : item.adminapproved === handleProperty
            )?.map((table, index) => (
              <tbody
                className="w-full hover:bg-[#E7F9FC] cursor-pointer"
                key={index}
              >
                <tr className="text-sm h-16 w-full text-center hover border-b-2">
                  <td className="px-2">
                    <div key={table._id} className="product">
                      <div
                        onClick={() => handleCheck(table._id)}
                        className={`productInput ${table._id && "active"}`}
                      >
                        <input className="" type="checkbox" id={table._id} />
                        {checkData.map(
                          (c) =>
                            c === table._id && (
                              <>
                                <div className="productInputBefore"></div>
                                <div className="productInputAfter">
                                  <img src={select} alt="" />
                                </div>
                              </>
                            )
                        )}
                      </div>
                    </div>
                  </td>

                  <td className="">
                    {"#P" +
                      (((currentPage < 2 && "0000") ||
                        (currentPage > 1 && "000") ||
                        (currentPage > 10 && "00") ||
                        (currentPage > 20 && "0")) +
                        (currentPage - 1) +
                        index)}
                  </td>
                  <td>{table?.projectname}</td>
                  <td>{table?.projectsubtype}</td>

                  <td>{table?.buildername}</td>
                  <td>{table?.updatedAt.slice(0, 10)}</td>

                  <td>
                    {" "}
                    <button
                      onClick={() => handleStatus(table._id)}
                      className={`bg-[#4EC615] ${
                        table?.adminapproved === false ? "bg-[#FFD700]" : ""
                      } p-1 px-2 rounded-lg text-[#000000]`}
                    >
                      {table.adminapproved === true ? "Approved" : "Pending"}
                    </button>{" "}
                  </td>
                  <td>{table?.noofviews}</td>

                  <td className="">
                    <div className="flex justify-center items-center">
                      <button className="cursor-pointer w-full">
                        <label
                          onClick={() => handleEdit(table)}
                          htmlFor="my-modal-3"
                          className="cursor-pointer"
                        >
                          <img src={pencil} alt="" />
                        </label>
                      </button>

                      <button className=" w-full">
                        <img className="w-full" src={eyeSmall} alt="" />
                      </button>
                      <button
                        className="w-full"
                        onClick={() => handleDeleteData(table?._id)}
                      >
                        <img src={deleted} alt="" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        )}

        <div className="mx-auto flex justify-center mt-4">
          <Pagination
            count={Math.ceil(data?.totalResult / dataPerPage)}
            // count={20}
            page={currentPage}
            onChange={handleChange}
            // rowsPerPage={rowsPerPage}
            color="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default Property;
