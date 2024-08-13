import React, { memo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../Button/Button';
import {
  selectOperationsFilter,
  selectOperationsHasMore,
  selectOperationsList,
  setCurrentPage,
} from '../../../../store/operationsSlice';
import { useGetOperationsQuery } from '../api/operationsApi';
import { useInfiniteScroll } from '../Hooks/useInfinityScroll';
import { OperationsList } from './OperationsList';
import s from './OperationinfinityList.module.scss';

interface OperationsInfinityListProps {
  className?: string;
}

export const OperationsInfinityList = memo(({ className }: OperationsInfinityListProps) => {
  const operations = useSelector(selectOperationsList);
  const filter = useSelector(selectOperationsFilter);
  const { error, isFetching } = useGetOperationsQuery(filter);
  const hasMore = useSelector(selectOperationsHasMore);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(setCurrentPage());
  };

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useInfiniteScroll({ triggerRef, wrapperRef, action: handleLoadMore });

  if (error) return error as string;

  return (
    <div className={className} ref={wrapperRef}>
      <OperationsList className={s.list} operations={operations} isLoading={isFetching} />
      {hasMore && !isFetching && operations && (
        <Button
          className={s.button}
          label="Показать еще"
          variant="secondary"
          size="m"
          disabled={isFetching}
          ref={triggerRef}
          onClick={handleLoadMore}
        />
      )}
    </div>
  );
});

OperationsInfinityList.displayName = 'ProductsInfinityList';
