import type {Meta, StoryObj} from '@storybook/react';
import { AuthForm } from './AuthForm';
import { SingUpForm } from '../../Screens/AuthScreen/SignUpForm/SignUpForm';

const meta: Meta<typeof AuthForm> = {
  component: SingUpForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AuthForm>;

export const Basic: Story = { args: {} };