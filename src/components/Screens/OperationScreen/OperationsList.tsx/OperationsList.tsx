import React, { memo } from 'react';
import cn from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../Button/Button';
import { getRouteCreateOpeartion } from '../../../../shared/consts/routerConsts';
import { Operation } from '../operationsTypes';
import { OperationListItem } from './OperationItem';
import s from './OperationList.module.scss';

interface OperationListProps {
  operations: Operation[] | null;
  isLoading?: boolean;
  className?: string;
}

export const OperationsList = memo(({ operations, isLoading = false, className }: OperationListProps) => {
  const navigate = useNavigate();
  const handleCreateOperation = () => {
    navigate(getRouteCreateOpeartion());
  };
  if (!operations?.length && !isLoading) return 'Операции не найдены';

  return (
    <div className={cn(s.outer, className)}>
      {operations?.map((operation) => (
        <OperationListItem operation={operation} key={operation.id} />
      ))}
      <Button label="Создать Операцию" onClick={handleCreateOperation} />
    </div>
  );
});

OperationsList.displayName = 'OperationsList';
