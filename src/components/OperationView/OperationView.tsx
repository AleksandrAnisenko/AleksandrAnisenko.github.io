import React from 'react';
import style from'./OperationView.module.scss';
import { TOperation } from '../../Types';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button/Button';

export const OperationView: React.FC<TOperation> = ({ amount, category, name, desc, createdAt }) => {

  const { t } = useTranslation();

  return (
    <div className={style.operation__view}>
      <div className={style.operation__view_header}>
        <h2>{name}</h2>
        <Button>{t`buttons.edit`}</Button>
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