import type { Preview } from '@storybook/react';
import React from 'react';
import { BlogThemeProvider } from '../src/contexts/BlogThemeContext';
import { GlobalStyles } from '../src/styles/global-styles';
import { theme } from '../src/styles/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: theme.colors.white,
        },
        {
          name: 'dark',
          value: theme.colors.primary,
        },
      ],
    },
  },
};

type StoryType = () => JSX.Element;
export const decorators = [
  (Story: StoryType) => (
    <BlogThemeProvider >
      <Story />
      <GlobalStyles colors={{}} font={{}} media={{}} spacings={{}} sizes={{}} name={''} />
    </BlogThemeProvider>
  ),
];

export default preview;
