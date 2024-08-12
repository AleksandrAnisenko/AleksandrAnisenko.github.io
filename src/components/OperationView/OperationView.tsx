import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { TOperation } from '../../Types';
import { Button } from '../Button/Button';
import style from './OperationView.module.scss';

export const OperationView: React.FC<TOperation> = ({ id, amount, category, name, desc, createdAt }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const role = 'admin';
  const handleEditOperation = () => navigate(`/updateOperation/${id}`, { replace: false });

  return (
    <div className={style.operation__view}>
      <div className={style.operation__view_header}>
        <h2>{name}</h2>
        {role === 'admin' && <Button onClick={handleEditOperation}>{t`buttons.edit`}</Button>}
      </div>
      <div className={style.operation__view_details}>
        <div className={style.operation__view_sum}>
          <b>{t`operation.amount`}:</b> {amount} руб.
        </div>
        <div className={style.operation__view_category}>
          <b>{t`operation.category`}:</b> {category}
        </div>
        <div className={style.operation__view_description}>
          <b>{t`operation.desc`}:</b> {desc}
        </div>
        <div className={style.opeatio__view_date}>
          <b>{t`operation.createdAt`}:</b> {createdAt}
        </div>
      </div>
    </div>
  );
};
