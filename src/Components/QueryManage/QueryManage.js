import { Pagination } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import eyeSmall from "../../Assest/download__13_-removebg-preview 6.png";
import pencil from "../../Assest/icons8-pencil-96 1.png";
import "../Style/Style.css";

const QueryManage = () => {
  const [allData, setAllData] = useState([]);

  const [tableDatas, setTableDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://52.66.198.155/api/v1/admin/query/list`).then((res) => {
      setTableDatas(res?.data?.data);

      setLoading(false);
    });
  }, [dataPerPage, currentPage]);

  const [length, setLength] = useState();
  const [filterData, setFilterData] = useState("All");

  useEffect(() => {
    setLoading(true);
    axios.get(`http://52.66.198.155/api/v1/admin/query/list`).then((res) => {
      setLength(res?.data?.data);

      setLoading(false);
    });
  }, []);
  console.log(tableDatas);
  useEffect(() => {
    if (allData.length) {
      setTableDatas(allData);
    }
  }, [allData]);

  const handleChange = (e, p) => {
    setCurrentPage(p);
  };

  const handleChangeRowsPerPage = (event) => {
    setDataPerPage(parseInt(event.target.value));
  };

  const tableData = [
    {
      _id: "#1001",
      buildername: "Lodha Codename Premier",
      builderemail: "Residential",
      buildercontact: "Under Construction",
      updatedAt: "Approved",
      adminapproved: false,
    },
    {
      _id: "#1002",
      buildername: "Srishti Launch Code Blockbuster Living",
      builderemail: "Villa ",
      buildercontact: "Ready To  Move",
      updatedAt: "Approved",
      adminapproved: true,
    },
    {
      _id: "#1004",
      buildername: "Lodha Codename Premier",
      builderemail: "Residential",
      buildercontact: "Under Construction",
      updatedAt: "Approved",
      adminapproved: false,
    },
    {
      _id: "#1005",
      buildername: "Lodha Codename Premier",
      builderemail: "Residential",
      buildercontact: "Under Construction",
      updatedAt: "Approved",
      adminapproved: false,
    },
    {
      _id: "#100",
      buildername: "Lodha Codename Premier",
      builderemail: "Residential",
      buildercontact: "Under Construction",
      updatedAt: "Approved",
      adminapproved: false,
    },
  ];
  const [toggle, setToggle] = useState(false);

  return (
    <div className="py-16 px-12">
      <div className="flex justify-between items-end gap-3 rounded-2xl  border-gray-200 py-1 px-2">
        <div className="flex justify-center items-center w-7/12 gap-x-4 ">
          <div
            onClick={() => setFilterData("All")}
            className={`shadow-lg ${
              filterData === "All" ? "border-2 border-primary" : ""
            } px-3 w-full py-2 cursor-pointer rounded-lg`}
          >
            <p className="text-sm">All Query</p> {tableDatas?.length}
          </div>
          <div
            onClick={() => setFilterData("sent")}
            className={`shadow-lg ${
              filterData === "sent" ? "border-2 border-primary" : ""
            } px-3 w-full py-2 cursor-pointer rounded-lg`}
          >
            <p className="text-sm">Sent Queries</p> f
          </div>
          <div
            onClick={() => setFilterData("pending")}
            className={`shadow-lg ${
              filterData === "pending" ? "border-2 border-primary" : ""
            } px-3 w-full py-2 cursor-pointer rounded-lg`}
          >
            <p className="text-sm">Pending Queries</p> f
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
          {/* <select className="border p-2 select-bordered w-xs">
            <option disabled selected>
              Status
            </option>
            <option>Processing</option>
            <option>Telly Calling </option>
            <option>Sales Team </option>
            <option>Site Visit </option>
            <option>Booking </option>
            <option>Closed </option>
          </select> */}
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
                <th>Response</th>
                <th>Action</th>
              </tr>
            </thead>
            {tableDatas?.filter((item) =>
                filterData === "All"
                  ? item
                  : item.status === filterData
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
                    {"#Q" +
                      (((currentPage < 2 && "00") ||
                        (currentPage > 1 && "0") ||
                        (currentPage > 10 && "0") ||
                        (currentPage > 20 && "0")) +
                        (currentPage - 1) +
                        index)}
                  </td>
                  <td>
                    {table?.firstName} {table?.lastName}
                  </td>
                  <td>{table?.email}</td>
                  <td>{table?.contact}</td>

                  <td>
                    {" "}
                    <button
                      className={`bg-[#4EC615] ${
                        table?.adminapproved === false ? "bg-[#FFD700]" : ""
                      } p-1 px-2 rounded-lg text-[#000000]`}
                    >
                      {table.adminapproved === true ? "Approved" : "Pending"}
                    </button>{" "}
                  </td>

                  <td className="">
                    <div className="flex justify-center items-center">
                      <button className="cursor-pointer w-full">
                        <label
                          onClick={() => navigate(`queryadd/${table._id}`)}
                          htmlFor="my-modal-3"
                          className="cursor-pointer"
                        >
                          <img src={pencil} alt="" />
                        </label>
                      </button>

                      <button
                        onClick={() => navigate(`queryview/${table._id}`)}
                        className=" w-full"
                      >
                        <img className="w-full" src={eyeSmall} alt="" />
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

export default QueryManage;
