import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CustomLink from "../Hook/CustomLink";

import { HiMenuAlt3 } from "react-icons/hi";
import vector from "../../Assest/Group 2339.png";
import advrb from "../../Assest/navbar/Add_square.png";
import career from "../../Assest/navbar/Career Ladder.png";
import proper from "../../Assest/navbar/chart-square.png";
import dash from "../../Assest/navbar/element-2 1.png";
import man from "../../Assest/navbar/frame.png";
import user from "../../Assest/navbar/personalcard.png";
import query from "../../Assest/navbar/Query.png";
import setting from "../../Assest/navbar/setting-2.png";
import lock from "../../Assest/navbar/Unlock.png";
import lead from "../../Assest/navbar/user-square.png";
import "../Style/Style.css";
import TopBar from "./TopBar";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    {
      title: "Dashboard",
      link: "/dashboard",
      src: dash,
    },
    {
      title: "Property",
      link: "property",
      src: proper,
    },
    {
      title: "Lead",
      link: "lead",
      src: lead,
    },
    {
      title: "Permission",
      link: "chat",
      src: lock,
    },
    {
      title: "Users",
      link: "user",
      src: user,
    },
    {
      title: "Query Manage",
      link: "querymanage",
      src: query,
    },
    {
      title: "Career Manage",
      link: "careermanage",
      src:  career,
    },
 

    {
      title: "Advertisement",
      link: "advertisement",
      src: advrb,
    },
    {
      title: "Profile",
      link: "profile",
      src: man,
      gap: true,
    },
    {
      title: "Settings",
      link: "advertisement",
      src: setting,
    },
  ];
  return (
    <>
      <TopBar />
 
      <div className="flex">
       

        <div
          className={`bg-[#399BAD]  min-h-screen ${
            open ? "w-16" : "w-16"
          } duration-500 text-gray-100 relative`}
        >
          <div className={`py-3 px-4 flex justify-end`}>
            {
          <HiMenuAlt3
              size={26}
              className={`cursor-pointer ${open ? "opacity-0" : "opacity-100 translate-x-2 whitespace-pre duration-500 "} `}
              onClick={() => setOpen(!open)}
            />
            }
            
          </div>
          <div className="mt-4 px-2 flex flex-col gap-4 relative">
            {Menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={` ${
                  menu?.gap && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-[#399BAD] hover:text-white rounded-md`}
              >
                <img className="" src={menu?.src} alt="" />
                {/* <div>{React.createElement(menu?.src, { size: "20" })}</div> */}
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {/* {menu?.title} */}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.title}
                </h2>
              </Link>
            ))}
          </div>
          <img
            className="img-fluid w-full absolute bottom-0"
            src={vector}
            alt=""
          />
        </div>

        <div
          className={`bg-[#2090A4]  min-h-screen ${
            open ? "w-36" : "w-0"
          } duration-500 text-gray-100 relative`}
        >
          <div className={`py-3 px-4 flex justify-end`}>
            <HiMenuAlt3
              size={26}
              className={`cursor-pointer`}
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-5 flex flex-col gap-6 relative">
            {Menus?.map((menu, i) => (
              <CustomLink
                to={menu?.link}
                key={i}
                className={` ${
                  menu?.gap && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-[#399BAD] hover:text-white rounded-md`}
              >
                {/* <img className="" src={menu?.src} alt="" /> */}
                {/* <div>{React.createElement(menu?.src, { size: "20" })}</div> */}
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.title}
                </h2>
                {/* <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.title}
                </h2> */}
              </CustomLink>
            ))}
          </div>
          <img
            className="img-fluid w-full absolute bottom-0"
            src={vector}
            alt=""
          />
        </div>

        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Navbar;
