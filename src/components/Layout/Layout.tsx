import React, { ReactElement, ReactNode } from 'react';
import style from './Layout.module.scss';
import { Header } from '../Header/Header';

type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <div className={style.root}>
      <Header/>
      <main className={style.content}>{children}</main>
    </div>
  );
}