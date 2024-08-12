import React, { ButtonHTMLAttributes, forwardRef, memo } from 'react';
import cn from 'clsx';
import s from './Button.module.scss';

export type ButtonSize = 'xs' | 's' | 'm';
type ButtonVariant = 'primary' | 'secondary' | 'clean';
type TextPosition = 'center' | 'left' | 'right';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Текст на кнопке
   */
  label?: string | string[];
  size?: ButtonSize;
  variant?: ButtonVariant;
  textPosition?: TextPosition;
  rounded?: boolean;
  full?: boolean;
  /**
   * Подсказка при наведении
   */
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  children?: never;
}

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        label,
        textPosition = 'center',
        size = 'm',
        variant = 'primary',
        rounded = false,
        full = false,
        title,
        disabled,
        onClick,
        className,
        ...otherProps
      }: ButtonProps,
      ref
    ) => {
      if (!label) return null;

      const buttonClassNames = cn(
        s.outer,
        className,
        s[`outer_size-${size}`],
        s[`outer_variant-${variant}`],
        s[`outer_text-${textPosition}`],
        {
          [s[`outer_noLabel-${size}`]]: !label,
          [s.outer_full]: full,
          [s.outer_disabled]: disabled,
          [s.outer_rounded]: rounded,
        }
      );

      const buttonInner = (() => {

        return (
          <>
            <span>{label}</span>
          </>
        );
      })();

      return (
        <button
          className={buttonClassNames}
          title={title}
          disabled={disabled}
          type="button"
          onClick={() => onClick?.()}
          ref={ref}
          {...otherProps}
        >
          {buttonInner}
        </button>
      );
    }
  )
);

Button.displayName = 'Button';