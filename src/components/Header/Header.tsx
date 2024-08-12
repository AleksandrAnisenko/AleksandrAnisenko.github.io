import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../../store/userSlice';
import { Button } from '../Button/Button';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';
import Logo from '../Logo/Logo';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import style from './Header.module.scss';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const role = 'admin';

  const logout = () => {
    dispatch(removeUser());
  };
  return (
    <div className={style.root}>
      <Logo />
      <div>
        <Button>
          <Link to="profile">Profile</Link>
        </Button>
        <Button>
          <Link to="operations">Operations</Link>
        </Button>
        {role === 'admin' && (
          <Button>
            <Link to="createOperation">New Operation</Link>
          </Button>
        )}
      </div>
      <div>
        <Button onClick={logout}>{t`buttons.logOut`}</Button>
        <ThemeSwitcher className={style.switcher} />
        <LangSwitcher className={style.switcher} />
      </div>
    </div>
  );
};
