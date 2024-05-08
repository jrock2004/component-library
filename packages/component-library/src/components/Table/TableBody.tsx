import { HTMLAttributes, ReactNode } from 'react';

export const TableBody = ({ children, ...rest }: TableBodyProps) => {
  return (
    <tbody className="text-sm font-medium" {...rest}>
      {children}
    </tbody>
  );
};

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}
