import React from "react";

const DisplayImage = ({ imageURLS, handleDelete }) => {



  return (
    <>


      {imageURLS?.map((img, index) => (
        <div key={index} className="flex justify-end relative">
          <img
            className="img-fluid  w-fit h-32 mt-0"
            src={img || img?.secure_url}
            alt=""
          />

          <button
            className="absolute hover:text-black bg-gray-400 p-1 hover:bg-white text-white mt-0 z-20"
            onClick={() => handleDelete(img)}
          >
            X
          </button>
        </div>
      ))}
    </>
  );
};

export default DisplayImage;
