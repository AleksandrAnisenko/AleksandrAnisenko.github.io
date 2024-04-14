import React from 'react';
import { formatDate } from '../../helpers';
import style from'./OperationView.module.scss';

interface Props {
  sum: number;
  category: string;
  title: string;
  description: string;
  date: Date;
}

export const OperationView: React.FC<Props> = ({ sum, category, title, description, date }) => {

  return (
    <div className={style.operation__view}>
      <div className={style.operation__view_header}>
        <h2>{title}</h2>
        <button>Редактировать</button>
      </div>
      <div className={style.operation__view_details}>
        <div className={style.operation__view_sum}>
          <b>Сумма:</b> {sum} руб.
        </div>
        <div className={style.operation__view_category}>
          <b>Категория:</b> {category}
        </div>
        <div className={style.operation__view_description}>
          <b>Описание:</b> {description}
        </div>
        <div className="opeation-view__date">
          <b>Дата:</b> {formatDate(date)}
        </div>
      </div>
    </div>
  );
};