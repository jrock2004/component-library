import { HTMLAttributes, ReactNode } from 'react';

export const Table = ({ children, ...rest }: TableProps) => {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full" {...rest}>
        {children}
      </table>
    </div>
  );
};

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children: ReactNode;
}
