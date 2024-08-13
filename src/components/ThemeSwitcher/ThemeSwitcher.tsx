import React, { FC } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from '../../theming/ThemeProvider';
import style from './ThemeSwitcher.module.scss';

export type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { t } = useTranslation();

  const { theme, toggleTheme } = useThemeContext();

  return (
    <button type="button" className={cn(style.root, className)} onClick={toggleTheme}>
      {t`buttons.switchTheme`}
    </button>
  );
};
