import React, { HtmlHTMLAttributes, ReactNode } from 'react';
import style from './Button.module.scss';

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button className={style.button} {...props}>
      {children}
    </button>
  );
};
