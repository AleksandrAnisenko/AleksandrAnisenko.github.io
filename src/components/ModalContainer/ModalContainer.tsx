import React, { ChangeEvent, ReactNode, useState } from 'react';
import style from'./ModalContainer.module.scss';
import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';


export const ModalContainer: React.FC = () => {

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
        Open Modal
      </Button>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        {modalText}
      </Modal>
    </div>
  );
};