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
      'border-2 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 ',
    secondary:
      'border-2 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-30',
    outline:
      'border-2 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-30',
    tertiary: 'border-2 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-0',
  };

  const colorClasses = {
    primary: isCritical
      ? 'border-critical bg-critical text-white hover:border-criticalAccent hover:bg-criticalAccent disabled:opacity-30 disabled:hover:border-critical disabled:hover:bg-critical disabled:hover:text-white dark:focus:ring-white/80'
      : 'text-white border-primary bg-primary hover:border-primaryAccent hover:bg-primaryAccent disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white',
    secondary: isCritical
      ? 'border-critical bg-critical text-white hover:border-criticalAccent hover:bg-criticalAccent disabled:opacity-30 disabled:hover:border-critical disabled:hover:bg-critical disabled:hover:text-white dark:focus:ring-white/80'
      : 'border-secondary bg-secondary text-white hover:border-secondaryAccent hover:bg-secondaryAccent focus:ring-primary/80 disabled:hover:border-secondary disabled:hover:bg-secondary disabled:hover:text-white dark:focus:ring-white/80',
    outline: isCritical
      ? 'text-critical border-critical hover:border-criticalAccent hover:text-criticalAccent'
      : 'border-muted1 bg-transparent text-text hover:text-slate-500 focus:text-white focus:ring-orange-400/80 focus:ring-offset-0 disabled:hover:text-text dark:focus:ring-white/80',
    tertiary: isCritical
      ? 'text-critical border-transparent bg-transparent hover:bg-critical/5 focus:bg-heading/5 focus:ring-heading/80 disabled:hover:bg-transparent disabled:hover:text-critical'
      : 'text-text border-transparent bg-transparent hover:bg-heading/5 focus:bg-heading/5 focus:ring-heading/80 disabled:hover:bg-transparent disabled:hover:text-text',
  };

  const baseClass = 'rounded-xl transition-colors duration-300';
  const iconSizes = size === 'small' ? 'h-4 w-4' : 'h-5 w-5';
  const sizeClass = sizeClasses[size];
  const variantClass = variantClasses[variant];
  const colorClass = colorClasses[variant];

  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${colorClass}`}
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
