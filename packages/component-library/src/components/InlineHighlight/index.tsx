import { HTMLAttributes, ReactNode } from 'react';

export const InlineHighlight = ({ children }: InlineHighlightProps) => {
  return (
    <code className="bg-info-light relative rounded px-[0.3rem] py-[0.2rem] text-sm font-semibold">
      {children}
    </code>
  );
};

export interface InlineHighlightProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}
