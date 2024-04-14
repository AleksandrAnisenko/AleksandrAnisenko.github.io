import type { Meta } from '@storybook/react';

import { OperationView } from './OperationView';

const meta: Meta<typeof OperationView> = {
  title: 'Example/OperationView',
  component: OperationView,
  tags: ['autodocs'],
  argTypes: {
    sum: { control: 'number' },
    category: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    date: { control: 'text' },
  },
};

export default meta;

export const MainOperationView = {
  args: {
    sum: 999.0,
    category: 'Покупки',
    title: 'Продукты питания',
    description: 'Покупка продуктов питания.',
    date: '2024-03-30',
  },
};