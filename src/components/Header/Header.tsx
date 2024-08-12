import React from 'react';
import style from './Header.module.scss';
import Logo from '../Logo/Logo';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { removeUser } from 'src/store/userSlice';
import { Button } from '../Button/Button';

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
        <div className={style.link}>
          <NavLink to="profile">Profile</NavLink>
        </div>
        <div className={style.link}>
          <NavLink to="operations">Operations</NavLink>
        </div>
        {role === 'admin' &&
        <div className={style.link}>
            <NavLink to="createOperation">New Operation</NavLink>
        </div>
        }
      </div>
      <div>
        <ThemeSwitcher className={style.switcher}/>
        <LangSwitcher className={style.switcher}/>
      </div>
      <Button label={t`buttons.logOut`} onClick={logout}></Button>
    </div>
  );
}