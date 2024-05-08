import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@jrock2004/component-library';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    docs: {
      description: {
        component:
          "Typography works by principle of accessibility before aesthetics. Therefore the text should be readable and help the user understand what's important by well contrasted size and colors hierarchy.",
      },
    },
    layout: 'centered',
  },
  args: {
    component: 'span',
  },
  argTypes: {
    component: {
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'span', 'div'],
      control: {
        type: 'select',
      },
    },
    variant: {
      options: ['large', 'small', 'muted'],
      control: {
        type: 'select',
      },
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    children: 'Heading 1',
    component: 'h1',
  },
};

export const Variant: Story = {
  args: {
    children: 'Variant text',
    variant: 'muted',
  },
};
