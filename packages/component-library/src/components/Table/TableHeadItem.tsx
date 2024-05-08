import { HTMLAttributes, ReactNode } from 'react';

export const TableHeadItem = ({ children, ...rest }: TableHeadItemProps) => {
  return (
    <th
      className="bg-layer2 text-text whitespace-nowrap px-4 py-3 text-left font-semibold"
      {...rest}
    >
      {children}
    </th>
  );
};

export interface TableHeadItemProps extends HTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}
