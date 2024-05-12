export const tableData: TableDataProp[] = [
  {
    client: 'John Doe',
    createdAt: '2024-04-01T00:00:00Z',
    email: 'john.doe@test.com',
    id: '1',
    paymentMethod: {
      icon: 'credit-card',
      id: '1',
      lastFour: '1234',
      name: 'Visa',
    },
  },
  {
    client: 'Jane Doe',
    createdAt: '2023-06-01T00:00:00Z',
    email: 'jane.doe@test.com',
    id: '2',
    paymentMethod: {
      icon: 'credit-card',
      id: '2',
      lastFour: '5678',
      name: 'Mastercard',
    },
  },
  {
    client: 'John Smith',
    createdAt: '2022-06-01T00:00:00Z',
    email: 'john.smith@test.com',
    id: '3',
    paymentMethod: {
      icon: 'credit-card',
      id: '3',
      lastFour: '9012',
      name: 'American Express',
    },
  },
];

export interface TableDataProp {
  client: string;
  createdAt: string;
  email: string;
  id: string;
  paymentMethod: TablePaymentMethod;
}

export type TablePaymentMethod = {
  icon: string;
  id: string;
  lastFour: string;
  name: string;
};
