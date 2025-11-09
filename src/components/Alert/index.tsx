import React from "react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive" | "success" | "warning" | "info";
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className = "", variant = "default", children, ...props }, ref) => {
    const baseStyles = "rounded-lg border p-4";

    const variants = {
      default: "border-border bg-card text-card-foreground",
      destructive: "border-destructive/50 bg-destructive/10 text-destructive",
      success: "border-success/50 bg-success/10 text-success",
      warning: "border-warning/50 bg-warning/10 text-warning",
      info: "border-info/50 bg-info/10 text-info",
    };

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        role="alert"
        {...props}
      >
        {children}
      </div>
    );
  },
);

Alert.displayName = "Alert";

export const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className = "", ...props }, ref) => {
  return <h5 ref={ref} className={`mb-1 ${className}`} {...props} />;
});

AlertTitle.displayName = "AlertTitle";

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className = "", ...props }, ref) => {
  return (
    <p ref={ref} className={`text-sm opacity-90 ${className}`} {...props} />
  );
});

AlertDescription.displayName = "AlertDescription";
