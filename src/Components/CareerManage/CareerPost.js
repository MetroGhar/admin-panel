import React, { useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
const axios = require("axios");

const CareerPost = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [careerData, setCareerData] = useState();
  const [skills, setSkills] = useState();
  const [tags, setTags] = React.useState([]);
  const [keys, setKeys] = useState();
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  function handleKeyDown(event) {
    setKeys(event.key);
    if (event.key === " ") {
      event.preventDefault();
      // setTags([...tags, tags]);
    }
  }
  const handleCareer = (e) => {
    setCareerData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      skills: skills,
      date: startDate,
      skillRequirement: tags,
    }));
  };
  console.log("career data set", careerData);
  const [status, setStatus] = useState(false);
  const handlePost = () => {
    setStatus(!status)
    handlePostCareer()
  }
  const handlePostCareer = async () => {
 
      const result = await axios.post(
        "http://52.66.198.155/api/v1/admin/job/add",
        {
          additionalInfo: careerData?.additional,
          location: careerData?.careerlocation,
          compensation: careerData?.compensation,
          startDate: careerData?.date,
          experience: careerData?.experience,
          jobTitle: careerData?.jobrole,
          workType: careerData?.jobtype,
          description: careerData?.keyres,
          otherRequirement: careerData?.others,
          jobCategory: careerData?.skills,
          skillRequirement: tags,
        }
      );
      if (result.status === 200) {
        toast.success("successfully career data add", {
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
    <>
      <form onSubmit={handlePostCareer} className="py-3">
        <div className="px-4 py-8 rounded-lg border m-10 bg-[#FDFDFD]">
          <div className="px-6">
            <h2 className="text-center mt-4">
              In which department do you want to post the job ?
            </h2>

            <div className="flex justify-evenly items-center mt-12">
              <div
                onClick={() => setSkills("BusinessDevlop")}
                className="flex gap-x-1 justify-center items-center"
              >
                <input type="radio" name="group" value="happy" id="rad1" />
                <label htmlFor="rad1">Business Development</label>
              </div>
              <div
                onClick={() => setSkills("Marketing")}
                className="flex gap-x-1 justify-center items-center"
              >
                <input type="radio" name="group" value="happy" id="rad2" />
                <label htmlFor="rad2">Marketing</label>
              </div>
              <div
                onClick={() => setSkills("TechDesign")}
                className="flex gap-x-1 justify-center items-center"
              >
                <input type="radio" name="group" value="happy" id="rad3" />
                <label htmlFor="rad3">Tech & Design</label>
              </div>
              <div
                onClick={() => setSkills("Operations")}
                className="flex gap-x-1 justify-center items-center"
              >
                <input type="radio" name="group" value="happy" id="rad4" />
                <label htmlFor="rad4">Operations</label>
              </div>
              <div
                onClick={() => setSkills("Others")}
                className="flex gap-x-1 justify-center items-center"
              >
                <input type="radio" name="group" value="happy" id="rad5" />
                <label htmlFor="rad5">Others</label>
              </div>
            </div>

            <div className="mt-12">
              <h2>Job Role</h2>
              {/* <select className="select  select-bordered select-xs w-full max-w-2xl">
            <option disabled selected>
              UX UI Designer
            </option>
          </select> */}
              <input
                onChange={handleCareer}
                type="text"
                name="jobrole"
                placeholder="UX UI Designer"
                className="input input-bordered w-full input-md"
              />

              <div className="flex justify-start items-center gap-x-12 mt-6">
                <div className="div">
                  <h2>Location</h2>
                  <input
                    onChange={handleCareer}
                    type="text"
                    placeholder="Bangalore"
                    name="careerlocation"
                    className="input input-bordered input-md w-full max-w-xs"
                  />
                </div>
                <div className="div">
                  <h2>Job Type</h2>
                  <input
                    onChange={handleCareer}
                    type="text"
                    placeholder="full time"
                    name="jobtype"
                    className="input input-bordered input-md w-full max-w-xs"
                  />
                </div>
                <div className="div">
                  <h2>Experience Required</h2>
                  <input
                    onChange={handleCareer}
                    type="text"
                    placeholder="skill"
                    name="experience"
                    className="input input-bordered input-md w-full max-w-xs"
                  />
                </div>
              </div>

              <div className="flex justify-start items-center w-8/12 gap-x-12 mt-6">
                <div className="w-full">
                  <h2>Compensation</h2>
                  <input
                    onChange={handleCareer}
                    name="compensation"
                    type="text"
                    placeholder="3lpa"
                    className="input input-bordered input-md w-full max-w-xl"
                  />
                </div>
                <div className="w-full">
                  <h2>Start Date</h2>

                  <DatePicker
                    className="input-bordered input input-md w-full max-w-xl"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>

              <div className="mt-6">
                <h2>Key Resposibilities</h2>
                <textarea
                  onChange={handleCareer}
                  name="keyres"
                  className="textarea textarea-bordered w-full"
                  placeholder="text"
                ></textarea>
              </div>

              <div className="mt-6">
                <h2>Skills Required</h2>
                {/* <input onChange={handleCareer} name="skill" multiple type="text" className="input input-bordered input-md w-full mt-2" /> */}

                <div className="tags-input w-full">
                  <ul id="tags">
                    {tags.map((tag, index) => (
                      <li key={index} className="tag">
                        <span className="tag-title">{tag}</span>
                        <span
                          className="tag-close-icon"
                          onClick={() => removeTags(index)}
                        >
                          x
                        </span>
                      </li>
                    ))}
                  </ul>
                  <input
                    type="text"
                    onKeyDown={handleKeyDown}
                    onKeyUp={(event) =>
                      event.key === "Enter" ? addTags(event) : null
                    }
                    placeholder="Press enter to add skill"
                    className="focus:outline-none w-full inputs"
                  />
                </div>
              </div>

              <div className="mt-6">
                <h2>Additional Information (Optional)</h2>
                <textarea
                  onChange={handleCareer}
                  name="additional"
                  className="textarea textarea-bordered w-full"
                  placeholder="text"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </form>
      <button
        onClick={() => handlePost()}
        className="bulk-button px-10 py-1 text-white flex justify-center items-center mx-auto"
      >
        {" "}
        Post
      </button>
    </>
  );
};

export default CareerPost;
