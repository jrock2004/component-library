import { HTMLAttributes, ReactNode } from 'react';

export const TableBodyItem = ({ children, ...rest }: TableBodyItemProps) => {
  return (
    <td className="text-heading whitespace-nowrap px-4 py-3" {...rest}>
      {children}
    </td>
  );
};

export interface TableBodyItemProps extends HTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}
