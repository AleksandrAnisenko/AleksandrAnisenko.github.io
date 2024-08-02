import React, { Dispatch, SetStateAction } from "react";
import { TOperation } from "../../Types";
import { OperationView } from "../OperationView/OperationView";
import { useTranslation } from "react-i18next";
import { formatDate } from "../../helpers";
import style from './OperationsList.module.scss';
import { Button } from "../Button/Button";

type TOperationsListProps = {
    operations: TOperation[],
    addOperation: Dispatch<SetStateAction<TOperation[]>>,
}

export const OperationsList: React.FC<TOperationsListProps> = ({operations, addOperation}) => {

    const { t } = useTranslation();
    
    const createRandomOperation = (): TOperation => {
        const selectedCategory: string = 'Категория'+` ${getRandomInt(1, 10)}` ;
        return {
            id: getTime(),
            amount: getRandomInt(),
            category: selectedCategory,
            name: 'Имя операции',
            desc: 'Описание операции',
            createdAt: getDate(),
          }
    };

    const getRandomInt = (max = 1000, min = 1): number => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const getTime = (): string => new Date().getTime().toString();
    const getDate = (): string => formatDate().toString();

    const handleAddOperation = () => {
        const newOperationsList = operations;
        newOperationsList.push(createRandomOperation());
        addOperation([...newOperationsList]);
    }
    
    return (
        <>
            <div className={style.list}>
                {operations.map((operation: TOperation) => (
                    <OperationView
                        key = {operation.id} 
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

    )
}