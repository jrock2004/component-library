import { ReactNode } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

export const Button = ({
  children,
  endIcon,
  isDisabled = false,
  isLoading = false,
  onClick,
  size = 'medium',
  startIcon,
  variant = 'primary',
}: ButtonProps) => {
  const sizeClasses = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-2 text-base',
  };

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark active:bg-primary-light',
    secondary:
      'border border-primary text-primary hover:bg-text-hover active:bg-primary-dark active:text-white',
    tertiary: 'bg-transparent hover:bg-secondary-hover active:bg-secondary-focusVisible',
  };

  const baseClass = 'rounded-md transition-colors duration-300';
  const disabledBorder = variant === 'tertiary' ? '' : 'border border-dashed';
  const disabledClass = isDisabled
    ? `${disabledBorder} bg-action-disabledBackground text-action-disabled cursor-not-allowed hover:bg-action-disabledBackground active:bg-action-disabledBackground`
    : '';
  const iconSizes = size === 'small' ? 'h-4 w-4' : 'h-6 w-6';
  const sizeClass = sizeClasses[size];
  const variantClass = variantClasses[variant];

  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${disabledClass}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {isLoading ? (
        <ArrowPathIcon className="h-6 w-6 animate-spin" />
      ) : (
        <div className="flex items-center">
          {startIcon ? <span className={`mr-2 ${iconSizes}`}>{startIcon}</span> : null}
          {children}
          {endIcon ? <span className={`ml-2 ${iconSizes}`}>{endIcon}</span> : null}
        </div>
      )}
    </button>
  );
};

export type Size = 'small' | 'medium';
export type Variant = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps {
  children: ReactNode;
  endIcon?: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
  size?: Size;
  startIcon?: ReactNode;
  variant?: Variant;
}
