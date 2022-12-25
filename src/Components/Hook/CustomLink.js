import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link
        style={{
          color: match ? "#218FA4" : "#fff",
          // borderLeft: match ? "8px solid #2EACAA" : "",
          borderRadius: match ? "15px 0px 0px 15px" : "",
          backgroundColor: match ? "#fff" : "",
          marginLeft: match ? "-5px" : "0px"
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
