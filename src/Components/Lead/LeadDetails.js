import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import flat from "../../Assest/flats_5245615_835x547-m 3.png";
import select from "../../Assest/leadDetails/vvb.png";
import hCircle from "../../Assest/tracking/download__14_-removebg-preview 1.png";
import fillCircle from "../../Assest/tracking/Ellipse 4.png";
import fillLine from "../../Assest/tracking/Line 93.png";
import { useGetLeadDataByIdQuery } from "../../feature/api/apiEndPoint/getLeadData";
import "../Style/Style.css";
import LegalModal from "./LegalModal";
import UserLegalData from "./UserLegalData";

const LeadDetails = () => {
  const { addlead } = useParams();
  // redux
  const { isLoading, isError, error, data } = useGetLeadDataByIdQuery({
    addlead,
  });
  // local state
  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState("");
  const [allTitle, setAllTitle] = useState([]);
  const [allStatus, setAllStatus] = useState(["processing"]);

  const [colorSet, setColor] = useState(data?.lead?.status);

  useEffect(() => {
    setColor(data?.lead?.status);
  }, [data]);
  const handleAllStatus = (name) => {
    if (allStatus.length <= 5) {
      setAllStatus([...allStatus, name]);
    }
    setColor(name);
    axios
      .put(`http://13.127.219.251/api/v1/admin/lead/${addlead}`, {
        status: name,
      })
      .then((res) => console.log(res?.data));
  };

  // 'Processing','Telly Calling',"Sales Team","Site Visit","Booking","Closed"

  const handleTitle = (e) =>
    setTitle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const handleSaveTitle = () => {
    setAllTitle([...allTitle, title]);
  };
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDay();
  // const month = date.getMonth();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  const month = monthNames[d.getMonth()];

  const getTimeAMPMFormat = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? "0" + hours : hours;
    // appending zero in the start if hours less than 10
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
  };
  const hours = getTimeAMPMFormat(new Date());
  return (
    <div className="py-16 px-12">
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
        <>
          <div className="flex justify-between items-center rounded-2xl border-2 border-gray-200">
            <div className="flex gap-x-2 pl-4">
              <h2>Lead {addlead}</h2>
            </div>
            <div className="cursor-pointer flex justify-center items-center">
              <div
                className={`clip-paths w-40 rounded-r-xl ${
                  (colorSet === "processing" && "bg-[#FDA97DEB]") ||
                  (colorSet === "TellyCalling" && "bg-[#71A9FC]") ||
                  (colorSet === "SalesTeam" && "bg-[#C68A15]") ||
                  (colorSet === "SiteVisit" && "bg-[#FAE52C]") ||
                  (colorSet === "Booking" && "bg-[#F96AA6]") ||
                  (colorSet === "Closed" && "bg-[#4EC615]")
                }`}
              ></div>

              <p className="absolute font-medium ml-10">
                {" "}
                {(colorSet === "processing" && "Processing") ||
                  (colorSet === "TellyCalling" && "Telly Calling ") ||
                  (colorSet === "SalesTeam" && "Sales Team") ||
                  (colorSet === "SiteVisit" && "Site Visit") ||
                  (colorSet === "Booking" && "Booking") ||
                  (colorSet === "Closed" && "Closed")}{" "}
              </p>
            </div>
          </div>

          <div className="mt-10 bg-[#F8F4F43D] p-6 border border-gray-200">
            <div className="flex justify-between w-full items-center">
              <p className="w-full">
                Lead Arrival Date : {day} {month} {year} | {hours}
              </p>

              <div className="flex w-full justify-end gap-x-2 items-center">
                <p>Bulk Action</p>

                <div className="flex relative  items-center flex-col gap-2 ">
                  <button
                    onClick={() => setToggle(!toggle)}
                    className="border py-1 w-full px-4"
                  >
                    {colorSet || "Processing"}
                  </button>
                  {toggle ? (
                    <div className=" flex flex-col gap-0 mt-9 bg-gray-200 p-1 absolute">
                      {" "}
                      <button
                        className="bg-white w-full justify-center flex gap-x-2 px-2 hover:text-primary"
                        // onClick={() => setTellyCalling(!tellyCalling)}
                        onClick={() => handleAllStatus("TellyCalling")}
                      >
                        <span>Telly</span> Calling
                      </button>
                      <button
                        className="bg-white w-full justify-center flex gap-x-2 hover:text-yellow-700 mt-1"
                        // onClick={() => setSiteVisit(!siteVisit)}
                        onClick={() => handleAllStatus("SiteVisit")}
                      >
                        <span>Site</span>Visit
                      </button>
                      <button
                        className="bg-white w-full flex justify-center gap-x-2 hover:text-yellow-700 mt-1"
                        // onClick={() => handleCancel()}
                        onClick={() => handleAllStatus("SalesTeam")}
                      >
                        <span>Sales</span>Team
                      </button>
                      <button
                        className="bg-white hover:text-yellow-700 mt-1"
                        // onClick={() => handleCancel()}
                        onClick={() => handleAllStatus("Booking")}
                      >
                        Booking
                      </button>
                      <button
                        className="bg-white hover:text-yellow-700 mt-1"
                        // onClick={() => handleCancel()}
                        onClick={() => handleAllStatus("Closed")}
                      >
                        Closed
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-x-12 mt-12">
              <div className="w-full bg-white border border-gray-100">
                <h2 className="text-xl text-center py-2"> Client Detail</h2>
                <hr />

                <div className="p-6 mt-4 flex flex-col gap-2">
                  <p>
                    <span className="text-sm font-medium pr-2"> Name :</span>{" "}
                    {data?.lead?.name}
                  </p>
                  <p>
                    <span className="text-sm font-medium pr-2">
                      {" "}
                      Mobile No. :{" "}
                    </span>{" "}
                    {data?.lead?.email}
                  </p>
                  <p>
                    <span className="text-sm font-medium pr-2"> Message :</span>
                    {data?.lead?.message}
                  </p>

                  <div className="flex justify-between items-center mt-8">
                    <div className="flex justify-start items-center gap-x-2">
                      <div className="product">
                        <div
                          className={`productInput ${
                            data?.lead?.siteVisit && "active"
                          }`}
                        >
                          <input type="checkbox" id={data?.lead?.siteVisit} />
                          {data?.lead?.siteVisit !== 0 && (
                            <>
                              <div className="productInputBefore"></div>
                              <div className="productInputAfter">
                                <img src={select} alt="" />
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <p className="text-sm">I’m intrested in Site Visit</p>
                    </div>

                    <div className="flex justify-start items-center gap-x-2">
                      <div className="product">
                        <div
                          className={`productInput ${
                            data?.lead?.homeLoan && "active"
                          }`}
                        >
                          <input type="checkbox" id={data?.lead?.homeLoan} />
                          {data?.lead?.homeLoan !== 0 && (
                            <>
                              <div className="productInputBefore"></div>
                              <div className="productInputAfter">
                                <img src={select} alt="" />
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <p className="text-sm">I’m intrested in Home Loan </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-white border border-gray-100">
                <h2 className="text-xl text-center py-2">Project Detail</h2>
                <hr />

                <div className="p-6">
                  <div className="flex justify-start gap-x-3 items-center">
                    <div className="w-2/4 ">
                      <img src={flat} className="img-fluid h-[102px]" alt="" />
                    </div>
                    <div className="w-full">
                      <h2 className="text-sm font-medium">
                        {data?.lead?.projectId?.buildername}
                      </h2>
                      <p className="text-xs font-medium">
                        Sold By : {data?.lead?.projectId?.buildername}
                      </p>
                      <p className="text-xs mt-2">
                        {" "}
                        {data?.lead?.projectId?.projectlocation}
                      </p>
                      <p className="text-sm mt-2 font-semibold">
                        ₹ {data?.lead?.projectId?.projectminprice} -{" "}
                        {data?.lead?.projectId?.projectmaxprice}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4 text-center">
                    <div className="div">
                      <p className="text-xs font-medium mb-1">
                        Possession Status
                      </p>
                      <p className="text-xs">
                        {data?.lead?.projectId?.projectpossessionstatus}
                      </p>
                    </div>
                    <div className="div">
                      <p className="text-xs font-medium mb-1">
                        Possession Status
                      </p>
                      <p className="text-xs">Ready To Move</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4 ">
                    <div className="div">
                      <p className="text-xs font-medium mb-1">
                        {" "}
                        {data?.lead?.projectId?.projecttype}
                      </p>
                      <p className="text-xs">
                        {" "}
                        {data?.lead?.projectId?.projectminspace} -{" "}
                        {data?.lead?.projectId?.projectmaxspace} sq.ft.
                      </p>
                    </div>
                    <div className="div">
                      <p className="text-xs font-medium mb-1">
                        {" "}
                        Configurations
                      </p>
                      <p className="text-xs">
                        {data?.lead?.projectId?.projectconfiguration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mt-10 bg-white border border-gray-100 pb-14">
              <h2 className="text-xl text-center py-2 font-medium">
                {" "}
                Tracking Management{" "}
              </h2>
              <hr />

              {/* vertical step */}

              <div className="flex justify-start items-center mt-12 ml-12 lg:ml-16 xl:ml-32 mx-auto">
                <div className="flex justify-start items-center relative ">
                  <div className="flex justify-start items-center">
                    <div className=" rounded-full bg-[#FDA97DEB] border-[#C4C4C4] w-10 h-10"></div>
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="w-24 h-1 bg-[#C4C4C4]"></div>
                    <div className=" rounded-full border-2 border-[#C4C4C4] w-10 h-10"></div>
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="w-24 h-1 bg-[#C4C4C4]"></div>
                    <div className=" rounded-full border-2 border-[#C4C4C4] w-10 h-10"></div>
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="w-24 h-1 bg-[#C4C4C4]"></div>
                    <div className=" rounded-full border-2 border-[#C4C4C4] w-10 h-10"></div>
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="w-24 h-1 bg-[#C4C4C4]"></div>
                    <div className=" rounded-full border-2 border-[#C4C4C4] w-10 h-10"></div>
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="w-24 h-1 bg-[#C4C4C4]"></div>
                    <div className=" rounded-full border-2 border-[#C4C4C4] w-10 h-10"></div>
                  </div>
                </div>
                <div className="absolute flex justify-start items-center">
                  {allStatus.map((status) => (
                    <>
                      <div
                        className={` rounded-full  ${
                          (status === "processing" && "bg-[#FDA97DEB]") ||
                          (status === "TellyCalling" && "bg-[#71A9FC]") ||
                          (status === "SalesTeam" && "bg-[#C68A15]") ||
                          (status === "SiteVisit" && "bg-[#FAE52C]") ||
                          (status === "Booking" && "bg-[#F96AA6]") ||
                          (status === "Closed" && "bg-[#4EC615]")
                        } bg-primary border-[#C4C4C4] w-10 h-10`}
                      >
                        {" "}
                        <p className="mt-10 text-sm justify-center items-center flex text-center">
                          {(status === "processing" && "Processing") ||
                            (status === "TellyCalling" && "Telly Calling ") ||
                            (status === "SalesTeam" && "Sales Team") ||
                            (status === "SiteVisit" && "Site Visit") ||
                            (status === "Booking" && "Booking") ||
                            (status === "Closed" && "Closed")}
                        </p>{" "}
                      </div>

                      <div
                        className={`w-24 h-1   ${
                          (status === "processing" && "bg-[#FDA97DEB]") ||
                          (status === "TellyCalling" && "bg-[#71A9FC]") ||
                          (status === "SalesTeam" && "bg-[#C68A15]") ||
                          (status === "SiteVisit" && "bg-[#FAE52C]") ||
                          (status === "Booking" && "bg-[#F96AA6]")
                        }`}
                      ></div>
                    </>
                  ))}
                </div>

                {/* <div className=" rounded-full bg-primary border-[#C4C4C4] w-10 h-10"></div>
            <div className="w-24 h-1 bg-[#C4C4C4]"></div>
            <div
              className={`${
                tellyCalling ? "bg-primary" : ""
              } rounded-full border-2 border-[#C4C4C4] w-10 h-10`}
            ></div>
            <div className="w-24 h-1 bg-[#C4C4C4]"></div> */}
                {/* <div
              className={`${
                siteVisit ? "bg-primary" : ""
              } rounded-full border-2 border-[#C4C4C4] w-10 h-10`}
            ></div>
            <div className="w-24 h-1 bg-[#C4C4C4]"></div> */}
              </div>
              {/* <div className="flex justify-center mx-auto mt-12">
            <div className="flex">
              <div className="flex flex-col ">
                <div className="flex justify-start items-center">
                  <img src={pCircle} alt="" />
                  <img src={pLine} alt="" />
                </div>
                <p>Processing</p>
              </div>
              <div className="flex flex-col ">
                <div className="flex justify-start items-center">
                  {tellyCalling ? (
                    <>
                      {" "}
                      <img src={tCircle} alt="" />
                      <img src={tLine} alt="" />
                    </>
                  ) : (
                    <>
                      {" "}
                      <img src={circle} alt="" />
                      <img src={line} alt="" />
                    </>
                  )}
                </div>
                {tellyCalling ? <p>Telly Calling </p> : ""}
              </div>
              <div className="flex flex-col ">
                <div className="flex justify-start items-center">
                  {siteVisit ? (
                    <>
                      {" "}
                      <img src={sCircle} alt="" />
                      <img src={line} alt="" />
                    </>
                  ) : (
                    <>
                      <img src={circle} alt="" />
                      <img src={line} alt="" />
                    </>
                  )}
                </div>
                {siteVisit && <p>Site Visit </p>}
              </div>
              <div className="flex flex-col ">
                <div className="flex justify-start items-center">
                  <img src={circle} alt="" />
                  <img src={line} alt="" />
                </div>
                <p> </p>
              </div>
              <div className="flex flex-col ">
                <div className="flex justify-start items-center">
                  <img src={circle} alt="" />
                  <img src={line} alt="" />
                </div>
                <p> </p>
              </div>
              <div className="flex flex-col ">
                <div className="flex justify-start items-center">
                  <img src={circle} alt="" />
                </div>
                <p> </p>
              </div>
            </div>
          </div> */}
              {/* horizontal step */}

              <div className="mt-24 px-12">
                {/* horizontal */}
                <div className="flex flex-col">
                  <div className="flex gap-x-2 justify-start items-start">
                    <div className="flex flex-col gap-1 items-center">
                      <label
                        htmlFor="my-modal-legal"
                        className="relative justify-center mx-auto flex items-center cursor-pointer"
                      >
                        <img className="absolute" src={hCircle} alt="" />
                        <img className="" src={fillCircle} alt="" />
                      </label>

                      {/* <img src={fillLine} alt="" />
                  <img src={fillLine} alt="" />
                  <img src={fillLine} alt="" />
                  <img src={fillLine} alt="" /> */}
                    </div>
                    <p className="mt-2">Add new Status</p>
                  </div>
                  {/* <div className="flex justify-between">
                <div className="flex gap-x-2 justify-start items-start">
                  <div className="flex flex-col gap-1 items-center">
                    <img src={sCircle} alt="" />

                    <img src={fillLine} alt="" />
                    <img src={fillLine} alt="" />
                    <img src={fillLine} alt="" />
                    <img src={fillLine} alt="" />
                  </div>
                  <p>Site Visit</p>
                </div>
                <div className="div">
                  <p className="flex flex-col justify-center text-xs items-center">
                    <span>added on 2 June 2022 at 03:30 pm</span>{" "}
                    <span>By Ganesh</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-x-2 justify-start items-start">
                  <div className="flex flex-col gap-1 items-center">
                    <img src={fillCircle} alt="" />

                    <img src={fillLine} alt="" />
                    <img src={fillLine} alt="" />
                    <img src={fillLine} alt="" />
                    <img src={fillLine} alt="" />
                  </div>
                  <p className="flex flex-col text-xs">
                    <span>Follow Up</span>
                    <span>
                      Picked phone and discuss all stuff he is telling sunday we
                      will do site visit{" "}
                    </span>
                  </p>
                </div>
                <div className="div">
                  <p className="flex flex-col justify-center text-xs items-center">
                    <span>added on 2 June 2022 at 03:30 pm</span>{" "}
                    <span>By Ganesh</span>
                  </p>
                </div>
              </div> */}

                  {allTitle.map((t, index) => (
                    <div key={index} className="flex justify-between">
                      <div className="flex gap-x-2 justify-end items-end">
                        <div className="flex flex-col gap-1 items-center">
                          <img src={fillLine} alt="" />
                          <img src={fillLine} alt="" />
                          <img src={fillLine} alt="" />
                          <img src={fillLine} alt="" />
                          <img src={fillCircle} alt="" />
                        </div>
                        <p className="flex flex-col text-xs">
                          <span>{t.title}</span>
                          <span>{t.comment}</span>
                        </p>
                      </div>
                      <div className="flex justify-start items-start">
                        <p className="flex flex-col justify-center text-xs items-center">
                          <span>added on 2 June 2022 at 03:30 pm</span>{" "}
                          <span>By Ganesh</span>
                        </p>
                      </div>
                    </div>
                  ))}

                  {allStatus.map((status) => (
                    <div className="flex gap-x-2 justify-start items-start">
                      <div className="flex flex-col gap-1 items-center">
                        {/* <img src={fillCircle} alt="" /> */}
                        <img src={fillLine} alt="" />
                        <img src={fillLine} alt="" />
                        <img src={fillLine} alt="" />
                        <img src={fillLine} alt="" />
                        <div
                          className={` rounded-full  ${
                            (status === "processing" && "bg-[#FDA97DEB]") ||
                            (status === "TellyCalling" && "bg-[#71A9FC]") ||
                            (status === "SalesTeam" && "bg-[#C68A15]") ||
                            (status === "SiteVisit" && "bg-[#FAE52C]") ||
                            (status === "Booking" && "bg-[#F96AA6]") ||
                            (status === "Closed" && "bg-[#4EC615]")
                          } bg-primary border-[#C4C4C4] w-10 h-10`}
                        >
                          <span className=" flex justify-between items-start ml-12 mt-2">
                            {(status === "processing" && "Processing") ||
                              (status === "TellyCalling" && "Telly Calling ") ||
                              (status === "SalesTeam" && "Sales Team") ||
                              (status === "SiteVisit" && "Site Visit") ||
                              (status === "Booking" && "Booking") ||
                              (status === "Closed" && "Closed")}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* <div className="flex justify-between">
                <div className="flex gap-x-2 justify-start items-center">
                  <img src={tCircle} alt="" />
                  <p>Telly Calling </p>
                </div>
                <div className="div">
                  <p className="flex flex-col justify-center text-xs items-center">
                    <span>added on 2 June 2022 at 03:30 pm</span>{" "}
                    <span>By Ganesh</span>
                  </p>
                </div>
              </div> */}
                </div>

                {/* indic */}
              </div>
            </div>
            <LegalModal
              handleSaveTitle={handleSaveTitle}
              handleTitle={handleTitle}
            />
            <UserLegalData />
          </div>
        </>
      )}
    </div>
  );
};

export default LeadDetails;
