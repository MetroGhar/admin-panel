import React from "react";
import icon from "../../Assest/icons8-ellipsis-100 (1) 1.png";
import send from "../../Assest/Send.png";
import camera from "../../Assest/Subtract.png";

import "../Style/Style.css";

const Chat = () => {
  return (
    <div className="grid grid-cols-3 py-24 px-14">
      <div className="border rounded-l-lg px-8 pb-16">
        <h2 className="py-12 ">Chats</h2>

        <div className="div">
          <input
            placeholder="Search..."
            type="text"
            className="border-b-2 border-gray-300 w-full"
            name=""
            id=""
          />

          <div className="mt-16">
            <div className="flex justify-between items-center gap-x-2">
              <div className="flex justify-center items-center">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div className="pl-4">
                  <h3 className="text-sm">Elegance Homes</h3>
                  <p className="text-xs">
                    Sure, we will let you know about this{" "}
                  </p>
                </div>
              </div>
              <p className="rounded-full w-2 h-2 text-white text-xl mx-auto bg-blue-400 p-4 flex justify-center items-center">
                1
              </p>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between items-center gap-x-2 mt-4">
              <div className="flex justify-center items-center">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div className="pl-4">
                  <h3 className="text-sm">Elegance Homes</h3>
                  <p className="text-xs">
                    Sure, we will let you know about this{" "}
                  </p>
                </div>
              </div>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between items-center gap-x-2 mt-4">
              <div className="flex justify-center items-center">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div className="pl-4">
                  <h3 className="text-sm">Elegance Homes</h3>
                  <p className="text-xs">
                    Sure, we will let you know about this{" "}
                  </p>
                </div>
              </div>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between items-center gap-x-2 mt-4">
              <div className="flex justify-center items-center">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div className="pl-4">
                  <h3 className="text-sm">Elegance Homes</h3>
                  <p className="text-xs">
                    Sure, we will let you know about this{" "}
                  </p>
                </div>
              </div>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between items-center gap-x-2 mt-4">
              <div className="flex justify-center items-center">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div className="pl-4">
                  <h3 className="text-sm">Elegance Homes</h3>
                  <p className="text-xs">
                    Sure, we will let you know about this{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 border rounded-r-lg">
        <div className="flex justify-between items-center pt-8 px-8 py-4">
          <div className="flex justify-center items-center">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <div className="pl-4">
              <h3 className="text-sm">Elegance Homes</h3>
            </div>
          </div>
          <p className="rounded-full">
            <img src={icon} alt="" />
          </p>
        </div>
        <hr />

        <div className="div">
          <div className="div">
            <p className="text-center mt-6">Today</p>
          </div>

          <div className="px-4 mt-12">
            <div className="flex justify-end">
              <p className="text-sm bg-sky-300/70 chat">Hi, How are you ?</p>
            </div>
            <div className="flex justify-start mt-6">
              <p className="text-sm bg-gray-300/70 chatTwo">
                I’m doing good. What are you doing ?
              </p>
            </div>

            <div className="flex justify-end mt-6">
              <p className="text-sm bg-sky-300/70 chat">
                I’m working on my app design.
              </p>
            </div>

            <div className="flex justify-start mt-6">
              <p className="text-sm bg-gray-300/70 chatTwo">
                That sounds great!
              </p>
            </div>

            <div className="form-control top-32 relative">
              <button
                className="btn bg-white border-none hover:bg-white absolute top-0 left-2
           rounded-l-none "
              >
                <img className="w-4 h-4 z-30" src={camera} alt="" />
              </button>
              <input
                type="text"
                placeholder="Search here...."
                className="input input-bordered pl-16 w-full bg-gray-100 h-11 z-20"
              />

              <button
                className="btn bg-white border-none hover:bg-white absolute top-0 right-2
           rounded-l-none "
              >
                <img className="w-4 h-4 z-30" src={send} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
