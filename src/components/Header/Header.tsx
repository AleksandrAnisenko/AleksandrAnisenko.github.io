import React, { ReactElement, ReactNode } from 'react';
import style from './Header.module.scss';
import Logo from '../Logo/Logo';

type HeaderProps = {
  children?: ReactNode;
};

export const Header = ({ children} : HeaderProps): ReactElement => {
  return (
    <div className={style.root}>
      <Logo />
    </div>
  );
}