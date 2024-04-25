import { HTMLAttributes, ReactNode } from "react";

export const TableHeadRow = ({ children, ...rest }: TableHeadRowProps) => {
  return (
    <tr className="m-0 border-t p-0 even:bg-slate-400" {...rest}>
      {children}
    </tr>
  );
};

export interface TableHeadRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}
