import { ChangeEventHandler, InputHTMLAttributes } from 'react';

export const Input = ({ id, label, onChange, size, value, ...rest }: InputProps) => {
  return (
    <div className="group relative w-56">
      <input
        className="peer h-10 w-full bg-gray-100 px-4 text-sm outline-none"
        id={id}
        onChange={onChange}
        {...rest}
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-0 flex h-full transform items-center pl-2 text-sm transition-all group-focus-within:h-1/2 group-focus-within:-translate-y-full group-focus-within:pl-0 group-focus-within:text-xs peer-valid:h-1/2 peer-valid:-translate-y-full peer-valid:pl-0 peer-valid:text-xs"
      >
        {label}
      </label>
    </div>
  );
};

export type Size = 'small' | 'medium';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  id: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  size?: Size;
  value: string;
}
