import { ReactNode, useEffect } from 'react';

import './index.css';
import '../../themes/default.css';

export const ThemeProvider = ({ children, id }: ThemeProviderProps) => {
  useEffect(() => {
    const theme = document.querySelector('html');

    if (theme) {
      theme.setAttribute('data-theme', id);
    }
  }, [id]);

  return (
    <div className="text-text font-base antialiased" id={`theme-default`} data-theme="default">
      {children}
    </div>
  );
};

export interface ThemeProviderProps {
  children: ReactNode;
  id: string;
}
