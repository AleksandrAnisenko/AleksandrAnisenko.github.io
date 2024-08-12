import React, { memo } from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../Forms/FormItem/FormItem';
import { getValidates } from '../../../Forms/validations';
import { OperationFormProps } from '../../types';
import { FormikHandlers } from 'formik';

export type NameFieldProps = Pick<OperationFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const NameField = memo<NameFieldProps>(
  ({ className, onChange, onBlur, autoFocusElement, touched, value, errors, disabled }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched);

    return (
      <FormItem title="Название" required validateStatus={validateStatus} help={help}>
        <Input
          disabled={disabled}
          ref={autoFocusElement}
          data-cy="input"
          autoFocus
          name="name"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder="Название"
        />
      </FormItem>
    );
  }
);

NameField.displayName = 'NameField';
