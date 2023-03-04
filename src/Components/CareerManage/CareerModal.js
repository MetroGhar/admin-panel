
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import doenload from "../../Assest/career/Vector (4).png";
import "../Style//Style.css";

const CareerModal = (props) => {
  const [careerResponse, setCareerResponse] = useState();
  useEffect(() => {
    axios
      .get(`http://52.66.198.155/api/v1/admin/application/${props.careerId}`)
      .then((res) => setCareerResponse(res?.data?.data));
  }, []);
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

const onButtonClick = (pdfLink) => {
  fetch("sample.pdf").then(response => {
      response.blob().then(blob => {
          let alink = document.createElement('a');
          alink.href = pdfLink;
          alink.download = pdfLink;
          alink.click();
      })
  })
}
  return ReactDOM.createPortal(
    <CSSTransition
      in={props.showCareer}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modalcareer" onClick={props.onClose}>
        <div
          className="modalcareer-content"
          onClick={(e) => e.stopPropagation()}
        >
       
          <div className="modalcareer-body">
            <div className="div">
              <div className="flex justify-between  items-center">
           <div className="flex justify-between gap-x-6">
           <p className="flex flex-col text-[16px] text-[#7A7A7A]">
                  First name <span className="text-[#000000]">{careerResponse?.firstName} </span>{" "}
                </p>
                <p className="flex flex-col text-[16px] text-[#7A7A7A]">
                  {" "}
                  Last name <span className="text-[#000000]">{careerResponse?.lastName}</span>
                </p>
                <p className="flex flex-col text-[16px] text-[#7A7A7A]">
                  Email{" "}
                  <span className="text-[#000000]">{careerResponse?.email}</span>
                </p>
               
           </div>

                <button onClick={props.onClose} className="border border-red-500 px-2 py-0 rounded-lg  text-red-500">
              X
            </button>
              </div>

              <div className="flex gap-x-14 mt-12">
                <p className="flex flex-col text-[16px] text-[#7A7A7A]">
                  Phone number{" "}
                  <span className="text-[#000000]">{careerResponse?.phone}</span>
                </p>
                <p className="flex flex-col text-[16px] text-[#7A7A7A]">
                  Resume 
                  <span onClick={() => onButtonClick(careerResponse?.docUrl)} className="flex justify-start items-center cursor-pointer gap-x-3">
                  <span>{careerResponse?.docUrl?.slice(0,20) + "..."}</span>
                  <span className="border border-primary rounded-md p-1">
                    <img className="img-fluid" src={doenload} alt="" />
                  </span>
                  </span>
                </p>
              
   
              </div>

              <h2 className="mt-12 text-[16px] text-[#7A7A7A]">Description</h2>
              <p className="border px-2 py-4 text-black rounded-md mt-1">
              {careerResponse?.description}
              </p>
            </div>
          </div>
      
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default CareerModal;
