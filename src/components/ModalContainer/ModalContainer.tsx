import React, { ChangeEvent, ReactNode, useState } from 'react';
import style from'./ModalContainer.module.scss';
import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';
import { useTranslation } from 'react-i18next';


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
      <input placeholder='Modal Text' value={modalText} onChange={onModalTextChange} />
      <Button onClick={toggleModalVisible}>
        {t`buttons.openModal`}
      </Button>
      <Modal visible={modalVisible}>
        {modalText}
      </Modal>
    </div>
  );
};