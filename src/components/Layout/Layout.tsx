import React, { FC, useState } from 'react';
import style from './Layout.module.scss';
import { Header } from '../Header/Header';
import { OperationsList } from '../OperationsList/OperationsList';
import { TOperation } from '../../Types';
import { ModalContainer } from '../ModalContainer/ModalContainer';

export const Layout:FC = () => {
  
  const operations: TOperation[] = [
    {
        id: '01',
        amount: 999,
        category: 'Категория'+' 3',
        name: 'Имя операции',
        desc: 'Описание операции',
        createdAt: '10-01-2024'
    },
    {
        id: '02',
        amount: 888,
        category: 'Категория'+' 3',
        name: 'Имя операции',
        desc: 'Описание операции',
        createdAt: '10-02-2024'
    },
    {
        id: '03',
        amount: 777,
        category: 'Категория'+' 3',
        name: 'Имя операции',
        desc: 'Описание операции',
        createdAt: '10-03-2024'
    },
  ]

    const [operationsList, setOperationsList] = useState(operations);

  return (
    <div className={style.root}>
      <Header/>
      <body className={style.content}>
        <ModalContainer></ModalContainer>
        <OperationsList operations={operationsList} addOperation={setOperationsList}/>
      </body>
    </div>
  );
}