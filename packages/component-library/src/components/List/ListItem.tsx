import { LiHTMLAttributes, ReactNode } from 'react';

export const ListItem = ({ children, ...rest }: ListItemProps) => {
  return <li {...rest}>{children}</li>;
};

export interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}
