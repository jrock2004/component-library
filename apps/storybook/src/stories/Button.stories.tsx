import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from '@heroicons/react/24/outline';

import { Button } from '@jrock2004/component-library';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    isCritical: false,
    isDisabled: false,
    isLoading: false,
    onClick: fn(),
    size: 'medium',
  },
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['primary', 'secondary', 'outline', 'tertiary'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Button',
    variant: 'tertiary',
  },
};

export const IconButton: Story = {
  args: {
    children: <TrashIcon className="h-6 w-6" />,
  },
};

export const StartIcon: Story = {
  args: {
    children: 'Button',
    startIcon: <ChevronLeftIcon />,
  },
};

export const EndIcon: Story = {
  args: {
    children: 'Button',
    endIcon: <ChevronRightIcon />,
  },
};

export const StartAndEndIcon: Story = {
  args: {
    children: 'Button',
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};
