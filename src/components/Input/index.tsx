import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "filled";
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", variant = "default", error = false, ...props }, ref) => {
    const baseStyles =
      "w-full px-3 py-2 rounded-lg border transition-all duration-200 outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      default: "border-border bg-background",
      filled: "border-border bg-input-background",
    };

    const errorStyles = error
      ? "border-destructive focus:ring-destructive"
      : "";

    return (
      <input
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${errorStyles} ${className}`}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
