import React, { memo } from 'react';
import cn from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../Button/Button';
import { getRouteUpdateOpeartion } from '../../../../shared/consts/routerConsts';
import { Operation } from '../operationsTypes';
import s from './OperationListItem.module.scss';

export interface OperationListItemProps {
  operation: Operation;
  className?: string;
}

export const OperationListItem = memo(({ operation, className }: OperationListItemProps) => {
  const { name, desc, amount, type, date, id } = operation;

  const navigate = useNavigate();

  const updateClick = (id: string) => {
    navigate(getRouteUpdateOpeartion(id));
  };

  return (
    <article className={cn(s.outer, className)}>
      <div className={s.about}>
        <h1 className={s.title}>{name}</h1>
      </div>
      <div className={s.content}>
        <div className={s.about}>{desc}</div>
        <div className={s.price}>{amount} руб.</div>
        <div>{type}</div>
        <div>{date}</div>
      </div>
      <Button label="Редактировать" onClick={() => updateClick(id)} />
    </article>
  );
});

OperationListItem.displayName = 'OperationListItem';
