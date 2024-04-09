import type { Meta } from '@storybook/react';

import { OperationShortView } from './OperationShortView';

const meta: Meta<typeof OperationShortView> = {
  title: 'Example/OperationSummary',
  component: OperationShortView,
  tags: ['autodocs'],
  argTypes: {
    sum: { control: 'number' },
    category: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;

export const MainOperationSummary = {
  args: {
    sum: 999.0,
    category: 'Покупки',
    title: 'Продукты питания',
    description: 'Покупка продуктов питания.',
  },
};