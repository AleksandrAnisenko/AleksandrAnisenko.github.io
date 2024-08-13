import React, { memo } from 'react';
import { OperationForm } from '../../../Forms/OperationForm/OperationForm';
import { Modal } from '../../../Modal/Modal';
import { Title } from '../../../Forms/Forms/Title/Tytle';

export const CreateOperationForm = memo(() => {
  return (
    <Modal visible={true}>
      <div>
        <Title className="title">{'Создать Операцию'}</Title>
        <OperationForm />
      </div>
    </Modal>
  );
});

CreateOperationForm.displayName = 'CreateOperationForm';
