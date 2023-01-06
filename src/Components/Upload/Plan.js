import axios from "axios";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import plus from "../../Assest/download__21_-removebg-preview 1.png";
import "../Style/Style.css";

const Plan = ({ setAllDatas,setData, allDatas, handleDelete,handleDeletes, data }) => {
  const [inputs, setInputs] = useState([]);
  const [input, setInput] = useState([]);
  const unique_id = uuid();

  

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
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    
  }));
  };
  // useEffect(() => {
  //   setData((prevState) => ({
  //     ...prevState,
  //     floorplan: [inputs]
  //   }))
  // }, [inputs]);

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image",file);
    console.log(file);

  const result =   await axios.post("http://52.66.198.155/api/v1/image/upload", formData)
      console.log("this is image response ",result?.data?.imgUrl)
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: result.data.imgUrl,
      }))
    
  };
 
  // const uploadImage = async (e) => {
  //   const file = e.target.files[0];
  //   const base64 = await convertBase64Image(file);

    // setInputs((prevState) => ({
    //   ...prevState,
    //   floorimage: e.target.files[0],
    // }));

  //   setInput((prevState) => ({
  //     ...prevState,
  //     floorimage: base64,
  //   }));
  // };



  const handleBasicInfo = async (e) => {
    e.preventDefault();
   setAllDatas([...allDatas, inputs]);

  
    // setData((prevState) => ({
    //   ...prevState,
    //   floorplan: allDatas,
    // }));
    
  };
// data?.floorplan.map(flr => console.log(flr))
  return (
    <div className="px-12 pt-16 pb-12">
      <form onSubmit={handleBasicInfo}>
        <div className="flex justify-between gap-x-14">
          <select
            name="floortype"
            onChange={handleChange}
            className="border-b-2 w-full text-slate-400 border-slate-300 py-0 pr-3
            focus:outline-none focus:border-gray-500 focus:ring-0 "
          >
            <option>Type Of property</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Residential Plot">Residential Plot</option>
          </select>
          <select
            name="typeofbhk"
            onChange={handleChange}
            className="border-b-2 w-full text-slate-400  border-slate-300 py-0 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
          >
            <option value="Type Of Bhk">Type Of Bhk</option>
            <option value="1RK">1RK</option>
            <option value="1BHK">1BHK</option>
            <option value="1.5BHK">1.5BHK</option>
            <option value="2BHK">2BHK</option>
            <option value="2.5BHK">2.5BHK</option>
            <option value="3BHK">3BHK</option>
            <option value="3.5BHK">3.5BHK</option>
            <option value="4BHK">4BHK</option>
            <option value="4.5BHK">4.5BHK</option>
            <option value="5BHK">5BHK</option>
            <option value="6BHK">6BHK</option>
            <option value="Residential Plot">Residential Plot</option>
            <option value="Studio">Studio</option>
          </select>

          <div className="text-lg mt-4 relative flex justify-between items-center w-full">
            <input
              type="number"
              placeholder="Space"
              className="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-md z-30"
              name="space"
              onChange={handleChange}
            />

            <div className="w-full flex flex-row justify-center items-center">
              <select
                name="spacetype"
                onChange={handleChange}
                className="w-full text-xs border-b-2 mt-6 text-slate-400  border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-0 "
              >
                <option>Space</option>
                <option value="Carpet Area">Carpet Area</option>
                <option value="Super Built Up Area">Super Built Up Area</option>
                <option value="Built Up Area">Built Up Area</option>
                <option value="Plot Area">Plot Area</option>
              </select>
              <p className="text-xs border-slate-300 w-full border-b-2 mt-7 flex justify-end">
                sq. ft.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex justify-between gap-x-14">
           
            <div className="text-lg relative flex justify-between items-center w-full">
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="number"
                placeholder="Per sq.ft price"
                name="pricepersqft"
                defaultValue={inputs?.pricepersqft || ""}
                onChange={handleChange}
              />
              <p className="absolute right-2 text-slate-400 z-30">
                {inputs?.pricepersqft ? numFormatter(inputs?.pricepersqft) : ""}
              </p>
            </div>

            <div className="text-lg relative flex justify-between items-center w-full">
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="number"
                placeholder="Price"
                name="totalprice"
                defaultValue={inputs?.totalprice || ""}
                onChange={handleChange}
              />
              <p className="absolute right-2 text-slate-400 z-30">
                {inputs?.totalprice ? numFormatter(inputs?.totalprice) : ""}
              </p>
            </div>

            <input
              hidden
              className=""
              type="file"
              placeholder="Floor Image 2D/3D"
              name="floorimage"
              id="floorimage"
              onChange={uploadImage}
            />
            <label
              htmlFor="floorimage"
              className="custom-file-input  block w-full border-b-2 border-slate-300 text-slate-400"
            >
              {input?.floorimage
                ? input?.floorimage?.slice(0, 20)
                : "Floor Image 2D/3D"}
            </label>

            <button
              onClick={handleBasicInfo}
              className=" w-32 h-10 rounded-full border-2 hover:bg-white
          z-30"
            >
              <img className="w-full" src={plus} alt="" />
            </button>
          </div>
        </div>
      </form>

      <div className="overflow-x-auto border rounded-2xl mt-16">
        <table className="table text-sm  w-full ">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Type Of Bhk</th>
              <th>Space</th>
              <th>Per sq.ft price</th>
              <th>Price</th>
              <th>Floor Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.floorplan?.length > 0 ? <>{data?.floorplan?.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item?.typeofbhk}</td>
                  <td>{item?.spacetype}</td>
                  <td>{item?.pricepersqft}</td>
                  <td>{item?.totalprice}</td>
                  <td>
                    {/* {item?.floorimage?.slice(0, 20)} */}
                  <img className="w-12 h-12" src={item?.floorimage} alt="" />
                  </td>
                  <td>
                    {/* {
                      data?.floorplan?.map(flr => <button
                        onClick={() => handleDelete(flr)}
                        className="btn btn-xs btn-secondary"
                      >
                        Remove
                      </button>)
                    } */}
                    <button
                        onClick={() => handleDeletes(item?._id)}
                        className="btn btn-xs btn-secondary"
                      >
                        Remove
                      </button>
                    
                  </td>
                </tr>
              ))}</> : <>
              {allDatas?.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{item?.typeofbhk}</td>
                <td>{item?.spacetype}</td>
                <td>{item?.pricepersqft}</td>
                <td>{item?.totalprice}</td>
                <td>
                  {/* {item?.floorimage?.slice(0, 20)} */}
                <img className="w-12 h-12" src={item?.floorimage} alt="" />
                </td>
                <td>
                  {/* {
                    data?.floorplan?.map(flr => <button
                      onClick={() => handleDelete(flr)}
                      className="btn btn-xs btn-secondary"
                    >
                      Remove
                    </button>)
                  } */}
                  <button
                      onClick={() => handleDeletes(index)}
                      className="btn btn-xs btn-secondary"
                    >
                      Remove
                    </button>
                  
                </td>
              </tr>
            ))}
              </>
            }
            
          </tbody>
        </table>
      </div>

     
    </div>
  );
};

export default Plan;
