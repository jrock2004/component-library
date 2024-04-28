import { InputHTMLAttributes, ReactNode } from 'react';

export const Checkbox = ({ children, disabled, id, size = 'md', ...rest }: CheckboxProps) => {
  // const base =
  //   'text-red-100 bg-gray-100 border-action-active rounded focus:ring-blue-500 focus:ring-2 hover:cursor-pointer';
  const base =
    'accent-primary disabled:accent-action-disabled disabled:cursor-not-allowed hover:ring-4 hover:ring-slate-300 focus:ring-accent-primary focus:ring-offset-0';
  let sizeClasses = '';
  let labelClasses = 'text-sm';

  switch (size) {
    case 'sm':
      sizeClasses = 'h-4 w-4';
      break;
    case 'md':
      sizeClasses = 'h-6 w-6';
      labelClasses = 'text-base';
      break;
    default:
      sizeClasses = 'h-6 w-6';
      labelClasses = 'text-base';
      break;
  }

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        disabled={disabled}
        id={id}
        className={`${base} ${sizeClasses}`}
        {...rest}
      />
      <label
        htmlFor={id}
        className={`${labelClasses} select-none font-medium leading-none hover:cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
      >
        {children}
      </label>
    </div>
  );
};

export type CheckboxSize = 'sm' | 'md';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  children: ReactNode;
  disabled?: boolean;
  id: string;
  size?: CheckboxSize;
}
