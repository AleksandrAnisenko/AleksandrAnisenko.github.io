import type { Meta } from '@storybook/react';

import { OperationView } from './OperationView';

const meta: Meta<typeof OperationView> = {
  title: 'Example/OperationView',
  component: OperationView,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    amount: { control: 'number' },
    category: { control: 'text' },
    name: { control: 'text' },
    desc: { control: 'text' },
    createdAt: { control: 'text' },
  },
};

export default meta;

export const MainOperationView = {
  args: {
    id: '01',
    amount: 999.0,
    category: 'Категория 1',
    name: 'Имя операции 1',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing...',
    createdAt: '2024-03-30',
  },
};