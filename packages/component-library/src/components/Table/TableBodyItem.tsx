import { HTMLAttributes, ReactNode } from 'react';

export const TableBodyItem = ({ children, ...rest }: TableBodyItemProps) => {
  return (
    <td
      className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      {...rest}
    >
      {children}
    </td>
  );
};

export interface TableBodyItemProps extends HTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}
