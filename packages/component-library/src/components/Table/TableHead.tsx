import { HTMLAttributes, ReactNode } from 'react';

export const TableHead = ({ children, ...rest }: TableHeadProps) => {
  return (
    <thead className="text-text text-xs font-semibold uppercase" {...rest}>
      {children}
    </thead>
  );
};

export interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}
