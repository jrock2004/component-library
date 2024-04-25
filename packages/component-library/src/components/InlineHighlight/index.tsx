import { HTMLAttributes, ReactNode } from "react";

export const InlineHighlight = ({ children }: InlineHighlightProps) => {
  return (
    <code className="relative rounded bg-slate-400 px-[0.3rem] py-[0.2rem] font-base text-sm font-semibold">
      {children}
    </code>
  );
};

export interface InlineHighlightProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}
