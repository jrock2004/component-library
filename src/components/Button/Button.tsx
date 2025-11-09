import React from "react";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = "", variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-primary text-primary-foreground hover:opacity-90",
      secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
      destructive:
        "bg-destructive text-destructive-foreground hover:opacity-90",
      success: "bg-success text-success-foreground hover:opacity-90",
      warning: "bg-warning text-warning-foreground hover:opacity-90",
      info: "bg-info text-info-foreground hover:opacity-90",
      outline: "border-2 border-border bg-transparent hover:bg-accent",
      ghost: "bg-transparent hover:bg-accent",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "destructive"
    | "success"
    | "warning"
    | "info"
    | "outline"
    | "ghost";
  size?: "sm" | "md" | "lg";
}

Button.displayName = "Button";
