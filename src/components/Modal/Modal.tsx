import React, { ReactNode } from 'react';
import style from'./Modal.module.scss';

type ModalProps = {
  visible: boolean;
  children: ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ visible, children }) => {

  return (
    <div className={style.modal} hidden={!visible}>
      <div className={style.modal__backdrop} />
      <div className={style.modal__card}>
        <div className={style.modal__card__close} />
        {children}
      </div>
    </div>
  );
};