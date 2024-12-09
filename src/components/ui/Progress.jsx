/* eslint-disable react/prop-types */
import * as React from "react";

const Progress = React.forwardRef(({ className, value, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`w-full bg-gray-200 rounded-full h-2.5 ${className}`}
      {...props}
    >
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  );
});
Progress.displayName = "Progress";

export { Progress };
