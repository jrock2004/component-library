import React from "react";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    { className = "", variant = "rectangular", width, height, style, ...props },
    ref,
  ) => {
    const variants = {
      text: "rounded h-4",
      circular: "rounded-full",
      rectangular: "rounded-lg",
    };

    const computedStyle = {
      width: width,
      height: height || (variant === "text" ? "1rem" : undefined),
      ...style,
    };

    return (
      <div
        ref={ref}
        className={`bg-muted animate-pulse ${variants[variant]} ${className}`}
        style={computedStyle}
        {...props}
      />
    );
  },
);

Skeleton.displayName = "Skeleton";
