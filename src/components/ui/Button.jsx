/* eslint-disable react/prop-types */
import React from "react";

const Button = (
  { children, type = "button", className = "", ...props },ref
) => {
  return (
    <button type={type} className={className} {...props} ref={ref}>
      {children}
    </button>
  );
};

export default React.forwardRef(Button);
