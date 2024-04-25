import { HTMLAttributes, ReactNode } from "react";

export const TableBodyRow = ({ children, ...rest }: TableBodyRowProps) => {
  return (
    <tr className="m-0 border-t p-0 even:bg-slate-50" {...rest}>
      {children}
    </tr>
  );
};

export interface TableBodyRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}
