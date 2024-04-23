import React, { FC } from 'react';
import { useThemeContext } from '../../theming/ThemeProvider';
import style from './ThemeSwitcher.module.scss';
import cn from 'clsx';

export type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button type="button" className={cn(style.root, className)} onClick={toggleTheme}>
      Switch Theme
    </button>
  );
};
