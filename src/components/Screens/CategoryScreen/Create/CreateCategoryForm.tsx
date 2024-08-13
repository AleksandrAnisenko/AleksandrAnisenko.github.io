import React, { memo } from 'react';
import { Modal } from '../../../Modal/Modal';
import { Title } from '../../../Forms/Forms/Title/Tytle';
import { CategoryForm } from '../CategoryForm/CategoryForm';

export const CreateCategoryForm = memo(() => {
  return (
    <Modal visible={true}>
      <div>
        <Title className="title">{'Создать Категорию'}</Title>
        <CategoryForm />
      </div>
    </Modal>
  );
});

CreateCategoryForm.displayName = 'CreateCategoryForm';
