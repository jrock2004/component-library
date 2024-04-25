import { LiHTMLAttributes, ReactNode } from "react";

export const ListItem = ({ children, ...rest }: ListItemProps) => {
  return (
    <li className="font-base text-slate-700 dark:text-slate-400" {...rest}>
      {children}
    </li>
  );
};

export interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}
