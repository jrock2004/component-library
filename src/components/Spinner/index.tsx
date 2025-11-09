import React from "react";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "muted";
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className = "", size = "md", variant = "primary", ...props }, ref) => {
    const sizes = {
      sm: "w-4 h-4 border-2",
      md: "w-8 h-8 border-2",
      lg: "w-12 h-12 border-3",
    };

    const variants = {
      primary: "border-primary border-t-transparent",
      secondary: "border-secondary border-t-transparent",
      muted: "border-muted-foreground border-t-transparent",
    };

    return (
      <div
        ref={ref}
        className={`${sizes[size]} ${variants[variant]} rounded-full animate-spin ${className}`}
        {...props}
      />
    );
  },
);

Spinner.displayName = "Spinner";
