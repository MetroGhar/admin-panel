import React, { useEffect, useState } from "react";
import MyMapComponent from "../MyMapComponent/MyMapComponent";

import { useDispatch, useSelector } from "react-redux";
import { getAllProperty } from "../../feature/propertySlice/propertySlice";
import { amenties } from "./DataList";
import { MultiSelectAmen } from "./MultiSelectAmen";

// https://i.postimg.cc/2yK0HQDP/Group-2395.png
// https://i.postimg.cc/1zGY9VGq/Group-47440.png
// https://i.postimg.cc/2y6HFHPQ/Group-47441.png
// https://i.postimg.cc/6QJmJfvK/Group-47442.png
// https://i.postimg.cc/PxK3DGFf/Group-47443.png
// https://i.postimg.cc/nznSMV2w/Group-47444.png
// https://i.postimg.cc/nhQPPPMT/Group-47445.png

const Amenties = () => {

    // code with redux
    const dispatch = useDispatch();
    const data = useSelector((state) => state.property);
    console.log("fdghdfgh",data);
  
    // code with local state
  const [lati, setLangi] = useState();
  const [longi, setLongi] = useState();
    // let amen = amenties?.map((op) => op?.value?.split("name:")?.[1]);
    let amen = amenties?.map((op) => op?.value);
    // let amenit = data?.projectamenities?.map(pr => pr?.split("name:")?.[1]);
    let amenit = data?.projectamenities?.map(pr => pr);
  
    const [amens, setAmen] = useState(amenit || []);
    useEffect(() => {
     if(data?.projectamenities?.length > 1)
        setAmen(amenit)
    }, [])

  const handleChange = (e) => {
    dispatch(getAllProperty({ name: e.target.name,data: e.target.value}))
   
  };
  useEffect(() => {
    dispatch(getAllProperty({ name: "projectlatitude",data: lati}))
    dispatch(getAllProperty({ name: "projectlongitude",data: longi}))
   
  }, [lati, longi]);


  const handleAmenties = (e) => {
    e.preventDefault();
  };


  useEffect(() => {
    dispatch(getAllProperty({ name:"projectamenities" ,data:amens }))
  }, [amens]);


  return (
    <form onSubmit={handleAmenties} className="px-12 mt-16 pb-12">
     
      {/* {
        data?._id ?  <MultiSelectAmen
        multiple
        options={amen}
        value={amens}
        name="projectamenities"
        onChange={(o) => setAmen(o)}
      />
 : <Select
        className="w-full text-slate-400  border-slate-300  pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 z-40 "
        name="projectamenities"
        options={amenties}
        placeholder="Amenties"
        value={selectedOptions}
        onChange={handleSelect}
        isSearchable={true}
        isMulti
      />
      } */}
      <MultiSelectAmen
        multiple
        options={amen}
        value={amens}
        name="projectamenities"
        onChange={(o) => setAmen(o)}
      />

     
      <h2 className="mt-16 text-[#4B4B4B] text-lg">Location Advantages</h2>

      <MyMapComponent
        setLongi={setLongi}
        setLangi={setLangi}
        lati={lati}
        longi={longi}
      />

      <div className="flex justify-between items-center gap-x-12 mt-6">
        <input
          type="text"
          placeholder="City/District "
          className="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-md z-30"
          name="projectcity"
          defaultValue={data?.projectcity || "Bangalure"}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Project Longitude"
          className="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-md z-30"
          name="projectlongitude"
          value={data?.projectlongitude || longi}
          onChange={handleChange}
        />
        <input
          type="text"
          value={data?.projectlatitude || lati}
          placeholder="Project Latitude "
          className="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-md z-30"
          name="projectlatitude"
          onChange={handleChange}
        />
        <button className="bg-[#2EACAA] py-2 px-8 text-white rounded-lg">
          Edit
        </button>
      </div>
    </form>
  );
};

export default Amenties;
