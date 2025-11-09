import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { Alert, AlertDescription, AlertProps, AlertTitle } from ".";

const meta = {
  title: "Component/Alert",
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
  },
  render: (args) => {
    return (
      <Alert variant={args.variant}>
        <AlertTitle>Test title</AlertTitle>
        <AlertDescription>This is a default alert message</AlertDescription>
      </Alert>
    );
  },
};
