import React from "react";
import { Check } from "lucide-react";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = "", onCheckedChange, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onCheckedChange?.(e.target.checked);
      onChange?.(e);
    };

    return (
      <div className="relative inline-flex items-center">
        <input
          ref={ref}
          type="checkbox"
          className="peer sr-only"
          onChange={handleChange}
          {...props}
        />
        <div
          className={`w-5 h-5 border-2 border-border rounded bg-background peer-checked:bg-primary peer-checked:border-primary peer-focus:ring-2 peer-focus:ring-ring transition-all duration-200 cursor-pointer flex items-center justify-center ${className}`}
        >
          <Check className="w-3 h-3 text-primary-foreground opacity-0 peer-checked:opacity-100 transition-opacity duration-200" />
        </div>
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
