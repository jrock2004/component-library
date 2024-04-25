import { HTMLAttributes, ReactNode } from "react";

export const Table = ({ children, ...rest }: TableProps) => {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table
        className="w-full font-base text-slate-700 dark:text-slate-400"
        {...rest}
      >
        {children}
      </table>
    </div>
  );
};

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children: ReactNode;
}
