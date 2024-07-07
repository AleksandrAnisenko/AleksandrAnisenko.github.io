import type {Meta, StoryObj} from '@storybook/react';
import { ProfileForm } from './ProfileForm';
import { ProfileScreenForm } from '../../Screens/ProfileScreen/ProfileScreenForm';

const meta: Meta<typeof ProfileForm> = {
  component: ProfileScreenForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProfileForm>;

export const Basic: Story = { args: {} };