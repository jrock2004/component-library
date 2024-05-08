import { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react';

export const Input = ({
  endIcon,
  errorText,
  helperText,
  id,
  label,
  onChange,
  size = 'small',
  startIcon,
  value,
  ...rest
}: InputProps) => {
  const type = rest.type || 'text';
  let labelClass = 'block text-sm font-semibold text-heading';
  let inputClass =
    'mt-2 block w-full rounded-xl border-2 border-muted3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-md';

  if (errorText) {
    inputClass += ' border-red-500';
  }

  if (startIcon) {
    inputClass += ' pl-11';
  }

  if (endIcon) {
    inputClass += ' pr-11';
  }

  return (
    <div className="">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div className="relative">
        {startIcon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex flex-shrink-0 items-center pl-4 focus-within:z-20">
            {startIcon}
          </div>
        )}
        <input
          className={inputClass}
          id={id}
          name={id}
          aria-describedby={`${id}:helper`}
          aria-invalid={!!errorText}
          onChange={onChange}
          type={type}
          {...rest}
        />
        {endIcon && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex flex-shrink-0 items-center pr-4 focus-within:z-20">
            {endIcon}
          </div>
        )}
      </div>
      {errorText && (
        <p aria-live="polite" id={`${id}:error`} className="mt-2 text-xs font-medium text-red-400">
          {errorText}
        </p>
      )}
      {helperText && (
        <p aria-live="polite" id={`${id}:helper`} className="text-text mt-2 text-xs font-medium">
          {helperText}
        </p>
      )}
    </div>
  );
};

export type Size = 'small';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  endIcon?: ReactNode;
  errorText?: string;
  helperText?: string;
  id: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  size?: Size;
  startIcon?: ReactNode;
  value: string;
}
