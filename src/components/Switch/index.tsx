import React, { useState } from "react";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  onCheckedChange?: (checked: boolean) => void;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      className = "",
      checked: controlledChecked,
      onCheckedChange,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [internalChecked, setInternalChecked] = useState(false);
    const isControlled = controlledChecked !== undefined;
    const isChecked = isControlled ? controlledChecked : internalChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked;

      if (!isControlled) {
        setInternalChecked(newChecked);
      }

      onCheckedChange?.(newChecked);
      onChange?.(e);
    };

    return (
      <label
        className={`relative inline-flex items-center cursor-pointer ${className}`}
      >
        <input
          ref={ref}
          type="checkbox"
          className="sr-only peer"
          checked={isChecked}
          onChange={handleChange}
          {...props}
        />
        <div className="w-11 h-6 bg-switch-background peer-focus:ring-2 peer-focus:ring-ring rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
    );
  },
);

Switch.displayName = "Switch";
