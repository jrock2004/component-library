import type { Preview } from "@storybook/react-vite";
import "../dist/styles/global.css";
import "../dist/themes/ocean.css";
import "../dist/themes/rose.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },

  globalTypes: {
    theme: {
      name: "Theme",
      description: "Design theme",
      toolbar: {
        icon: "paintbrush",
        items: ["base", "ocean", "rose"],
      },
    },
    mode: {
      name: "Mode",
      description: "Color mode",
      defaultValue: "system",
      toolbar: { icon: "mirror", items: ["light", "dark", "system"] },
    },
  },

  initialGlobals: {
    theme: "base",
    mode: "system",
  },

  decorators: [
    (Story, { globals }) => {
      const root = document.documentElement;

      // Set theme on <html data-theme="...">
      root.setAttribute("data-theme", globals.theme as string);

      // Resolve dark mode
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const isDark =
        globals.mode === "dark" || (globals.mode === "system" && prefersDark);

      root.classList.toggle("dark", Boolean(isDark));

      return Story();
    },
  ],
};

export default preview;
