import React, { memo } from 'react';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist/types';
import { useTranslation } from 'react-i18next';
import { getValidates } from '../../../Forms/validations';
import { FormItem } from '../../../Forms/FormItem/FormItem';
import { AuthFormProps } from '../../types';



export type PasswordFieldProps = Pick<AuthFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const PasswordField = memo<PasswordFieldProps>(
  ({ onChange, onBlur, touched, value, errors, disabled }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched);

    return (
      <FormItem
        title='Пароль'
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input
          data-cy="input"
          autoFocus
          name="password"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder='Пароль'
        />
      </FormItem>
    );
  }
);

PasswordField.displayName = 'PasswordField';