import { HTMLAttributes, ReactNode } from 'react';

export const TableBodyRow = ({ children, ...rest }: TableBodyRowProps) => {
  return (
    <tr className="odd:bg-layer3 even:bg-layer2" {...rest}>
      {children}
    </tr>
  );
};

export interface TableBodyRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}
