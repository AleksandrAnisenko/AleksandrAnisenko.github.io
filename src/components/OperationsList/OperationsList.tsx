import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/';
import { addOperation } from '../../store/operationsSlice';
import { TOperation } from '../../Types';
import { Button } from '../Button/Button';
import { OperationView } from '../OperationView/OperationView';
import style from './OperationsList.module.scss';

export const OperationsList: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const operations = useSelector((state: RootState) => state.operations.operations);
  const handleAddOperation = () => dispatch(addOperation());

  return (
    <>
      <div className={style.list}>
        {operations?.map((operation: TOperation) => (
          <OperationView
            key={operation.id}
            id={operation.id}
            amount={operation.amount}
            category={operation.category}
            name={operation.name}
            desc={operation.desc}
            createdAt={operation.createdAt}
          />
        ))}
        <Button onClick={handleAddOperation}>{t`buttons.showMore`}</Button>
      </div>
    </>
  );
};
