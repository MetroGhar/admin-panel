import React from "react";
import { Outlet } from "react-router-dom";

const BasicInfo = ({ page, setPage }) => {
  return (
    <div className="mx-auto sticky top-6 z-40 bg-white">
      <div className="flex justify-between px-12 pt-12 text-secondary ">
        <button
          onClick={() => setPage(1)}
          style={{
            color: page === 1 ? "#2EACAA" : "#4B4B4B",
            borderBottom: page === 1 ? "2px solid #2EACAA" : "",
          }}
        >
          Basic Info
        </button>
        <button
          onClick={() => setPage(2)}
          style={{
            color: page === 2 ? "#2EACAA" : "#4B4B4B",
            borderBottom: page === 2 ? "2px solid #2EACAA" : "",
          }}
        >
          Floor Plan
        </button>
        <button
          onClick={() => setPage(3)}
          style={{
            color: page === 3 ? "#2EACAA" : "#4B4B4B",
            borderBottom: page === 3 ? "2px solid #2EACAA" : "",
          }}
        >
          Amenties
        </button>
        <button
          onClick={() => setPage(4)}
          style={{
            color: page === 4 ? "#2EACAA" : "#4B4B4B",
            borderBottom: page === 4 ? "2px solid #2EACAA" : "",
          }}
        >
          Legal Details
        </button>
        <button
          onClick={() => setPage(5)}
          style={{
            color: page === 5 ? "#2EACAA" : "#4B4B4B",
            borderBottom: page === 5 ? "2px solid #2EACAA" : "",
          }}
        >
          Project Images
        </button>
        <button
          onClick={() => setPage(6)}
          style={{
            color: page === 6 ? "#2EACAA" : "#4B4B4B",
            borderBottom: page === 6 ? "2px solid #2EACAA" : "",
          }}
        >
          Builder Profile
        </button>
      </div>

      <hr className="" />

      <Outlet />
    </div>
  );
};

export default BasicInfo;
