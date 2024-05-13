import React from 'react';
import type { Preview, StoryContext } from '@storybook/react';
import { useMemo } from 'react';
import { ThemeProvider } from '@jrock2004/component-library';

import '@jrock2004/component-library/dist/index.css';

const THEMES = {
  default: 'default',
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    title: 'Theme',
    description: 'Theme for your components',
    defaultValue: 'default',
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      items: [{ value: 'default', title: 'Default Theme' }],
    },
  },
};

const isDarkThemePreferred2 = globalThis
  ? globalThis.matchMedia('(prefers-color-scheme: dark)').matches
  : false;

export const withTheme = (Story, context: StoryContext) => {
  const { theme: themeKey } = context.globals;
  const theme = useMemo(() => THEMES[themeKey] || THEMES['default'], [themeKey]);

  return (
    <ThemeProvider id={theme}>
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withTheme];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: isDarkThemePreferred2 ? 'Dark Mode' : 'Light Mode',
      values: [
        {
          name: 'Light Mode',
          value: 'rgb(246 246 250)',
        },
        {
          name: 'Dark Mode',
          value: 'rgb(26 29 45)',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
