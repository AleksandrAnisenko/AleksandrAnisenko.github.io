import React, { Dispatch, SetStateAction } from "react";
import { TOperation } from "../../Types";
import { OperationView } from "../OperationView/OperationView";
import { useTranslation } from "react-i18next";
import style from './OperationsList.module.scss';
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addOperation } from "src/store/operationsSlice";
import { RootState } from "src/store";

type TOperationsListProps = {}

export const OperationsList: React.FC<TOperationsListProps> = () => {

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const operations = useSelector((state: RootState) => state.operations.operations);
    const handleAddOperation = () => dispatch(addOperation())
    
    return (
        <>
            <div className={style.list}>
                {operations?.map((operation: TOperation) => (
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