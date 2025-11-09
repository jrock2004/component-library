import React from "react";
import { ChevronDown } from "lucide-react";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: "default" | "filled";
  error?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className = "", variant = "default", error = false, children, ...props },
    ref,
  ) => {
    const baseStyles =
      "w-full px-3 py-2 pr-10 rounded-lg border transition-all duration-200 outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed appearance-none";

    const variants = {
      default: "border-border bg-background",
      filled: "border-border bg-input-background",
    };

    const errorStyles = error
      ? "border-destructive focus:ring-destructive"
      : "";

    return (
      <div className="relative inline-block w-full">
        <select
          ref={ref}
          className={`${baseStyles} ${variants[variant]} ${errorStyles} ${className}`}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-muted-foreground" />
      </div>
    );
  },
);

Select.displayName = "Select";
