import React from 'react';
import style from './Header.module.scss';
import Logo from '../Logo/Logo';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useTranslation } from 'react-i18next';
import { removeUser } from 'src/store/userSlice';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const role = useSelector((state: RootState) => state.user.role);

  const logout = () => {
    dispatch(removeUser());
    localStorage.removeItem('user');
  }
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
        {role === 'admin' &&  
          <Button>
            <Link to="createOperation">New Operation</Link>
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