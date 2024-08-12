import React from 'react';
import style from './Header.module.scss';
import Logo from '../Logo/Logo';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { removeUser } from 'src/store/userSlice';
import { getRouteCreateOpeartion, getRouteOpeartions, getRouteProfile } from 'src/consts/routerConsts';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const role = 'admin'

  const logout = () => {
    dispatch(removeUser());
  }
  return (
    <div className={style.root}>
      <Logo />
      <div>
        <Button>
          <Link to={getRouteProfile()}>Profile</Link>
        </Button>
        <Button>
          <Link to={getRouteOpeartions()}>Operations</Link>
        </Button>
        {role === 'admin' &&  
          <Button>
            <Link to={getRouteCreateOpeartion()}>New Operation</Link>
          </Button>
        }
       
      </div>
      <div>
        <Button onClick={logout}>{t`buttons.logOut`}</Button>
        <ThemeSwitcher className={style.switcher}/>
        <LangSwitcher className={style.switcher}/>
      </div>
    </div>
  );
}