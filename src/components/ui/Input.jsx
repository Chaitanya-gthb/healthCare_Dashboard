/* eslint-disable react/prop-types */
import React from "react";

const Input = ({ label, type = "text", className = "", ...props },ref) => {
  return (
    <div>
      {label && <label> {label}</label>}
      <input type={type} className={className} {...props} ref={ref}/>
    </div>
  );
};

export default React.forwardRef(Input);
