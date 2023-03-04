import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import eyeSmall from "../../Assest/download__13_-removebg-preview 6.png";
import pencil from "../../Assest/icons8-pencil-96 1.png";
import deleted from "../../Assest/icons8-remove-96 1.png";
import person from "../../Assest/navbar/user-square.png";
import { useDeleteCareerDataMutation, useGetCareerDataQuery } from "../../feature/api/apiEndPoint/careerApi";
import "../Style/Style.css";

const CareerManage = () => {

  // redux state

  const {isLoading, data} = useGetCareerDataQuery();
  const [deleteCareer] = useDeleteCareerDataMutation()
  // local state


  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const [filterData, setFilterData] = useState("All");

  const handleChange = (e, p) => {
    setCurrentPage(p);
  };

  const handleChangeRowsPerPage = (event) => {
    setDataPerPage(parseInt(event.target.value));
  };

  const [toggle, setToggle] = useState(false);
  const handleDeleteData = async (delId) => {
    // axios
    //   .delete(`http://52.66.198.155/api/v1/admin/job/delete/${delId}`)
    //   .then((res) => {
      const result = await deleteCareer({delId})
        if (result?.data?.success === true) {
          toast.success("Your selected job has been deactivated successfully", {
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
      
  };
  return (
    <div className="py-16 px-12">
      <div className="flex flex-col justify-between items-end gap-3 rounded-2xl  border-gray-200 py-1 px-2">
        <div className="flex justify-center items-center w-full gap-x-4 ">
          <div
            onClick={() => setFilterData("All")}
            className={`shadow-lg ${
              filterData === "All" ? "border-2 border-primary" : ""
            } px-3 w-full py-2 cursor-pointer rounded-lg`}
          >
            <p className="text-sm">All</p> {data?.data?.length}
          </div>
          <div  onClick={() => setFilterData("BusinessDevelop")}
            className={`shadow-lg ${
              filterData === "BusinessDevelop" ? "border-2 border-primary" : ""
            } px-3 w-full py-2 cursor-pointer rounded-lg`}>
            <p className="text-sm"><span className="flex gap-x-2"> Business <span> Development</span> </span></p> {(data?.data?.filter((itm) => itm?.jobCategory === "BusinessDevelop")?.length)}
          </div>
          <div  onClick={() => setFilterData("Marketing")}
            className={`shadow-lg ${
              filterData === "Marketing" ? "border-2 border-primary" : ""
            } px-3 w-full py-2 cursor-pointer rounded-lg`}>
            <p className="text-sm">Marketing</p> {(data?.data?.filter((itm) => itm?.jobCategory === "Marketing")?.length)}
          </div>
          <div  onClick={() => setFilterData("TechDesign")}
            className={`shadow-lg ${
              filterData === "TechDesign" ? "border-2 border-primary" : ""
            } px-3 w-full py-2 cursor-pointer rounded-lg`}>
            <p className="text-sm">Tech & Design</p> {(data?.data?.filter((itm) => itm?.jobCategory === "TechDesign")?.length)}
          </div>
          <div onClick={() => setFilterData("Operation")}
            className={`shadow-lg ${
              filterData === "Operation" ? "border-2 border-primary" : ""
            } px-3 w-full py-2 cursor-pointer rounded-lg`}>
            <p className="text-sm">Operation</p> {(data?.data?.filter((itm) => itm?.jobCategory === "Operation")?.length)}
          </div>
          <div onClick={() => setFilterData("Others")}
            className={`shadow-lg ${
              filterData === "Others" ? "border-2 border-primary" : ""
            } px-3 w-full py-2 cursor-pointer rounded-lg`}>
            <p className="text-sm">Others</p> {(data?.data?.filter((itm) => itm?.jobCategory === "Others")?.length)}
          </div>
        </div>
        <div className="cursor-pointer flex justify-center items-center">
          {/* <img className=" img-fluid" src={lead} alt="" /> */}
          <div
            onClick={() => navigate("careerpost")}
            className="bulk-button flex justify-between gap-x-1 items-center text-sm py-2 px-3 text-white"
          >
            Post job
            <img src={person} alt="" />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mt-12  py-4 rounded-none">
        <div className="flex justify-center items-center gap-x-4 mb-8">
          <input
            type="text"
            placeholder="Search"
            className="border p-2 rounded-lg input-bordered w-xl"
          />
       
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
          <div className="flex justify-start gap-x-2 items-center">
            <p>Bulk Action</p>

            <div className="flex relative  items-center flex-col gap-2">
              <button
                onClick={() => setToggle(!toggle)}
                className="border py-1 px-4"
              >
                Delete
              </button>
              {toggle ? (
                <div className=" flex flex-col gap-0 mt-9 bg-gray-200 p-1 absolute">
                  {" "}
                  <button
                    className="bg-white px-2 hover:text-primary"
                    // onClick={() => handleApproved()}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
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
          <table className="rounded-none mt-16 w-full">
            <thead className="w-full bg-[#EDEDED] h-12">
              <tr className="text-center text-sm font-semibold w-full border-b-2 ">
                <th>
                  <div
                    // onClick={() => handleCheckChieldElement(tableData)}
                    className={`productInput ml-2 ${"Pending" && "active"}`}
                  >
                    {" "}
                  </div>
                </th>
                <th>Id </th>
                <th>Job Role</th>
                <th>Location</th>
                <th>Experience Required</th>
                <th>Job type</th>
                <th>Compensation </th>
                <th>Status </th>

                <th>Action</th>
              </tr>
            </thead>
            {data?.data?.filter((item) =>
                filterData === "All"
                  ? item
                  : item.jobCategory === filterData
              )?.map((table, index) => (
              <tbody className="w-full hover:bg-[#E7F9FC] cursor-pointer" key={index}>
                <tr className="text-sm h-16 w-full text-center hover border-b-2">
                  <td className="px-2">
                    <div key={index} className="product">
                      {/* <div
                      checked={checked}

                      className={`productInput ${table.id && "active"}`}
                    >
                      <input
                        onChange={(e) => handleChangeCheckBox(table.id)}
                        className=""
                        type="checkbox"
                        id={table.id}
                        value={table.id}
                      />

                      <input
                        type="checkbox"
                        id={index}
                        name={table?.name}
                        value={table?.name}
                        onChange={() => handleOnChange(index)}
                      />
                      {checkedState[index] && (
                        <>
                          <div className="productInputBefore"></div>
                          <div className="productInputAfter">
                            <img src={select} alt="" />
                          </div>
                        </>
                      )}
                    </div> */}
                      {/* <input
                      type="checkbox"
                      id={index}
                      name={table?.id}
                      value={table?.id}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    /> */}

                      {/* <label htmlFor={table.id}>{table.search}</label> */}
                    </div>
                  </td>
                  <td className="">
                    {"#J" +
                      (((currentPage < 2 && "0") ||
                        (currentPage > 1 && "0") ||
                        (currentPage > 10 && "0") ||
                        (currentPage > 20 && "0")) +
                        (currentPage - 1) +
                        index)}
                  </td>
                  <td>{table?.jobTitle}</td>
                  <td>{table?.location}</td>
                  <td>{table?.experience}</td>
                  <td>{table?.workType}</td>
                  <td>{table?.compensation}</td>

                  <td>
                    {" "}
                    <button
                      className={`bg-[#4EC615] ${
                        table?.isDeleted === true ? "bg-[#FFD700]" : ""
                      } p-1 px-2 rounded-lg text-[#000000]`}
                    >
                      {table?.isDeleted === true ? "Inactive" : "Active"}
                    </button>{" "}
                  </td>

                  <td className="">
                    <div className="flex justify-center items-center">
                      <button className="cursor-pointer w-full">
                        <label
                          onClick={() => navigate(`careerupdate/${table?._id}`)}
                          // htmlFor="my-modal-3"
                          className="cursor-pointer"
                        >
                          <img src={pencil} alt="" />
                        </label>
                      </button>

                      <button
                        onClick={() => navigate(`careerview/${table._id}`)}
                        className=" w-full"
                      >
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
            count={Math.ceil(data?.data?.length / dataPerPage)}
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

export default CareerManage;
