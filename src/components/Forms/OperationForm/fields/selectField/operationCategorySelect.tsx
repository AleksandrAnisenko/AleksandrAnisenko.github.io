import React, { memo } from 'react';
import { getValidates } from '../../../../Forms/Forms/validations';
import { useGetCategoriesQuery } from '../../../../Screens/CategoryScreen/api/categoryApi';
import { Category } from '../../../../Screens/CategoryScreen/categoryTypes';
import { SelectProps, SelectOption, Select } from './select';

interface operationCategorySelectProps extends Omit<SelectProps<string>, 'options'> {
  title?: string;
  errorMessage?: string;
  touched: boolean;
}

const getOptions = (categories: Category[]): SelectOption[] =>
  categories.map(({ id, name }) => ({
    value: id,
    content: name,
  }));

export const OperationCategorySelect = memo(
  ({ errorMessage = '', touched, ...otherProps }: operationCategorySelectProps) => {
    const { data, isLoading, error } = useGetCategoriesQuery();
    const { help } = getValidates(errorMessage, touched);

    const options = data ? getOptions(data) : [];

    if (isLoading) return 'Загружаем категории...';
    if (error) return error as string;

    return (
      <Select
        errorMessage={help}
        options={[
          {
            value: '',
            content: options.length ? 'Выберите категорию' : 'Нет категорий',
            disabled: true,
          },
          ...options,
        ]}
        {...otherProps}
      />
    );
  }
);

OperationCategorySelect.displayName = 'OperationCategorySelect';
