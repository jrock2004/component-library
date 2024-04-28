import { HTMLAttributes, ReactNode } from 'react';

export const TableBodyRow = ({ children, ...rest }: TableBodyRowProps) => {
  return (
    <tr className="even:bg-info-hover m-0 border-t p-0" {...rest}>
      {children}
    </tr>
  );
};

export interface TableBodyRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}
