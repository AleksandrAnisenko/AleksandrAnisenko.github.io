import React, { FC, useState } from 'react';
import style from './Layout.module.scss';
import { Header } from '../Header/Header';
import { OperationsList } from '../OperationsList/OperationsList';
import { Route, Routes } from 'react-router-dom';
import { CreateOperationForm } from '../Screens/OperationScreen/Create/CreateOperationForm';
import { ProfileScreenForm } from '../Screens/ProfileScreen/ProfileScreenForm';
import { useDispatch } from 'react-redux';
import { setProfileData } from 'src/store/profileSlice';
import { profile } from 'src/mocks/profileData';
import { UpdateOperationForm } from '../Screens/OperationScreen/Update/UpdateOperationForm';
import { getRouteCreateOpeartion, getRouteOpeartions, getRouteProfile, getRouteUpdateOpeartion } from 'src/consts/routerConsts';

export const Layout:FC = () => {

  const dispatch = useDispatch();
  dispatch(setProfileData(profile));

  return (
    <div className={style.root}>
      <Header/>
      <div className={style.content}>
        <Routes>
          <Route path={getRouteProfile()} element={<ProfileScreenForm />} />
          <Route path={getRouteOpeartions()} element={<OperationsList />} />
          <Route path={getRouteCreateOpeartion()} element={<CreateOperationForm />} />
          <Route path={getRouteUpdateOpeartion(':id')} element={<UpdateOperationForm />} />
        </Routes>
      </div>
    </div>
  );
}