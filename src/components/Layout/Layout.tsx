import React, { FC, useState } from 'react';
import style from './Layout.module.scss';
import { Header } from '../Header/Header';
import { OperationsList } from '../OperationsList/OperationsList';
import { TOperation } from '../../Types';
import { ModalContainer } from '../ModalContainer/ModalContainer';
import { Route, Routes } from 'react-router-dom';
import { CreateOperationForm } from '../Screens/OperationScreen/Create/CreateOperationForm';
import { ProfileScreenForm } from '../Screens/ProfileScreen/ProfileScreenForm';
import App from 'src/App';

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
  ];

  function PageNotFound() {
    return (
      <div>
        <h2>404 Page not found</h2>
      </div>
    );
  }

    const [operationsList, setOperationsList] = useState(operations);

  return (
    <div className={style.root}>
      <Header/>
      <div className={style.content}>
        <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path='/' element={<ProfileScreenForm />} />
          <Route path='/profile' element={<ProfileScreenForm />} />
          <Route path='/operations' element={<OperationsList operations={operationsList} addOperation={setOperationsList}/>} />
          <Route path='/createOperation' element={<CreateOperationForm />} />
        </Routes>
      </div>
    </div>
  );
}