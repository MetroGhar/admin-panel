import axios from "axios";
import React, { useEffect, useState } from "react";
import cancel from "../../Assest/icons8-cancel-64 2.png";
const Project = ({
  setData,
  data,
}) => {

  const [extImg,setExtImg] = useState([])
  const [intImg,setIntImg] = useState([])
  const [amentImg,setAmentImg] = useState([])
  const [otherImg,setOtherImg] = useState([])
  const [loading, setLoading] = useState(false)
  
const [images,setImages] = useState("");



    const deleteExtImage = async(tag)=>{
      console.log(tag);
      if(typeof tag == 'string'){
        var result =  await axios.post("http://52.66.198.155/api/v1/image/delete",{tag})
        console.log("this is single image aray",result)
       }else{
        // 
        console.log("this is single image aray",tag)
       }
        if(result.data.status){
          console.log("this is the response delete",result.data)
         const img =  data.externalimages.filter((val) => val !== tag)
         console.log("this is new array ",img)
         setData((prevState) => ({
           ...prevState,
           
           externalimages: img
          }))
        }
    }
    const deleteAmentImage = async(tag)=>{
      if(typeof tag == 'string'){
        var result =  await axios.post("http://52.66.198.155/api/v1/image/delete",{tag})
        console.log("this is single image aray",result)
       }else{
        // 
        console.log("this is single image aray",tag)
       }
        if(result.data.status){
          console.log("this is the response delete",result.data)
         const img =  data.amenitiesimages.filter((val) => val !== tag)
         console.log("this is new array ",img)
         setData((prevState) => ({
           ...prevState,
           amenitiesimages: img
          }))
        }
    }

    const deleteIntImage = async(tag)=>{
      if(typeof tag == 'string'){
        var result =  await axios.post("http://52.66.198.155/api/v1/image/delete",{tag})
        console.log("this is single image aray",result)
       }else{
        // 
        console.log("this is single image aray",tag)
       }
        if(result.data.status){
          console.log("this is the response delete",result.data)
         const img =  data.internalimages.filter((val) => val !== tag)
         console.log("this is new array ",img)
         setData((prevState) => ({
           ...prevState,
           internalimages: img
          }))
        }
    }
    const deleteOtherImage = async(tag)=>{
      if(typeof tag == 'string'){
        var result =  await axios.post("http://52.66.198.155/api/v1/image/delete",{tag})
        console.log("this is single image aray",result)
       }else{
        // 
        console.log("this is single image aray",tag)
       }
        if(result.data.status){
          console.log("this is the response delete",result.data)
         const img =  data.othersimages.filter((val) => val !== tag)
         console.log("this is new array ",img)
         setData((prevState) => ({
           ...prevState,
           othersimages: img
          }))
        }
    }

    const fileSelectedHandler = (e) => {
      setImages([...e.target.files]);
    }

  //// external images
  const onChange = async (e) => {
    // let file = [];
    // for(let i = 0; i< e.target.files.length; i++){
    //   file.push(e.target.files[i])
    // }
    // console.log(file);
    // const formData = new FormData();
    // formData.append("images",file);
    // const result =   await axios.post("http://52.66.198.155/api/v1/multipleimage/upload", formData,{
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // },)
    // const file = e.target.files[0];
    // console.log(file);
    // const formData = new FormData();
    // formData.append("image", file);
    // const result =   await axios.post("http://52.66.198.155/api/v1/multipleimage/upload", formData)
    // setExtImg([...extImg,result.data.imgUrl])
    //   setData((prevState) => ({
    //     ...prevState,
        
    //     externalimages: [...extImg,result.data.imgUrl],
    //   }))
      
      // setImages(imageList);


      const formData = new FormData();
      images?.forEach((image) => formData.append("images",image) );
        try {
          const config ={
            headers:{
              "Content-Type": "multipart/form-data"
            }
          }
          setLoading(true);
          const newData = await axios.post("http://52.66.198.155/api/v1/multipleimage/upload",formData,config);

          console.log(newData?.data?.imgUrls);
          
          if(newData){
            setLoading(false)
          }
          if(data?.externalimages?.length > 0){
            setData((prevState) => ({
              ...prevState,
              externalimages: [...data?.externalimages,...newData?.data?.imgUrls],
            }))
          }else{
            setData((prevState) => ({
              ...prevState,
              externalimages: [...newData?.data?.imgUrls],
            }))
          }
         
        } catch (error) {
          console.log(error.response.data.message);
        }
    };
const [img1, setImg1] = useState("")
    useEffect(() => {
      onChange();
    
    }, [images]);

    const fileSelectedHandler1 = (e) => {
      setImg1([...e.target.files]);
    }
    useEffect(() => {
     
      onInternalImg();
    }, [img1]);

    const [img2, setImg2] = useState("")
    const fileSelectedHandler2 = (e) => {
      setImg2([...e.target.files]);
    }
    useEffect(() => {
     
      onAmentImg();
    }, [img2]);
 
  const onInternalImg = async (e) => {
    // const file = e.target.files[0];
    // console.log(file);
    // const formData = new FormData();
    // formData.append("image", file);
    // const result =   await axios.post("http://52.66.198.155/api/v1/multipleimage/upload", formData)
    // setIntImg([...intImg,result.data.imgUrl])
    //   setData((prevState) => ({
    //     ...prevState,
        
    //     internalimages: [...intImg,result.data.imgUrl],
    //   }))

    const formData = new FormData();
    img1?.forEach((image) => formData.append("images",image) );
      try {
        const config ={
          headers:{
            "Content-Type": "multipart/form-data"
          }
        }
        setLoading(true);
        const newData = await axios.post("http://52.66.198.155/api/v1/multipleimage/upload",formData,config);

        console.log(newData?.data?.imgUrls);
        
        if(newData){
          setLoading(false)
        }
        if(data?.internalimages?.length > 0){
          setData((prevState) => ({
            ...prevState,
            internalimages: [...data?.internalimages,...newData?.data?.imgUrls],
          }))
        }else{
          setData((prevState) => ({
            ...prevState,
            internalimages: [...newData?.data?.imgUrls],
          }))
        }
       
      } catch (error) {
        console.log(error.response.data.message);
      }
      
      // setImages(imageList);
    };
  const onAmentImg = async (e) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("image", file);
  //   const result =   await axios.post("http://52.66.198.155/api/v1/multipleimage/upload", formData)
  //   setAmentImg([...amentImg,result.data.imgUrl])
  //     setData((prevState) => ({
  //       ...prevState,
        
  //       amenitiesimages: [...amentImg,result.data.imgUrl],
  //     }))
      
  //     // setImages(imageList);
  //   };
  // const onOtherImg = async (e) => {
  //   const file = e.target.files;
  //   for(let i = 0; i < file?.length ; i++){
  //     console.log(file[i]);
  //     const formData = new FormData();
  //     formData.append("images", file[i]);
  //     const result =   await axios.post("http://52.66.198.155/api/v1/multipleimage/upload", formData)
  //     setOtherImg([...otherImg,result.data.imgUrl])
  //       setData((prevState) => ({
  //         ...prevState,
         
  //         othersimages: [...otherImg,result.data.imgUrl],
  //       }))
  //   }
   
  const formData = new FormData();
  img2?.forEach((image) => formData.append("images",image) );
    try {
      const config ={
        headers:{
          "Content-Type": "multipart/form-data"
        }
      }
      setLoading(true);
      const newData = await axios.post("http://52.66.198.155/api/v1/multipleimage/upload",formData,config);

      console.log(newData?.data?.imgUrls);
      
      if(newData){
        setLoading(false)
      }
      if(data?.amenitiesimages?.length > 0){
        setData((prevState) => ({
          ...prevState,
          amenitiesimages: [...data?.amenitiesimages,...newData?.data?.imgUrls],
        }))
      }else{
        setData((prevState) => ({
          ...prevState,
          amenitiesimages: [...newData?.data?.imgUrls],
        }))
      }
     
    } catch (error) {
      console.log(error.response.data.message);
    }
   
      
      // setImages(imageList);
    };

    
    const [img3, setImg3] = useState("")
    const fileSelectedHandler3 = (e) => {
      setImg3([...e.target.files]);
    }
    useEffect(() => {
     
      onOtherImg();
    }, [img3]);
     const onOtherImg = async (e) => {
      const formData = new FormData();
  img3?.forEach((image) => formData.append("images",image) );
    try {
      const config ={
        headers:{
          "Content-Type": "multipart/form-data"
        }
      }
      setLoading(true);
      const newData = await axios.post("http://52.66.198.155/api/v1/multipleimage/upload",formData,config);

      console.log(newData?.data?.imgUrls);
      
      if(newData){
        setLoading(false)
      }
      if(data?.othersimages?.length > 0){
        setData((prevState) => ({
          ...prevState,
          othersimages: [...data?.othersimages,...newData?.data?.imgUrls],
        }))
      }else{
        setData((prevState) => ({
          ...prevState,
          othersimages: [...newData?.data?.imgUrls],
        }))
      }
     
    } catch (error) {
      console.log(error.response.data.message);
    }
   
    }

  return (
    <div className="mt-12 px-12 pb-12">
      <h2 className="font-bold">Property Image/Video</h2>
    {
      loading ? <p>loading...</p> :  <div onSubmit={""} className="mt-8">
      <div className="flex flex-row justify-between gap-36">
        <div className="w-full">
          <h2 className="text-gray-400">Property External Images</h2>
          <div className="border p-2 w-full">
            <label className="block">
              <span className="sr-only">Select Image </span>

              <input
              onChange={fileSelectedHandler}
              name="externalimages"
              type="file"
              multiple
              className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-none file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50
                hover:file:bg-violet-100
              "
            />

            
            </label>
          
            <div className="grid grid-cols-4 gap-x-4  text-blue-400">
              {/* {image?.externalimages?.length >= 1
                ? image?.externalimages?.map((img, index) => (
                    <p key={index}>{img.slice(15, 25) + "..."}</p>
                  ))
                : ""} */}
            </div>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-gray-400">Property Internal Image</h2>
          <div className="border p-2 w-full">
            <label className="block">
              <span className="sr-only">Select Image </span>
              <input
              // onChange={onInternalImg}
              onChange={fileSelectedHandler1}
              name="internalimages"
              type="file"
              multiple
              className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-none file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50
                hover:file:bg-violet-100
              "
            />


            </label>
           
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between mt-16 gap-36">
        <div className="w-full">
          <h2 className="text-gray-400">Property Amenties</h2>
          <div className="border p-2 w-full">
            <label className="block">
              <span className="sr-only">Select Image </span>

             <input
              name="amenitiesimages"
              onChange={fileSelectedHandler2}
              // onChange={onAmentImg}
              type="file"
              multiple
              className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-none file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50
                hover:file:bg-violet-100
              "
            />

            
            </label>
           
            <div className="grid grid-cols-4 gap-x-4 text-blue-400">
              {/* {amentiesImage.length >= 1
                ? amentiesImage?.map((img, index) => (
                    <p key={index}>{img.slice(15, 25) + "..."}</p>
                  ))
                : ""} */}
              {/* {image?.amentiesimage?.length >= 1
                ? image?.amentiesimage?.map((img, index) => (
                    <p key={index}>{img.slice(15, 25) + "..."}</p>
                  ))
                : ""} */}
            </div>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-gray-400">Other Images</h2>
          <div className="border p-2 w-full">
            <label className="block">
              <span className="sr-only">Select Image </span>

                <input
              // onChange={onOtherImg}
              onChange={fileSelectedHandler3}
              name="othersimages"
              type="file"
              multiple
              className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-none file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50
                hover:file:bg-violet-100
              "
            />
  
            
            </label>
           
            <div className="grid grid-cols-4 gap-x-4 text-blue-400">
              {/* {image?.othersimage?.length >= 1
                ? image?.othersimage?.map((img, index) => (
                    <p key={index}>{img.slice(15, 25) + "..."}</p>
                  ))
                : ""} */}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-36 w-full">
        <table className=" border w-full">
          <thead className="border">
            <tr>
              <th className="border border-slate-300 w-72 p-2">Image Type</th>
              <th className="border p-2 border-slate-300">Image </th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="border">
   

              <td className="p-3 border">External Images</td>
              <td className="p-3 overflow-x-auto space-x-4 w-full  text-blue-500 flex">
              { 
                  data?.externalimages?.map((val,index)=>(
                  <>
                  <img key={index} style={{width:'120px',height:'120px'}} src={val} alt="" />
                  <span className="cursor-pointer">
                      <img className="img-fluid" style={{width:'30px'}} onClick={()=>deleteExtImage(val)} src={cancel} alt="" />
                  </span>
                  </>
                  
                ))
              }
            
              </td>
            </tr>
            <tr className="border">
              <td className="p-3 border"> Internal Images</td>
              <td className="p-3  overflow-x-auto space-x-4 w-full gap-x-3 text-blue-500 flex">
               
              { 
                data?.internalimages?.map((val,index)=>(
                  <>
                  <img key={index} style={{width:'150px'}} src={val} alt="" />
                  <span>
                      <img className="img-fluid" style={{width:'30px'}} onClick={()=>deleteIntImage(val)} src={cancel} alt="" />
                  </span>
                  </>
                  
                ))
              }
   
              </td>
            </tr>
            <tr className="border">
              <td className="border p-3">Amenties Images</td>
              <td className="p-3 overflow-x-auto space-x-4 w-full gap-x-3 text-blue-500 flex">
               

{ 
                data?.amenitiesimages?.map((val,index)=>(
                  <>
                  <img key={index} style={{width:'120px',height:'120px'}} src={val} alt="" />
                  <span>
                      <img className="img-fluid" style={{width:'30px'}} onClick={()=>deleteAmentImage(val)} src={cancel} alt="" />
                  </span>
                  </>
                  
                ))
              }
              </td>
            </tr>
            <tr className="border">
              <td className="border p-3">Other Images</td>
              <td className="p-3  overflow-x-auto space-x-4 w-full gap-x-3 text-blue-500 flex">
           
                { 
                data?.othersimages?.map((val,index)=>(
                  <>
                  <img key={index} style={{width:'120px',height:'120px'}} src={val} alt="" />
                  <span>
                      <img className="img-fluid" style={{width:'30px'}} onClick={()=>deleteOtherImage(val)} src={cancel} alt="" />
                  </span>
                  </>
                  
                ))
              }
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    }
     
    </div>
  );
};

export default Project;
