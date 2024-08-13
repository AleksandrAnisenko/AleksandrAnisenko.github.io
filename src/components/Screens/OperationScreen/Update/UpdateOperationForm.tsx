import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { OperationForm } from '../../../Forms/OperationForm/OperationForm';
import { Modal } from '../../../Modal/Modal';
import { Title } from '../../../Forms/Forms/Title/Tytle';

export const UpdateOperationForm = memo(() => {
  const params = useParams();

  return (
    <Modal visible={true}>
      <div>
        <Title className="title">{'Создать Операцию'}</Title>
        <OperationForm id={params.id} />
      </div>
    </Modal>
  );
});

UpdateOperationForm.displayName = 'UpdateOperationForm';
