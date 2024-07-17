import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import style from'./Modal.module.scss';
import { useNavigate } from 'react-router-dom';

type ModalProps = {
  visible: boolean;
  children: ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ visible, children }) => {

  const navigate = useNavigate()

  return (
    <div className={style.modal} hidden={!visible}>
      <div className={style.modal__backdrop} />
      <div className={style.modal__card}>
        <div className={style.modal__card__close} onClick={() => navigate(-1)} />
        {children}
      </div>
    </div>
  );
};