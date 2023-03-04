import JoditEditor from "jodit-react";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { getAllProperty } from "../../feature/propertySlice/propertySlice";
import "../Style/Style.css";

const config = {
 
  readonly: false,
};

const TextField = ({ initialValue, getValue,name }) => {
  const editor = useRef(null);
  const dispatch = useDispatch();


  return (
    <JoditEditor
      ref={editor}
      value={initialValue}
      config={config}
      tabIndex={1}
      //   onBlur={(newContent) => getValue(newContent)}
      // onChange={(newContent) => getValue(newContent)}
      onChange={(newContent) => dispatch(getAllProperty({name:name,data:newContent}))}
   
    />
  );
};

export default TextField;
