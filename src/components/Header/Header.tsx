import React from 'react';
import style from './Header.module.scss';
import Logo from '../Logo/Logo';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

export const Header: React.FC = () => {
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
        <Button>
          <Link to="createOperation">New Operation</Link>
        </Button>
      </div>
      <div>
        <ThemeSwitcher className={style.switcher}/>
        <LangSwitcher className={style.switcher}/>
      </div>
    </div>
  );
}