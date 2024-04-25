import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { Checkbox } from '@jrock2004/component-library';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  args: {
    disabled: false,
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'radio',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 'terms-and-conditions',
    children: 'I agree to the terms and conditions',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', { name: /I agree to the terms and conditions/i });
    await expect(checkbox).toBeInTheDocument();
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
  },
};
