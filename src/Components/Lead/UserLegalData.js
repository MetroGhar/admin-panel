import React from "react";
import checkBox from "../../Assest/tracking/Ellipse 4.png";

const UserLegalData = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-userLegal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-0 rounded-none">
          <div className="flex justify-center p-4 items-center bg-[#E2FAFF]">
            <label
              htmlFor="my-modal-userLegal"
              className="btn btn-sm btn-rounded absolute right-2 "
            >
              ✕
            </label>
            <h3 className=" text-xl leading-6 font-semibold">
              Request for a call back
            </h3>
          </div>
          <form className="px-12 py-4 mt-6">
            <input
              className=" placeholder:text-[#767676] block w-full border-b-2 border-[#CFCFCF] py-2 pr-3 px-2 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-lg"
              type="text"
              name=""
              placeholder="Name"
              id=""
            />
            <input
              className=" placeholder:text-[#767676] block w-full border-b-2 border-[#CFCFCF] py-2 pr-3 px-2 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-lg mt-4"
              type="text"
              name=""
              placeholder="Email Address"
              id=""
            />
            <input
              className=" placeholder:text-[#767676] block w-full border-b-2 border-[#CFCFCF] py-2 pr-3 px-2 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-lg mt-4"
              type="text"
              name=""
              placeholder="+91"
              id=""
            />
            <input
              className=" placeholder:text-[#767676] block w-full border-b-2 border-[#CFCFCF] py-2 pr-3 px-2 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-lg mt-4"
              type="text"
              name=""
              placeholder="Message"
              id=""
            />

            <div className="mt-8 flex justify-between items-center">
              <label className="flex justify-center items-center gap-x-4">
                <img src={checkBox} alt="" />
                <span className="label-text text-[#767676]">
                  I’m intrested in Site Visit
                </span>
              </label>
              <label className="flex justify-center items-center gap-x-4">
                <img src={checkBox} alt="" />
                <span className="label-text text-[#767676]">
                  I’m intrested in Home Loan
                </span>
              </label>
            </div>
            <label className="flex justify-center items-center gap-x-4 mt-4">
              <img src={checkBox} alt="" />
              <span className="label-text text-[#767676]">
                I agree to be contacted by Metro Gahr and other agents via
                WhatsApp, SMS, phone, email, etc
              </span>
            </label>
            <div className="flex justify-center mt-6">
              <label
                htmlFor="my-modal-6"
                className="btn bg-[#1E90A5] text-white px-12"
              >
                Submit
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLegalData;
