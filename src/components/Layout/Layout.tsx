import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { profile } from '../../mocks/profileData';
import { setProfileData } from '../../store/profileSlice';
import { Header } from '../Header/Header';
import { OperationsList } from '../OperationsList/OperationsList';
import { CreateOperationForm } from '../Screens/OperationScreen/Create/CreateOperationForm';
import { UpdateOperationForm } from '../Screens/OperationScreen/Update/UpdateOperationForm';
import { ProfileScreenForm } from '../Screens/ProfileScreen/ProfileScreenForm';
import style from './Layout.module.scss';

export const Layout: FC = () => {
  const dispatch = useDispatch();
  dispatch(setProfileData(profile));

  return (
    <div className={style.root}>
      <Header />
      <div className={style.content}>
        <Routes>
          <Route path="/profile" element={<ProfileScreenForm />} />
          <Route path="/operations" element={<OperationsList />} />
          <Route path="/createOperation" element={<CreateOperationForm />} />
          <Route path="/updateOperation/:id" element={<UpdateOperationForm />} />
        </Routes>
      </div>
    </div>
  );
};
