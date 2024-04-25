import type { Meta, StoryObj } from "@storybook/react";

import { List, ListItem } from "@jrock2004/component-library";

const meta = {
  title: "Components/List",
  component: List,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "list",
    children: (
      <>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </>
    ),
  },
};
