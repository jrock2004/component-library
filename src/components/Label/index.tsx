import React from "react";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = "", required = false, children, ...props }, ref) => {
    return (
      <label ref={ref} className={`block mb-1.5 ${className}`} {...props}>
        {children}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
    );
  },
);

Label.displayName = "Label";
