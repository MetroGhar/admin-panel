import { Pagination } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import eyeSmall from "../../Assest/download__13_-removebg-preview 6.png";
import pencil from "../../Assest/icons8-pencil-96 1.png";
import deleted from "../../Assest/icons8-remove-96 1.png";
import adduser from "../../Assest/navbar/user-square.png";
import exlogo from "../../Assest/property/Vector (4).png";
import "../Style/Style.css";

const User = () => {
  const [tableDatas, setTableDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [length, setLength] = useState();
  const [filterData, setFilterData] = useState("All");
  const [userLength, setUserLength] = useState(0);
  const [builderLength, setBuilderLength] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://52.66.198.155/api/v1/admin/allusers`).then((res) => {
      setTableDatas(res?.data?.Users);
      setUserLength(res.data?.Users?.filter((itm) => itm?.role === "user"));
      setBuilderLength(
        res.data?.Users?.filter((itm) => itm?.role === "builder")
      );

      setLoading(false);
    });
  }, [dataPerPage, currentPage]);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://52.66.198.155/api/v1/admin/allusers`).then((res) => {
      setLength(res?.data?.TotalResult);

      setLoading(false);
    });
  }, []);
  console.log(tableDatas);

  const handleChange = (e, p) => {
    setCurrentPage(p);
  };

  const handleChangeRowsPerPage = (event) => {
    setDataPerPage(parseInt(event.target.value));
  };

  return (
    <div className="py-16 px-12">
      <div className="flex justify-between items-center rounded-2xl  border-gray-200 py-2 px-2">
        <div className="flex justify-center items-center w-full gap-x-4 ">
          <div
            onClick={() => setFilterData("All")}
            className={`cursor-pointer shadow-lg px-3 w-full py-2 rounded-lg ${
              filterData === "All" ? "border-2 border-primary" : ""
            }`}
          >
            <p className=" text-sm">All User</p> {tableDatas?.length}
          </div>
          <div
            onClick={() => setFilterData("user")}
            className={`cursor-pointer shadow-lg px-3 w-full py-2 rounded-lg ${
              filterData === "user" ? "border-2 border-primary" : ""
            }`}
          >
            <p className="text-sm">Customer</p> {userLength?.length}
          </div>
          <div
            onClick={() => setFilterData("builder")}
            className={`cursor-pointer shadow-lg px-3 w-full py-2 rounded-lg ${
              filterData === "builder" ? "border-2 border-primary" : ""
            }`}
          >
            <p className="text-sm">Builder</p> {builderLength?.length}
          </div>
        </div>
        <div className="cursor-pointer w-full flex justify-end items-center">
          {/* <img className=" img-fluid" src={lead} alt="" /> */}
          <div className="bulk-button px-3 py-2 flex justify-between gap-x-1 items-center text-white">
            Add User
            <img src={adduser} alt="" />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mt-12  py-4 rounded-none">
        <div className="flex justify-center items-center gap-x-4 mb-8">
          <input
            type="text"
            placeholder="Type here"
            className="border rounded-lg p-2 input-bordered w-xs"
          />
          <select className="border rounded-lg p-2 select-bordered w-xs">
            <option disabled selected>
              Role
            </option>
            <option>Processing</option>
            <option>Telly Calling </option>
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
          </div> */}

          <div className="bulk-button h-8 flex justify-center items-center text-sm px-3 cursor-pointer">
            <p className="text-white flex justify-between gap-x-1 items-center">
              {" "}
              <img src={exlogo} alt="" /> Export{" "}
            </p>
          </div>
        </div>

        {loading ? (
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
                <th>Name</th>
                <th>Email Id</th>
                <th>Contact No.</th>
                <th>Role</th>
                <th>Last Visit </th>
                <th>Action</th>
              </tr>
            </thead>
            {[...tableDatas].reverse()
              ?.filter((item) =>
                filterData === "All" ? item : item.role === filterData
              )
              ?.map((table, index) => (
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
                      {"#C" +
                        (((currentPage < 2 && "0000") ||
                          (currentPage > 1 && "000") ||
                          (currentPage > 10 && "00") ||
                          (currentPage > 20 && "0")) +
                          (currentPage - 1) +
                          index)}
                    </td>
                    <td>{table?.name}</td>
                    <td>{table?.email}</td>
                    <td>{table?.mobile}</td>
                    <td>{table?.role}</td>
                    <td>{table?.createdAt?.slice(0, 10)}</td>

                    {/* <td>
                    {" "}
                    <button
                      className={`bg-[#4EC615] ${
                        table?.adminapproved === false ? "bg-[#FFD700]" : ""
                      } p-1 px-2 rounded-lg text-[#000000]`}
                    >
                      {table.adminapproved === true ? "Approved" : "Pending"}
                    </button>{" "}
                  </td> */}

                    <td className="">
                      <div className="flex justify-center items-center">
                        <button className="cursor-pointer w-full">
                          <label
                            // onClick={() => handleEdit(table)}
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
                          // onClick={() => handleDeleteData(table?._id)}
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
            count={Math.ceil(length / dataPerPage)}
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

export default User;
