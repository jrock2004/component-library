import React from "react";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  onCheckedChange?: (checked: boolean) => void;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className = "", onCheckedChange, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onCheckedChange?.(e.target.checked);
      onChange?.(e);
    };

    return (
      <div className="relative inline-flex items-center">
        <input
          ref={ref}
          type="radio"
          className="peer sr-only"
          onChange={handleChange}
          {...props}
        />
        <div
          className={`w-5 h-5 border-2 border-border rounded-full bg-background peer-checked:border-primary peer-focus:ring-2 peer-focus:ring-ring transition-all duration-200 cursor-pointer flex items-center justify-center ${className}`}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-200" />
        </div>
      </div>
    );
  },
);

Radio.displayName = "Radio";
