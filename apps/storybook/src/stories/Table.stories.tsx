import type { Meta, StoryObj } from '@storybook/react';
import { CreditCardIcon } from '@heroicons/react/24/outline';

import {
  Table,
  TableBody,
  TableBodyItem,
  TableBodyRow,
  TableHead,
  TableHeadItem,
  TableHeadRow,
  formatDate,
} from '@jrock2004/component-library';

import { TablePaymentMethod, tableData } from './data/table';
import { TableDataProp } from './data/table';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const PaymentMethod = ({ paymentMethod }: { paymentMethod: TablePaymentMethod }) => {
  return (
    <div className="flex w-full justify-between">
      <div>
        <CreditCardIcon className="h-5 w-5" />
      </div>
      <div className="ml-2">•••• {paymentMethod.lastFour}</div>
    </div>
  );
};

export const Primary: Story = {
  args: {
    id: 'list',
    children: (
      <>
        <TableHead>
          <TableHeadRow>
            <TableHeadItem>Client</TableHeadItem>
            <TableHeadItem>Email</TableHeadItem>
            <TableHeadItem>Payment Method</TableHeadItem>
            <TableHeadItem>Created</TableHeadItem>
          </TableHeadRow>
        </TableHead>
        <TableBody>
          {tableData.map((data: TableDataProp) => (
            <TableBodyRow key={data.id}>
              <TableBodyItem>{data.client}</TableBodyItem>
              <TableBodyItem>{data.email}</TableBodyItem>
              <TableBodyItem>
                <PaymentMethod paymentMethod={data.paymentMethod} />
              </TableBodyItem>
              <TableBodyItem>{formatDate(data.createdAt)}</TableBodyItem>
            </TableBodyRow>
          ))}
        </TableBody>
      </>
    ),
  },
};
