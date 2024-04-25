import type { Meta, StoryObj } from "@storybook/react";

import { InlineHighlight } from "@jrock2004/component-library";

const meta = {
  title: "Components/Inline Highlight",
  component: InlineHighlight,
  parameters: {
    docs: {
      description: {
        component: "You want to use this to highlight inline text.",
      },
    },
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof InlineHighlight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Inline Highlighted Text",
  },
};
