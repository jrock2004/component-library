import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { AspectRatio } from ".";

const meta = {
  title: "Component/AspectRatio",
  component: AspectRatio,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => {
    return (
      <div className="w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px] shadow-blackA4">
        <AspectRatio {...args}>
          <img
            className="size-full object-cover"
            src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
            alt="Landscape photograph by Tobias Tullius"
          />
        </AspectRatio>
      </div>
    );
  },
};
