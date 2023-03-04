import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useGetQueryDataByIdQuery,
  useGetQueryPostDataMutation,
} from "../../feature/api/apiEndPoint/getQueryData";

const QuerySent = () => {
  const { querysent } = useParams();
  // redux state
  const { isLoading, data } = useGetQueryDataByIdQuery({ querysent });
  const [postQuery] = useGetQueryPostDataMutation();
  // local state

  const [colorSet] = useState("pending");

  const [messageBody, setMessageBody] = useState();
  const handleMessage = (e) => {
    setMessageBody((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSentMessage = async (e) => {
    e.preventDefault();
    const result = await postQuery({ messageBody });
    if (result?.data?.status) {
      setMessageBody("");
      toast.success("Your query data successfully submit", {
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
    <div className="px-6 py-12">
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

      <div className="border px-12 rounded-md mt-6 py-6">
        <from onSubmit={handleSentMessage} className=" ">
          <h2 className="text-[16px] text-black">To</h2>
          <input
            onChange={handleMessage}
            name="to"
            type="text"
            placeholder="Joshep example@gmail.com"
            className="input input-bordered w-full"
          />

          <h2 className="mt-6">Subject </h2>
          <input
            onChange={handleMessage}
            name="subject"
            type="text"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero"
            className="input input-bordered w-full"
          />

          <h2 className="mt-6 text-black">Message</h2>
          <textarea
            onChange={handleMessage}
            name="message"
            className="textarea textarea-bordered w-full mt-1"
            placeholder="Bio"
          ></textarea>

          <input
            onClick={handleSentMessage}
            type="submit"
            value="Sent"
            className="bg-primary px-6 py-1 rounded-lg text-white flex mx-auto mt-6"
          />
        </from>
      </div>
    </div>
  );
};

export default QuerySent;
