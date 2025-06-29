import type { ButtonHTMLAttributes, ReactNode } from "react";
import "../../tailwind.generated.css";

export const Button = ({ children }: ButtonProps): ReactNode => {
  return <button className="text-7xl">{children}</button>;
};

export interface ButtonProps {
  children: ReactNode;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
