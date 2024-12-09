/* eslint-disable react/prop-types */
import React from "react";

const Image = ({ src = "", alt = "", className = "placeholder:", ...props },ref) => {
  return <img src={src} alt={alt} className={className} {...props} ref={ref} />;
};

export default React.forwardRef(Image);
