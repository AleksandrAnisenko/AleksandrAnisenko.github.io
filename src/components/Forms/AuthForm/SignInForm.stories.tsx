import type {Meta, StoryObj} from '@storybook/react';
import { AuthForm } from './AuthForm';
import { SingInForm } from '../../Screens/AuthScreen/SignInForm/SignInForm';

const meta: Meta<typeof AuthForm> = {
  component: SingInForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AuthForm>;

export const Basic: Story = { args: {} };