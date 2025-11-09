import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "filled";
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", variant = "default", error = false, ...props }, ref) => {
    const baseStyles =
      "w-full px-3 py-2 rounded-lg border transition-all duration-200 outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed resize-vertical min-h-[80px]";

    const variants = {
      default: "border-border bg-background",
      filled: "border-border bg-input-background",
    };

    const errorStyles = error
      ? "border-destructive focus:ring-destructive"
      : "";

    return (
      <textarea
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${errorStyles} ${className}`}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";
