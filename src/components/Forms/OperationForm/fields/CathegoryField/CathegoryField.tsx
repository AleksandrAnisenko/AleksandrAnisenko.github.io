import React, { memo } from 'react';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist/types';
import { useTranslation } from 'react-i18next';
import { getValidates } from '../../../Forms/validations';
import { FormItem } from '../../../Forms/FormItem/FormItem';
import { OperationFormProps } from '../../types';

export type CategoryFieldProps = Pick<OperationFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const CategoryField = memo<CategoryFieldProps>(
  ({ onChange, onBlur, autoFocusElement, touched, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        title='Категория'
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input
          disabled={disabled}
          ref={autoFocusElement}
          data-cy="input"
          autoFocus
          name="category"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder='Категория'
        />
      </FormItem>
    );
  }
);

CategoryField.displayName = 'CategoryField';