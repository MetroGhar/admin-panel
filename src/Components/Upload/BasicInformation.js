import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProperty } from "../../feature/propertySlice/propertySlice";
import {
  optionList,
  optionListTag,
  projectCity,
  property,
  propertySub
} from "./DataList";
import { MultiSelect } from "./MultiSelect";
import TextField from "./TextField";
const BasicInformation = () => {

  // code with redux
  const dispatch = useDispatch();
  const data = useSelector((state) => state.property);



  // code with local state
  let opt = optionList?.map((op) => op?.label);
  let opt1 = optionListTag?.map((op) => op?.label);
  let val = data?.projectconfiguration;
  let tag = data?.tag;
  const [config, setConfig] = useState(val || []);
  const [tags, setTags] = useState(tag || []);
  useEffect(() => {
    if (data?.projectconfiguration?.length > 1) {
      setConfig(data?.projectconfiguration);
    }
  }, [data]);
  useEffect(() => {
    if (data?.tag?.length > 1) {
      setTags(data?.tag);
    }
  }, [data])

  useEffect(() => {
    dispatch(getAllProperty({ name:"projectconfiguration" ,data:config }))
    dispatch(getAllProperty({ name:"tag" ,data:tags }))
  }, [config, tags]);

  const handleChange = (e) => {
    dispatch(getAllProperty({ name: e.target.name,data: e.target.value}))
   
  };

  const handleBuilder = (e) => {
    e.preventDefault();
  };

  const numFormatter = (num) => {
    if (num > 999 && num < 100000) {
      if (num % 1000 === 0) {
        return num / 1000 + "K";
      }
      // if (num % 1000 !== 0 && num / 1000 >= 1.5) {
      //   return (num / 1000).toFixed(1) + "K";
      // }
      else {
        return (num / 1000).toFixed(1) + "K";
      }
    } else if (num >= 100000 && num < 10000000) {
      if (num % 100000 === 0) {
        return num / 100000 + "L";
      } else {
        return (num / 100000).toFixed(1) + "L";
      }
    } else if (num >= 10000000) {
      if (num % 10000000 === 0) {
        return num / 10000000 + "Cr";
      } else {
        return (num / 10000000).toFixed(1) + "Cr";
      }
    }
    // else if (num < 900) {
    //   return num; // if value < 1000, nothing to do
    // }
  };

  return (
    <div className="px-12 pt-16 pb-12">
      <from onSubmit={handleBuilder}>
        <div className="flex justify-between gap-x-14">
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Project or property name"
            name="projectname"
            defaultValue={data?.projectname || ""}
            onChange={handleChange}
            
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Project Address "
            name="projectlocation"
            defaultValue={data?.projectlocation || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between gap-x-14 mt-14">
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Project Locality  "
            name="projectlocality"
            defaultValue={data?.projectlocality || ""}
            onChange={handleChange}
          />

          <select
            name="projectcity"
            onChange={handleChange}
            className="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
          >
            <option>Project City/District</option>
            {projectCity.map((prc) => (
              <option
                selected={data?.projectcity === prc?.value}
                value={prc?.value}
              >
                {prc?.value}
              </option>
            ))}
          </select>
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Project State"
            name="projectstate"
            defaultValue={data?.projectstate || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mt-12">
          <h2 className="font-bold">Property Type</h2>
          <div className="mt-8 flex justify-start gap-x-12">
            {property?.map((item) => (
              <div key={item.id} className="">
                <div>
                  <input hidden type="checkbox" id={item.id} />
                </div>
                <label
                  className={`${
                    item.check ? "text-white  bg-primary" : "text-primary"
                  } btn btn-md btn-outline  border-primary hover:bg-primary hover:border-none w-full hover:text-white`}
                  htmlFor={item.id}
                >
                  {item.value}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h2 className="font-bold">Property Sub - Type</h2>
          <div className="flex flex-wrap gap-y-8 gap-x-8 w-full mt-6 justify-start items-center">
            {propertySub.map((property, index) => (
              <>
                <p
                  key={index}
                  // onClick={() => handleSubType(property.id)}
                  onClick={() => dispatch(getAllProperty({ name:"projectsubtype" ,data: property.value}))}
                  className={`px-3 py-2 border border-primary rounded-lg cursor-pointer ${
                    (
                      data?.projectsubtype === property.value)
                      ? "bg-primary text-white"
                      : "text-primary"
                  }`}
                >
                  {property.value}
                </p>
              </>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2>Property Pricing </h2>
          <div className="flex justify-between gap-x-14 mt-8">
            <div className="text-lg mt-4 relative flex justify-between items-center w-full">
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="number"
                placeholder="Min Price"
                name="projectminprice"
                defaultValue={data?.projectminprice || ""}
                onChange={handleChange}
              />
              <p className="absolute right-2 text-slate-400 z-30">
                {data?.projectminprice
                  ? numFormatter(data?.projectminprice)
                  : ""}
              </p>
            </div>
            <div className="text-lg mt-4 relative flex justify-between items-center w-full">
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="number"
                placeholder="Max Price"
                name="projectmaxprice"
                defaultValue={data?.projectmaxprice || ""}
                onChange={handleChange}
              />

              <p className="absolute right-8 text-slate-400 z-30">
                {data?.projectmaxprice
                  ? numFormatter(data?.projectmaxprice)
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2>Property Space </h2>
          <div className="flex justify-between gap-x-14 mt-12">
            <div className="text-lg mt-4 relative flex justify-between items-center w-full">
              <input
                type="number"
                placeholder="Min Space"
                className="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
                name="projectminspace"
                defaultValue={data?.projectminspace || ""}
                onChange={handleChange}
              />

              {data?.projectminspace >= 200 && (
                <p className="absolute right-2 text-slate-400 z-30">sq. ft.</p>
              )}
            </div>
            <div className="text-lg mt-4 relative flex justify-between items-center w-full">
              <input
                type="number"
                placeholder="Max Space"
                className="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
                name="projectmaxspace"
                defaultValue={data?.projectmaxspace || ""}
                onChange={handleChange}
              />

              {data?.projectmaxspace >= 200 && (
                <p className="absolute right-2 text-slate-400 z-30">sq. ft.</p>
              )}
            </div>

            <select
              onChange={handleChange}
              name="projectspacetype"
              className="border-b-2 text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
            >
              <option className=" ">Select</option>
              <option
                selected={data?.projectspacetype === "Carpet Area"}
                value="Carpet Area"
              >
                Carpet Area
              </option>
              <option
                selected={data?.projectspacetype === "Super Built Up Area"}
                value="Super Built Up Area"
              >
                Super Built Up Area
              </option>
              <option
                selected={data?.projectspacetype === "Built Up Area"}
                value="Built Up Area"
              >
                Built Up Area
              </option>
              <option
                selected={data?.projectspacetype === "Plot Area"}
                value="Plot Area"
              >
                Plot Area
              </option>
            </select>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="">Property Overview</h2>

          <div className="mt-8 flex justify-between gap-x-14">
            {/* {data?._id ? (
              <MultiSelect
                multiple
                options={opt}
                value={config}
                name="projectconfiguration"
                onChange={(o) => setConfig(o)}
              />
            ) : (
              <Select
                className="w-full text-slate-400  border-slate-300  pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 z-40 "
                options={optionList}
                placeholder="Configuration"
                onChange={handleSelect}
                name="projectconfiguration"
                value={selectedOptions || data?.projectconfiguration}
                isSearchable={true}
                isMulti
              />
            )} */}
<MultiSelect
                multiple
                options={opt}
                value={config || data?.projectconfiguration}
                name="projectconfiguration"
                onChange={(o) => setConfig(o)}
              />
            <input
              type="text"
              placeholder="Project Size"
              className="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
              name="projectsize"
              defaultValue={data?.projectsize || ""}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Project Area"
              className="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
              name="projectarea"
              defaultValue={data?.projectarea || ""}
              onChange={handleChange}
            />
          </div>

          <div className="mt-8 flex justify-between gap-x-14">
            <select
              name="projectpossessionstatus"
              onChange={handleChange}
              className="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
            >
              <option>Possission Status</option>

              <option
                selected={data?.projectpossessionstatus === "Ready To Move"}
                value="Ready To Move"
              >
                Ready To Move
              </option>
              <option
                selected={data?.projectpossessionstatus === "Ongoing"}
                value="Ongoing"
              >
                Ongoing
              </option>
              <option
                selected={data?.projectpossessionstatus === "New launch"}
                value="New launch"
              >
                New launch
              </option>
            </select>
            <select
              name="projectfacing"
              onChange={handleChange}
              className="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
            >
              <option>Facing</option>

              <option
                selected={data?.projectfacing === "North Facing"}
                value="North Facing"
              >
                North Facing
              </option>
              <option
                selected={data?.projectfacing === "East Facing"}
                value="East Facing"
              >
                East Facing
              </option>
              <option
                selected={data?.projectfacing === "West Facing"}
                value="West Facing"
              >
                West Facing
              </option>
              <option
                selected={data?.projectfacing === "South Facing"}
                value="South Facing"
              >
                South Facing
              </option>
              <option
                selected={data?.projectfacing === "North - East Facing"}
                value="North - East Facing"
              >
                North - East Facing
              </option>
              <option
                selected={data?.projectfacing === "North - West Facing"}
                value="North - West Facing"
              >
                North - West Facing
              </option>
              <option
                selected={data?.projectfacing === "South - East Facing"}
                value="South - East Facing"
              >
                South - East Facing
              </option>
              <option
                selected={data?.projectfacing === "North - West Facing"}
                value="South - West Facing"
              >
                South - West Facing
              </option>
            </select>
            <select
              name="projectfurnishing"
              onChange={handleChange}
              className="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
            >
              <option>Furnishing</option>

              <option
                selected={data?.projectfurnishing === "Furnished"}
                value="Furnished"
              >
                Furnished
              </option>
              <option
                selected={data?.projectfurnishing === "Semi-Furnished"}
                value="Semi-Furnished"
              >
                Semi-Furnished
              </option>
              <option
                selected={data?.projectfurnishing === "Unfurnished"}
                value="Unfurnished"
              >
                Unfurnished
              </option>
            </select>
          </div>
          <div className="mt-8 flex justify-between gap-x-14">
            <input
              type="text"
              placeholder="RERA Number"
              className="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
              name="projectreranumber"
              defaultValue={data?.projectreranumber || ""}
              onChange={handleChange}
            />
            {/* {data?._id ? (
              <MultiSelect
                multiple
                options={opt1}
                value={tags}
                name="tag"
                onChange={(o) => setTags(o)}
              />
            ) : (
              <Select
                className="w-full text-slate-400  border-slate-300  pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 z-40 "
                options={optionListTag}
                placeholder="Tag"
                value={selectedOptionsTag || data?.tag}
                onChange={handleSelectTag}
                name="tag"
                isSearchable={true}
                isMulti
              />
            )} */}
             <MultiSelect
                multiple
                options={opt1}
                value={tags || data?.tag}
                name="tag"
                onChange={(o) => setTags(o)}
              />

            {/* <select
              name="tag"
              onChange={handleChange}
              className="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
            >
              <option selected={data?.tag === "Tag"} value="Tag">
                Tag
              </option>
              <option selected={data?.tag === "Trending"} value="Trending">
                Trending
              </option>
            </select> */}
            {data.projectpossessionstatus !== "Ongoing" ? (
              ""
            ) : (
              <input
                type="text"
                defaultValue={data.projectpossessionstarts || ""}
                placeholder="Possession Starts"
                className="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
                name="projectpossessionstarts"
                onChange={handleChange}
              />
            )}
          </div>
        </div>

        <div className="mt-12">
          <h2>About Project</h2>

          <TextField
            initialValue={data?.aboutproject || ""}
            // getValue={(value) => handleAbout(value)}
            // getValue={(value) => handleAbout(value)}
            name={"aboutproject"}
          />
        </div>
        <div className="mt-12">
          <h2>Project Specification</h2>
          <TextField
            initialValue={data?.projectspecification || ""}
            // getValue={(value) => handleSpecification(value)}
            name={"projectspecification"}
          />
        </div>
      </from>
    </div>
  );
};

export default BasicInformation;
