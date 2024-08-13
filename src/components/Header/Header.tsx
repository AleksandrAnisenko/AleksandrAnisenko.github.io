import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeUser } from '../../store/userSlice';
import { Button } from '../Button/Button';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';
import Logo from '../Logo/Logo';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import style from './Header.module.scss';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeUser());
  };
  return (
    <div className={style.root}>
      <Logo />
      <div>
        <div className={style.link}>
          <NavLink to="profile">Профиль</NavLink>
        </div>
        <div className={style.link}>
          <NavLink to="operations">Операции</NavLink>
        </div>
        <div className={style.link}>
          <NavLink to="categories">Категории</NavLink>
        </div>
      </div>
      <div>
        <ThemeSwitcher className={style.switcher} />
        <LangSwitcher className={style.switcher} />
      </div>
      <Button label={t`buttons.logOut`} onClick={logout}></Button>
    </div>
  );
};
