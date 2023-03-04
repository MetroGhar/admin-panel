import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetQueryDataByIdQuery } from "../../feature/api/apiEndPoint/getQueryData";

const QueryView = () => {
  const [colorSet] = useState("pending");
  const { queryview } = useParams();
  const { isLoading, data } = useGetQueryDataByIdQuery({
    querysent: queryview,
  });
  return (
    <div className="px-6 py-12">
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
          <div className="flex justify-between items-center rounded-xl border-2 border-gray-200">
            <div className="flex gap-x-2 pl-4">
              <h2>Query 1</h2>
            </div>
            <div className="cursor-pointer flex justify-center items-center">
              <div
                className={`clip-paths w-28 rounded-r-xl ${
                  colorSet === "pending" && "bg-[#FFC727]"
                }`}
              ></div>

              <p className="absolute ml-6 font-medium">
                {colorSet === "pending" && "Pending"}
              </p>
            </div>
          </div>

          <div className="border py-10 mt-6 rounded-md px-6">
            <div className="flex w-8/12  justify-between items-center ">
              <div className="flex flex-col gap-6">
                <p className="text-[#5A5A5A] font-normal">
                  First name :{" "}
                  <span className="text-black  font-medium">
                    {data?.data?.firstName}
                  </span>
                </p>
                <p className="text-[#5A5A5A] font-normal">
                  Email id :{" "}
                  <span className="text-black  font-medium">
                    {data?.data?.email}
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-[#5A5A5A] font-normal">
                  Last name :{" "}
                  <span className="text-black  font-medium">
                    {data?.data?.lastName}
                  </span>
                </p>
                <p className="text-[#5A5A5A] font-normal">
                  Phone Number :{" "}
                  <span className="text-black  font-medium">
                    {data?.data?.contact}
                  </span>
                </p>
              </div>
            </div>

            <h2 className="mt-6 text-[#5A5A5A] font-normal">Message</h2>
            <p className="border p-6 mt-2 text-black">{data?.data?.message}</p>
          </div>

          <p className="bg-[#EDEDED] py-2 flex justify-start px-4 mt-6 rounded-md items-center mx-auto">
            Sent Response
          </p>
        </>
      )}
    </div>
  );
};

export default QueryView;
