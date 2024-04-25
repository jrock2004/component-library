import type { Meta, StoryObj } from "@storybook/react";

import { Lead } from "@jrock2004/component-library";

const meta = {
  title: "Components/Lead",
  component: Lead,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Lead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
};
