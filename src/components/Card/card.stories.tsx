import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardProps,
  CardTitle,
} from ".";
import { Button } from "../Button";

const meta = {
  title: "Component/Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    className: {
      control: "text",
      description: "Custom tailwindcss class names",
    },
    hover: {
      control: "boolean",
      description: "Show a hover action when you mouse over it",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    hover: true,
  },
  render(args) {
    return (
      <Card {...args}>
        <CardHeader>
          <CardTitle>Chat GPT</CardTitle>
          <CardDescription>Description of the card</CardDescription>
        </CardHeader>
        <CardContent>
          Create quality content fast — Write better, faster with ChatGPT - sign
          up and try the ultimate AI writing assistant. Transform your writing
          with ChatGPT. Sign up for free and get started now. Help on any task
          with AI.
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    );
  },
};
