import type { Meta } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Example/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    visible: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;

export const MainModal = {
  args: {
    visible: true,
    children: 'ModalText',
  },
};
