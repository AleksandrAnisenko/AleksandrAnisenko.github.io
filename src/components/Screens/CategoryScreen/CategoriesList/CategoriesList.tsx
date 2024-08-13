import React, { memo, useMemo } from 'react';
import cn from 'clsx';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../../../Button/Button';
import { Text } from '../../../Forms/TextField/Text';
import { getRouteCreateCategory, getRouteUpdateCategory } from '../../../../shared/consts/routerConsts';
import { PicWrapper } from '../../../../shared/PicWrapper/PicWrapper';
import { useGetCategoriesQuery } from '../api/categoryApi';
import s from './CategoriesList.module.scss';

interface CategoriesListProps {
  className?: string;
}

export const CategoriesList = memo(({ className }: CategoriesListProps) => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(getRouteUpdateCategory(id));
  };

  const text = useMemo(() => {
    switch (true) {
      case isLoading:
        return 'Загружаем категории...';
      case !!error:
        return (
          <>
            Не удалось загрузить категории — <b>{error as string}</b>
          </>
        );
      case !categories?.length:
        return (
          <>
            <div>Нет категорий</div>
            <div className={s.link}>
              <NavLink to="createCategory">Создать Категорию</NavLink>
            </div>
          </>
        );

      default:
        return null;
    }
  }, [categories, error, isLoading]);

  if (text) return <Text>{text}</Text>;

  return (
    <div className={cn(s.outer, className)}>
      {categories?.map(({ id, name, photo }) => (
        <div className={s.item} key={id}>
          <PicWrapper className={s.pic} pic={photo} alt={name} />
          <div>{name}</div>
          <div className={s.content}>
            <Button label="Редактировать" onClick={() => handleClick(id)} />
          </div>
        </div>
      ))}
      <div className={s.link}>
        <NavLink to={getRouteCreateCategory()}>Создать Категорию</NavLink>
      </div>
    </div>
  );
});

CategoriesList.displayName = 'CategoriesList';
