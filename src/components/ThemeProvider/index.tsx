import * as React from "react";
export type ThemeName = "base" | "ocean" | "rose";
export type Mode = "light" | "dark" | "system";
const THEME_KEY = "twlib.theme";
const MODE_KEY = "twlib.mode";

const resolveMode = (m: Mode) =>
  m !== "system"
    ? m
    : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

function apply(theme: ThemeName, mode: Mode) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.classList.toggle("dark", resolveMode(mode) === "dark");
}

export const ThemeContext = React.createContext<{
  setTheme(t: ThemeName): void;
  setMode(m: Mode): void;
} | null>(null);

export function ThemeProvider({
  theme = "base",
  mode = "system",
  children,
}: React.PropsWithChildren<{ theme?: ThemeName; mode?: Mode }>) {
  React.useLayoutEffect(() => {
    const t = (localStorage.getItem(THEME_KEY) as ThemeName) ?? theme;
    const m = (localStorage.getItem(MODE_KEY) as Mode) ?? mode;
    apply(t, m);
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const stored = (localStorage.getItem(MODE_KEY) as Mode) ?? mode;
      if (stored === "system")
        apply(
          (localStorage.getItem(THEME_KEY) as ThemeName) ?? theme,
          "system",
        );
    };
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, [theme, mode]);

  const setTheme = React.useCallback(
    (t: ThemeName) => {
      localStorage.setItem(THEME_KEY, t);
      apply(t, (localStorage.getItem(MODE_KEY) as Mode) ?? mode);
    },
    [mode],
  );

  const setMode = React.useCallback(
    (m: Mode) => {
      localStorage.setItem(MODE_KEY, m);
      apply((localStorage.getItem(THEME_KEY) as ThemeName) ?? theme, m);
    },
    [theme],
  );

  return (
    <ThemeContext.Provider value={{ setTheme, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
