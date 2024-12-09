/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";

function Badge({ className = "", variant = "default", ...props }) {
  // Define basic styles for each variant
  const variantClasses = {
    default: "inline-flex items-center rounded-full bg-primary text-primary-foreground px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
    secondary: "inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2",
    destructive: "inline-flex items-center rounded-full bg-destructive text-destructive-foreground px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-destructive/80 focus:outline-none focus:ring-2 focus:ring-destructive focus:ring-offset-2",
    outline: "inline-flex items-center rounded-full border text-foreground px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  };

  // Choose the appropriate classes for the variant
  const classes = `${variantClasses[variant]} ${className}`;

  return <div className={classes} {...props} />;
}

export { Badge };
