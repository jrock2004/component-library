import { ReactNode } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

export const Button = ({
  children,
  endIcon,
  isDisabled = false,
  isLoading = false,
  isCritical,
  onClick,
  size = 'medium',
  startIcon,
  variant = 'primary',
}: ButtonProps) => {
  const sizeClasses = {
    small: 'px-3 py-2 text-xs',
    medium: 'px-4 py-2.5 text-base',
  };

  const variantClasses = {
    primary:
      'border-2 bg-primary text-white font-semibold border-primary shadow-sm hover:border-primaryAccent hover:bg-primaryAccent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white',
    secondary:
      'border-2 border-secondary bg-secondary font-semibold text-white shadow-sm hover:border-secondaryAccent hover:bg-secondaryAccent focus:outline-none focus:ring-2 focus:ring-primary/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-secondary disabled:hover:bg-secondary disabled:hover:text-white dark:focus:ring-white/80',
    outline:
      'border-2 border-muted2 bg-transparent font-semibold shadow-sm hover:bg-muted2 focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text dark:focus:ring-white/80',
    tertiary:
      'border-2 border-transparent bg-transparent font-semibold hover:bg-heading/5 focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text',
  };

  const baseClass = 'rounded-xl transition-colors duration-300';
  const iconSizes = size === 'small' ? 'h-4 w-4' : 'h-5 w-5';
  const sizeClass = sizeClasses[size];
  const variantClass = variantClasses[variant];

  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass}${isCritical ? ' border-critical bg-critical hover:border-criticalAccent hover:bg-criticalAccent disabled:hover:border-critical disabled:hover:bg-critical' : ''}`}
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
export type Variant = 'primary' | 'secondary' | 'outline' | 'tertiary';

export interface ButtonProps {
  children: ReactNode;
  endIcon?: ReactNode;
  isCritical?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
  size?: Size;
  startIcon?: ReactNode;
  variant?: Variant;
}
