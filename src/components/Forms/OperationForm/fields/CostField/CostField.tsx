import React, { memo } from 'react';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist/types';
import { useTranslation } from 'react-i18next';
import { getValidates } from '../../../Forms/validations';
import { FormItem } from '../../../Forms/FormItem/FormItem';
import { OperationFormProps } from '../../types';

export type CostFieldProps = Pick<OperationFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  touched: boolean;
  errors: string;
  value: number;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const CostField = memo<CostFieldProps>(
  ({ className, onChange, onBlur, autoFocusElement, touched, value, errors, disabled }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched);

    return (
      <FormItem
        title='Стоимость'
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input
          disabled={disabled}
          ref={autoFocusElement}
          data-cy="input"
          autoFocus
          name="cost"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          type="number"
          placeholder='Стоимость'
        />
      </FormItem>
    );
  }
);

CostField.displayName = 'CostField';