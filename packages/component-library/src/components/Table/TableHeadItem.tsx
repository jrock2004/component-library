import { HTMLAttributes, ReactNode } from 'react';

export const TableHeadItem = ({ children, ...rest }: TableHeadItemProps) => {
  return (
    <th
      className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
      {...rest}
    >
      {children}
    </th>
  );
};

export interface TableHeadItemProps extends HTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}
