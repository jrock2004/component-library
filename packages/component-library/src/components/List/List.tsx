import { HTMLAttributes, ReactNode } from "react";

export const List = ({ children, ...rest }: ListProps) => {
  return (
    <ul
      className="my-6 ml-6 list-disc [&>li]:mt-2 font-base text-slate-700 dark:text-slate-400"
      {...rest}
    >
      {children}
    </ul>
  );
};

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}
