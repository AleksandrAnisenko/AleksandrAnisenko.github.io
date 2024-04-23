import React, { FC } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { Locale } from '../../localization/settings';
import style from './LangSwitcher.module.scss';
import { LangSwitchTest } from '../LangSwitchTest/LangSwitchTest';

export type ThemeSwitcherProps = {
  className?: string;
};

export const LangSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language as Locale) === Locale.ru ? Locale.en : Locale.ru;
  return (
    <>
      <button type="button" className={cn(style.root, className)} onClick={() => i18n.changeLanguage(lang)}>
      {lang}
      </button>
      <LangSwitchTest/>
    </>
  );
};
