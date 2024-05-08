import { HTMLAttributes, ReactNode } from 'react';

export const TableHeadRow = ({ children, ...rest }: TableHeadRowProps) => {
  return <tr {...rest}>{children}</tr>;
};

export interface TableHeadRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}
