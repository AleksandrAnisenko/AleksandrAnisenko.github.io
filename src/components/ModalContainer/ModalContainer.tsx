import React, { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import style from './ModalContainer.module.scss';

export const ModalContainer: React.FC = () => {
  const { t } = useTranslation();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('Modal Text');

  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  const onModalTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setModalText(event.target.value);
  };

  return (
    <div className={style.modal__container}>
      <input placeholder="Modal Text" value={modalText} onChange={onModalTextChange} />
      <Button onClick={toggleModalVisible}>{t`buttons.openModal`}</Button>
      <Modal visible={modalVisible}>{modalText}</Modal>
    </div>
  );
};
