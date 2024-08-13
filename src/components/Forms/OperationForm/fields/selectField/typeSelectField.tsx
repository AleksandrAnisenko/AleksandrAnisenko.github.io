import React, { memo } from 'react';
import { getValidates } from '../../../../Forms/Forms/validations';
import { Select, SelectProps } from './select';

interface OperationtypeSelectProps extends Omit<SelectProps<string>, 'options'> {
  title?: string;
  errorMessage?: string;
  touched: boolean;
}

export const OpeartionTypeSelect = memo(({ errorMessage = '', touched, ...otherProps }: OperationtypeSelectProps) => {
  const { help } = getValidates(errorMessage, touched);

  const options = [
    { value: 'Profit', content: 'Profit' },
    { value: 'Cost', content: 'Cost' },
  ];

  return (
    <Select
      errorMessage={help}
      options={[
        {
          value: '',
          content: 'Выберите тип',
          disabled: true,
        },
        ...options,
      ]}
      {...otherProps}
    />
  );
});

OpeartionTypeSelect.displayName = 'OpeartionTypeSelectProps';
