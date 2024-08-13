import React from 'react';
import type { Meta } from '@storybook/react';
import { Modal } from '../../Modal/Modal';
import { CreateOperationForm } from '../../Screens/OperationScreen/Create/CreateOperationForm';
import { UpdateOperationForm } from '../../Screens/OperationScreen/Update/UpdateOperationForm';

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;

export const createOperation = {
  args: {
    children: <CreateOperationForm />,
    visible: true,
  },
};

export const updateOperationt = {
  args: {
    children: <UpdateOperationForm />,
    visible: true,
  },
};
