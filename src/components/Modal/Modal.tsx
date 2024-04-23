import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import style from'./Modal.module.scss';

type ModalProps = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ visible, setVisible, children }) => {

  const closeModal = (): void => {
    setVisible(false);
  };

  return (
    <div className={style.modal} hidden={!visible}>
      <div className={style.modal__backdrop} />
      <div className={style.modal__card}>
        <div className={style.modal__card__close} onClick={closeModal} />
        {children}
      </div>
    </div>
  );
};