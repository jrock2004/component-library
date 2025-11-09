import React from "react";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "destructive"
    | "info";
  showLabel?: boolean;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className = "",
      value = 0,
      max = 100,
      variant = "primary",
      showLabel = false,
      ...props
    },
    ref,
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const variants = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      success: "bg-success",
      warning: "bg-warning",
      destructive: "bg-destructive",
      info: "bg-info",
    };

    return (
      <div ref={ref} className={`relative ${className}`} {...props}>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full ${variants[variant]} transition-all duration-300`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showLabel && (
          <span className="text-sm text-muted-foreground mt-1 block">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    );
  },
);

Progress.displayName = "Progress";
