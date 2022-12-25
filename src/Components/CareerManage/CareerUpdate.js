import axios from "axios";
import React, { useEffect, useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const CareerUpdate = () => {
  const {careerupdate} = useParams()
  
  const [careerUp, setCareerUp] = useState();
  useEffect(() => {
    axios.get(`http://52.66.198.155/api/v1/admin/job/${careerupdate}`).then(res => setCareerUp(res?.data?.data))
  }, [])
  const [startDate, setStartDate] = useState(new Date());
  const [careerData, setCareerData] = useState();
  const [skills, setSkills] = useState(careerUp?.jobCategory);
  console.log(careerUp);
   const handleCareer = (e) => {
    setCareerData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      skills: skills,
      date:startDate
    }));
  }
  console.log("career data set", careerData)


 
  const handlePostCareer = async(e) => {
    e.preventDefault();
    const result =   await axios.post("http://52.66.198.155/api/v1/admin/job/add", {
      _id:careerupdate,
      additionalInfo: careerData?.additional,
      location:careerData?.careerlocation,
      compensation:careerData?.compensation,
      // startDate:"2022-12-08T14:30:07.422+00:00",
      startDate:careerData?.date,
      experience:careerData?.experience,
      jobTitle:careerData?.jobrole,
      workType:careerData?.jobtype,
      description:careerData?.keyres,
      otherRequirement:careerData?.others,
      jobCategory:careerData?.skills,
      skillRequirement:careerData?.skill,
    })
    if(result.status === 200){
      toast.success('Changes has been saved successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        e.target.reset();
    }
    else{
      toast.warn('Opps! try again', {
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
  
    console.log("career data set", result)
  }
  return (
    <form onSubmit={handlePostCareer} className="py-3">
    <div className="px-4 py-8 rounded-lg border m-10 bg-[#FDFDFD]">
      <div className="px-6">
        <h2 className="text-center mt-4">
          In which department do you want to post the job ?
        </h2>
       

        <div className="flex justify-evenly items-center mt-12">
          <div onClick={() => setSkills("BusinessDevlop")}  className="flex gap-x-1 justify-center items-center">
            <input type="radio" name="group" value="happy" id="rad1" />
            <label htmlFor="rad1">Business Development</label>
          </div>
          <div onClick={() => setSkills("Marketing")} className="flex gap-x-1 justify-center items-center">
            <input type="radio" name="group" value="happy" id="rad2" />
            <label htmlFor="rad2">Marketing</label>
          </div>
          <div onClick={() => setSkills("TechDesign")} className="flex gap-x-1 justify-center items-center">
            <input type="radio" name="group" value="happy" id="rad3" />
            <label htmlFor="rad3">Tech & Design</label>
          </div>
          <div onClick={() => setSkills("Operations")} className="flex gap-x-1 justify-center items-center">
            <input type="radio" name="group" value="happy" id="rad4" />
            <label htmlFor="rad4">Operations</label>
          </div>
          <div onClick={() => setSkills("Others")} className="flex gap-x-1 justify-center items-center">
            <input type="radio" name="group" value="happy" id="rad5" />
            <label htmlFor="rad5">Others</label>
          </div>
        </div>

        <div className="mt-12">
          <h2>Job Role</h2>
        
          <input onChange={handleCareer} type="text" name="jobrole" 
           defaultValue={careerUp?.jobTitle}
          placeholder="UX UI Designer" className="input input-bordered w-full input-sm" />

          <div className="flex justify-start items-center gap-x-12 mt-6">
            <div className="div">
                <h2>Location</h2>
                <input onChange={handleCareer} type="text" 
                defaultValue={careerUp?.location}
                placeholder="Bangalore" name="careerlocation" className="input input-bordered input-sm w-full max-w-xs"  />
            </div>
            <div className="div">
                <h2>Job Type</h2>
                <input onChange={handleCareer} type="text" 
                defaultValue={careerUp?.workType}
                placeholder="Bangalore" name="jobtype" className="input input-bordered input-sm w-full max-w-xs"  />
            </div>
            <div className="div">
                <h2>Experience Required</h2>
                <input onChange={handleCareer} type="text" 
                defaultValue={careerUp?.experience} placeholder="Bangalore" name="experience" className="input input-bordered input-sm w-full max-w-xs"  />
            </div>
          </div>

          <div className="flex justify-start items-center w-8/12 gap-x-12 mt-6">
          <div className="w-full">
                <h2>Compensation</h2>
                <input onChange={handleCareer}  defaultValue={careerUp?.compensation} name="compensation" type="text" placeholder="3lpa" className="input input-bordered input-sm w-full max-w-xl"  />
            </div>
          <div className="w-full">
                <h2>Start Date</h2>
                
             
        <DatePicker className="input-bordered input input-sm w-full max-w-xl"  selected={startDate} defaultValue={careerUp?.startDate}  onChange={(date) => setStartDate(date)} />
            </div>
          </div>

          <div className="mt-6">
            <h2>Key Resposibilities</h2>
            <textarea  defaultValue={careerUp?.otherRequirement} onChange={handleCareer} name="keyres" className="textarea textarea-bordered w-full" placeholder="text"></textarea>
          </div>

          <div className="mt-6">
            <h2>Skills Required</h2>
            <input onChange={handleCareer} defaultValue={careerUp?.skillRequirement} name="skill" type="text" className="input input-bordered input-sm w-full mt-2" />
          </div>
         
          <div className="mt-6">
            <h2>Additional Information (Optional)</h2>
            <textarea defaultValue={careerUp?.description} onChange={handleCareer} name="additional" className="textarea textarea-bordered w-full" placeholder="text"></textarea>
          </div>
        </div>
      </div>
    </div>

    <input type="submit" value="Post" className="bulk-button px-10 py-1 text-white flex justify-center items-center mx-auto" />
    </form>
  );
};

export default CareerUpdate;
