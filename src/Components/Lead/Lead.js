import { Pagination } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import eyeSmall from "../../Assest/download__13_-removebg-preview 6.png";
import pencil from "../../Assest/icons8-pencil-96 1.png";
import deleted from "../../Assest/icons8-remove-96 1.png";
import exlogo from "../../Assest/property/Vector (4).png";
import "../Style/Style.css";

const Lead = () => {
  const [allData, setAllData] = useState([]);

  const [tableDatas, setTableDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [process, setProcess] = useState(0);
  const [tellyCall, setTellyCall] = useState(0);
  const [siteVisi, setSiteVisi] = useState(0);
  const [salesTeam, setsalesTeam] = useState(0);
  const [booking, setBooking] = useState(0);
  const [close, setClose] = useState(0);
  const [cancel, setCancel] = useState(0);
  const navigate = useNavigate();
  const [filterData, setFilterData] = useState("All");
  console.log(tableDatas);
  useEffect(() => {
    setLoading(true);
    axios.get(`http://52.66.198.155/api/v1/admin/leads`).then((res) => {
      setTableDatas(res.data?.Leads);
      setProcess(
        res.data?.Leads?.filter((itm) => itm?.status === "Processing")
      );
      setTellyCall(
        res.data?.Leads?.filter((itm) => itm?.status === "TellyCalling")
      );
      setSiteVisi(
        res.data?.Leads?.filter((itm) => itm?.status === "SiteVisit")
      );
      setsalesTeam(
        res.data?.Leads?.filter((itm) => itm?.status === "SalesTeam")
      );
      setBooking(res.data?.Leads?.filter((itm) => itm?.status === "Booking"));
      setClose(res.data?.Leads?.filter((itm) => itm?.status === "Closed"));
      setCancel(res.data?.Leads?.filter((itm) => itm?.status === "cancel"));

      setLoading(false);
    });
  }, [dataPerPage, currentPage]);

  const [length, setLength] = useState();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://52.66.198.155/api/v1/admin/leads`).then((res) => {
      setLength(res.data?.Leads);

      setLoading(false);
    });
  }, []);
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
            <p className="text-sm">All</p> {tableDatas?.length}
          </div>
          <div
            onClick={() => setFilterData("Processing")}
            className={`shadow-lg ${
              filterData === "Processing" ? "border-2 border-primary" : ""
            } px-3 w-full py-2 cursor-pointer rounded-lg`}
          >
            <p className="text-sm">Processing</p> {process?.length}
          </div>
          <div
            onClick={() => setFilterData("TellyCalling")}
            className={`shadow-lg ${
              filterData === "TellyCalling" ? "border-2 border-primary" : ""
            } px-3 w-full py-2 cursor-pointer rounded-lg`}
          >
            <p className="text-sm">Telly Calling</p> {tellyCall?.length}
          </div>
          <div
            onClick={() => setFilterData("SiteVisit")}
            className={`shadow-lg ${
              filterData === "SiteVisit" ? "border-2 border-primary" : ""
            } px-3 w-full py-2 cursor-pointer rounded-lg`}
          >
            <p className="text-sm">Site visit</p> {siteVisi?.length}
          </div>
          <div
            onClick={() => setFilterData("SalesTeam")}
            className={`shadow-lg ${
              filterData === "SalesTeam" ? "border-2 border-primary" : ""
            } px-3 w-full py-2 cursor-pointer rounded-lg`}
          >
            <p className="text-sm">Sales Team</p> {salesTeam?.length}
          </div>
          <div
            onClick={() => setFilterData("Booking")}
            className={`shadow-lg ${
              filterData === "Booking" ? "border-2 border-primary" : ""
            } px-3 w-full py-2 cursor-pointer rounded-lg`}
          >
            <p className="text-sm">Booking</p> {booking?.length}
          </div>
          <div
            onClick={() => setFilterData("Closed")}
            className={`shadow-lg ${
              filterData === "Closed" ? "border-2 border-primary" : ""
            } px-3 w-full py-2 cursor-pointer rounded-lg`}
          >
            <p className="text-sm">Closed</p> {close?.length}
          </div>
          <div
            onClick={() => setFilterData("Cancel")}
            className={`shadow-lg ${
              filterData === "Cancel" ? "border-2 border-primary" : ""
            } px-3 w-full py-2 cursor-pointer rounded-lg`}
          >
            <p className="text-sm">Cancel</p> {cancel?.length}
          </div>
        </div>
        <div className="cursor-pointer flex justify-center items-center">
          {/* <img className=" img-fluid" src={lead} alt="" /> */}
          <div
            // onClick={() => navigate("addlead")}
            className="bulk-button text-sm py-2 px-3 text-white"
          >
            Add Lead
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mt-12  py-4 rounded-none">
        <div className="flex justify-center items-center gap-x-4 mb-8">
          <input
            type="text"
            placeholder="Search"
            className="border p-2 input-bordered w-xl"
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
          {/* <div className="flex justify-start gap-x-2 items-center">
            <p>Bulk Action</p>

            <div className="flex relative  items-center flex-col gap-2">
              <button
                onClick={() => setToggle(!toggle)}
                className="border py-1 px-4"
              >
                Processing
              </button>
              {toggle ? (
                <div className=" flex flex-col gap-0 mt-9 bg-gray-200 p-1 absolute">
                  {" "}
                  <button
                    className="bg-white px-2 hover:text-primary"
                    // onClick={() => handleApproved()}
                  >
                    Telly Calling
                  </button>
                  <button
                    className="bg-white hover:text-yellow-700 mt-1"
                    // onClick={() => handleCancel()}
                  >
                    Sales Team
                  </button>
                  <button
                    className="bg-white hover:text-yellow-700 mt-1"
                    // onClick={() => handleCancel()}
                  >
                    Site Visit
                  </button>
                  <button
                    className="bg-white hover:text-yellow-700 mt-1"
                    // onClick={() => handleCancel()}
                  >
                    Booking
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
                <th>Date</th>
                <th>Status </th>

                <th>Action</th>
              </tr>
            </thead>
            {tableDatas?.filter((item) =>
                filterData === "All"
                  ? item
                  : item.status === filterData
              )?.map((table, index) => (
              <tbody className="w-full hover:bg-[#E7F9FC] cursor-pointer" key={index}>
                <tr className="text-sm h-14 w-full text-center hover border-b-2">
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
                    {"#L" +
                      (((currentPage < 2 && "0000") ||
                        (currentPage > 1 && "000") ||
                        (currentPage > 10 && "00") ||
                        (currentPage > 20 && "0")) +
                        (currentPage - 1) +
                        index)}
                  </td>
                  <td>{table?.name}</td>
                  <td>{table?.email}</td>
                  <td>{table?.contact}</td>
                  <td>{table?.createdAt.slice(0, 10)}</td>

                  <td>
                    <button
                      className={`bg-[#4EC615] ${
                        table?.status === "TellyCalling" && "bg-[#71A9FC]"
                      } ${
                        table?.status === "SiteVisit" && "bg-[#FAE52C]"
                      }
                      
                      ${
                        table?.status === "SalesTeam" && "bg-[#C68A15]"
                      }

                      ${
                        table?.status === "Booking" && "bg-[#F96AA6]"
                      }

                      ${
                        table?.status === "Closed" && "bg-[#4EC615]"
                      }

                      ${
                        table?.status === "Processing" && "bg-[#FDAF87]"
                      }
                      p-1 px-2 text-[11px] rounded-lg text-[#000000]`}
                    >
                      {table.status === "TellyCalling" && "Telly Calling"} {table.status === "SiteVisit" && "Site Visit"} {table.status === "SalesTeam" && "Sales Team"}
                      {table.status === "Booking" && "Booking"}
                      {table.status === "Closed" && "Closed"}
                      {table.status === "Processing" && "Processing"}
                    </button>
                  </td>

                  <td className="">
                    <div className="flex justify-center items-center">
                      <button className="cursor-pointer w-full">
                        <label
                          onClick={() => navigate(`${table?._id}`)}
                          htmlFor="my-modal-3"
                          className="cursor-pointer"
                        >
                          <img src={pencil} alt="" />
                        </label>
                      </button>

                      <button
                        onClick={() => navigate(`${table._id}`)}
                        className=" w-full"
                      >
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

export default Lead;
