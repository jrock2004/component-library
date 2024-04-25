import type { Meta, StoryObj } from "@storybook/react";

import {
  Table,
  TableBodyItem,
  TableBodyRow,
  TableHeadItem,
  TableHeadRow,
} from "@jrock2004/component-library";

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "list",
    children: (
      <>
        <thead>
          <TableHeadRow>
            <TableHeadItem>First Name</TableHeadItem>
            <TableHeadItem>Last Name</TableHeadItem>
            <TableHeadItem>Email</TableHeadItem>
            <TableHeadItem>Age</TableHeadItem>
          </TableHeadRow>
        </thead>
        <tbody>
          <TableBodyRow>
            <TableBodyItem>Josh</TableBodyItem>
            <TableBodyItem>Allen</TableBodyItem>
            <TableBodyItem>john.allen@test.com</TableBodyItem>
            <TableBodyItem>27</TableBodyItem>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyItem>Greg</TableBodyItem>
            <TableBodyItem>Smith</TableBodyItem>
            <TableBodyItem>greg.smith@test.com</TableBodyItem>
            <TableBodyItem>21</TableBodyItem>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyItem>Micha</TableBodyItem>
            <TableBodyItem>Hyde</TableBodyItem>
            <TableBodyItem>micha.hyde@test.com</TableBodyItem>
            <TableBodyItem>37</TableBodyItem>
          </TableBodyRow>
        </tbody>
      </>
    ),
  },
};
