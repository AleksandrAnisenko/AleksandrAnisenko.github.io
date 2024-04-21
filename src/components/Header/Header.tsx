import React from 'react';
import style from './Header.module.scss';
import Logo from '../Logo/Logo';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';

export const Header: React.FC = () => {
  return (
    <div className={style.root}>
      <Logo />
      <div>
        <ThemeSwitcher className={style.switcher}></ThemeSwitcher>
        <LangSwitcher className={style.switcher}></LangSwitcher>
      </div>
    </div>
  );
}