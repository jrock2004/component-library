import React from "react";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "solid" | "dashed" | "dotted";
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    { className = "", orientation = "horizontal", variant = "solid", ...props },
    ref,
  ) => {
    const orientationStyles =
      orientation === "horizontal" ? "w-full h-px" : "h-full w-px";

    const variants = {
      solid: "border-border",
      dashed: "border-border border-dashed",
      dotted: "border-border border-dotted",
    };

    const borderStyle = orientation === "horizontal" ? "border-t" : "border-l";

    return (
      <div
        ref={ref}
        className={`${orientationStyles} ${borderStyle} ${variants[variant]} ${className}`}
        {...props}
      />
    );
  },
);

Divider.displayName = "Divider";
