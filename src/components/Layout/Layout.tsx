import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  getRouteCategories,
  getRouteCreateCategory,
  getRouteCreateOpeartion,
  getRouteOpeartions,
  getRouteProfile,
  getRouteUpdateCategory,
  getRouteUpdateOpeartion,
} from '../../shared/consts/routerConsts';
import { Header } from '../Header/Header';
import { CategoriesList } from '../Screens/CategoryScreen/CategoriesList';
import { CreateCategoryForm } from '../Screens/CategoryScreen/Create/CreateCategoryForm';
import { UpdateCategoryForm } from '../Screens/CategoryScreen/UpdateCategoryForm/UpdateCategoryForm';
import { CreateOperationForm } from '../Screens/OperationScreen/Create/CreateOperationForm';
import { OperationsInfinityList } from '../Screens/OperationScreen/OperationsList.tsx/OperationsinfinityList';
import { UpdateOperationForm } from '../Screens/OperationScreen/Update/UpdateOperationForm';
import { ProfileScreenForm } from '../Screens/ProfileScreen/ProfileScreenForm';
import style from './Layout.module.scss';

export const Layout: FC = () => {
  return (
    <div className={style.root}>
      <Header />
      <div className={style.content}>
        <Routes>
          <Route path={getRouteProfile()} element={<ProfileScreenForm />} />
          <Route path={getRouteOpeartions()} element={<OperationsInfinityList />} />
          <Route path={getRouteCategories()} element={<CategoriesList />} />
          <Route path={getRouteCreateCategory()} element={<CreateCategoryForm />} />
          <Route path={getRouteUpdateCategory(':id')} element={<UpdateCategoryForm />} />
          <Route path={getRouteCreateOpeartion()} element={<CreateOperationForm />} />
          <Route path={getRouteUpdateOpeartion(':id')} element={<UpdateOperationForm />} />
        </Routes>
      </div>
    </div>
  );
};
