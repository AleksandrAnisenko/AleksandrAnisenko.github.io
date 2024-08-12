import React from 'react';
import style from './OperationShortView.module.scss';

interface OperationShortViewProps {
  sum: number;
  category: string;
  title: string;
  description: string;
}
export const OperationShortView: React.FC<OperationShortViewProps> = ({ sum, category, title, description }) => {
  return (
    <div className={style.operation__short}>
      <div className={style.operation__short_sum}>Сумма: {sum} руб.</div>
      <div className={style.operation__short_category}>Категория: {category}</div>
      <div className={style.operation__short_title}>Название: {title}</div>
      <div className={style.operation__short_description}>Описание: {description}</div>
    </div>
  );
};
