import React, { memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal } from '../../../Modal/Modal';
import { Title } from '../../../Forms/Forms/Title/Tytle';
import { CategoryForm } from '../CategoryForm/CategoryForm';

export const UpdateCategoryForm = memo(() => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Modal visible={true}>
      <div>
        <Title className="title">{'Редактировать Категорию'}</Title>
        <CategoryForm id={params.id} />
      </div>
    </Modal>
  );
});

UpdateCategoryForm.displayName = 'UpdateCategoryForm';
