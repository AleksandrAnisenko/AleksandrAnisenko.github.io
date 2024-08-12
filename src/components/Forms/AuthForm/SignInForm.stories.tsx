import type { Meta, StoryObj } from '@storybook/react';
import { SingInForm } from '../../Screens/AuthScreen/SignInForm/SignInForm';
import { AuthForm } from './AuthForm';

const meta: Meta<typeof AuthForm> = {
  component: SingInForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AuthForm>;

export const Basic: Story = { args: {} };
