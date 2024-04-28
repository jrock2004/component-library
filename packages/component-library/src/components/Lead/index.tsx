import { HTMLAttributes, ReactNode } from 'react';

export const Lead = ({ children }: LeadProps) => {
  return <span className="text-text-secondary text-xl">{children}</span>;
};

export interface LeadProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}
