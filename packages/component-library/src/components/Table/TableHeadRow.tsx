import { HTMLAttributes, ReactNode } from 'react';

export const TableHeadRow = ({ children, ...rest }: TableHeadRowProps) => {
  return (
    <tr className="even:bg-info-hover m-0 border-t p-0" {...rest}>
      {children}
    </tr>
  );
};

export interface TableHeadRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}
