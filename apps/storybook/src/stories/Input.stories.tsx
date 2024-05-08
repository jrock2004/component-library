import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { InboxIcon } from '@heroicons/react/24/outline';

import { Input } from '@jrock2004/component-library';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Email',
    onChange: fn(),
    placeholder: 'john@doe.com',
    type: 'email',
    value: '',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 'primary-input',
  },
};

export const WithHelperText: Story = {
  args: {
    helperText: 'This is some helper text',
    id: 'helper-text-input',
  },
};

export const WithError: Story = {
  args: {
    errorText: 'This is an error message',
    id: 'error-input',
  },
};

export const WithHelperTextAndError: Story = {
  args: {
    errorText: 'This is an error message',
    helperText: 'This is some helper text',
    id: 'helper-text-error-input',
  },
};

export const WithStartIcon: Story = {
  args: {
    id: 'start-icon-input',
    startIcon: <InboxIcon className="h-4 w-4" />,
  },
};

export const WithEndIcon: Story = {
  args: {
    endIcon: <InboxIcon className="h-4 w-4" />,
    id: 'end-icon-input',
  },
};
