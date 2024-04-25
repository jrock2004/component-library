import { HTMLAttributes, ReactNode } from "react";

export const Lead = ({ children }: LeadProps) => {
  return <span className="text-xl text-slate-400 font-base">{children}</span>;
};

export interface LeadProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}
