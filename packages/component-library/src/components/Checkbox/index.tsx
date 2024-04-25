import { InputHTMLAttributes, ReactNode } from 'react';

export const Checkbox = ({ children, disabled, id, size = 'md', ...rest }: CheckboxProps) => {
  const base =
    'text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 hover:cursor-pointer dark:bg-gray-700 dark:border-gray-600';
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
        className={`${labelClasses} select-none font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:cursor-pointer`}
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
