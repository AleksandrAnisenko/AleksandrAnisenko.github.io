import React from 'react';
import cn from 'clsx';
import { useImageLoading } from '../hooks/useImageLoader';
import s from './PicWrapper.module.scss';

interface ProductPicWrapperProps {
  pic?: string;
  defaultPic?: string;
  alt?: string;
  className?: string;
}

export const PicWrapper = ({ pic, defaultPic, alt = '', className }: ProductPicWrapperProps) => {
  const [isPicLoading, isPicError] = useImageLoading(pic || '');

  return (
    <div className={cn(s.outer, className)}>
      <img className={s.pic} src={isPicError || isPicLoading ? defaultPic : pic} alt={alt} />
    </div>
  );
};
