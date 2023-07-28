import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CareerModal from "./CareerModal";

const CareerView = () => {
  const [colorSet] = useState("active");
  const [showCareer, setShowCareer] = useState(false);
  const { careerview } = useParams();
  const [careerData, setCareerData] = useState([]);
  const [careerResponse, setCareerResponse] = useState([]);

  useEffect(() => {
    axios
      .get(`http://13.127.219.251/backend/backend/api/v1/admin/job/${careerview}`)
      .then((res) => setCareerData(res?.data?.data));
  }, []);
  useEffect(() => {
    axios
      .get(`http://13.127.219.251/backend/backend/api/v1/admin/application/list`)
      .then((res) => {
        const idVerify = res?.data?.appliedJob;

        const verifyData = idVerify?.filter(
          (idv) => idv?.jobId?._id === careerview
        );
        setCareerResponse(verifyData);
      });
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center rounded-xl border-2 border-gray-200">
        <div className="flex gap-x-2 pl-4">
          <h2>Career ID 2 </h2>
        </div>
        <div className="cursor-pointer flex justify-center items-center">
          <div
            className={`clip-paths w-28 rounded-r-xl ${
              colorSet === "active" && "bg-[#4EC615]"
            }`}
          ></div>

          <p className="absolute font-medium ml-6">
            {colorSet === "active" && "Active"}
          </p>
        </div>
      </div>
      <div className="border p-6 mt-6 rounded-lg bg-[#FDFDFD]">
        <h2 className="text-xl ">{careerData?.jobTitle}</h2>
        <div className="flex justify-start items-center gap-x-3 text-xs mt-2">
          <p>{careerData?.location}</p>
          <p>{careerData?.experience}</p>
          <p>{careerData?.workType}</p>
        </div>

        <div className="flex justify-start items-center gap-x-8 mt-4">
          <div className="flex flex-col gap-1">
            <p className="text-[15px] text-black">Start Date</p>
            <p className="text-[16px] text-[#6B6B6B]">{careerData?.workType}</p>
          </div>
          <div className="div">
            <p className="text-[15px] text-black">Compensation</p>
            <p className="text-[16px] text-[#6B6B6B]">
              {careerData?.compensation}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-lg text-black">Key Resposibilities</p>
          <p className="text-sm mt-2 text-[#6B6B6B]">
            {careerData?.skillRequirement}
          </p>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg text-black">Skills Required</h2>
            <p className="text-sm text-[#6B6B6B]">Figma proficiency</p>
            <p className="text-sm text-[#6B6B6B]">HTML , CSS</p>
            <p className="text-sm text-[#6B6B6B]">Figma proficiency</p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg text-black">Other Required</h2>
            <p className="text-sm text-[#6B6B6B]">HTML , CSS</p>
            <p className="text-sm text-[#6B6B6B]">Figma proficiency</p>
            <p className="text-sm text-[#6B6B6B]">Figma proficiency</p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-lg text-black">Additional Information</p>
          <p className="text-sm mt-2  text-[#6B6B6B]">
            {careerData?.additionalInfo}
          </p>
        </div>
      </div>

      {careerResponse?.length > 0 && (
        <>
          <p className="py-2 w-48 mt-8 rounded-lg flex justify-center mx-auto  bg-[#E6ECFF]">
            Recieve Response
          </p>

          <div className="overflow-x-auto mt-8">
            <table className="table w-full bg-[#EDEDED6E]">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              {careerResponse?.map((carRes, index) => (
                <tbody key={index}>
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      {carRes?.firstName} {carRes?.lastName}
                    </td>
                    <td>{carRes?.email}</td>
                    <td>{carRes?.phone}</td>
                    <td>{carRes?.createdAt?.slice(0, 15)}</td>
                    <td>Rejected</td>
                    <td>
                      <button
                        onClick={() => setShowCareer(true)}
                        className="px-4 py-1 bg-primary text-white rounded-md cursor-pointer"
                      >
                        View
                      </button>
                      <CareerModal
                        careerId={carRes?._id}
                        onClose={() => setShowCareer(false)}
                        showCareer={showCareer}
                      >
                        <p>This is modal body</p>
                      </CareerModal>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default CareerView;
