import React, { memo } from 'react';
import cn from 'clsx';
import s from './Text.module.scss';

type TextSize = 's' | 'm' | 'l';
type TextColor = 'primary' | 'error';

interface TextProps {
  size?: TextSize;
  color?: TextColor;
  className?: string;
  children: string;
}

export const Text = memo(({ children, className, size = 'm', color = 'primary' }: TextProps) => {
  const classNames = cn(s.text, className, s[`color_${color}`], s[`size_${size}`]);

  return <div className={cn(classNames)}>{children}</div>;
});

Text.displayName = 'Text';