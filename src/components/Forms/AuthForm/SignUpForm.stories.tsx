import type { Meta, StoryObj } from '@storybook/react';
import { SingUpForm } from '../../Screens/AuthScreen/SignUpForm/SignUpForm';
import { AuthForm } from './AuthForm';

const meta: Meta<typeof AuthForm> = {
  component: SingUpForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AuthForm>;

export const Basic: Story = { args: {} };
