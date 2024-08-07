import React, { memo } from 'react';
import { Input } from 'antd';

import { UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { getValidates } from '../../../Forms/validations';
import { FormItem } from '../../../Forms/FormItem/FormItem';
import { AuthFormProps } from '../../types';
import { FormikHandlers } from 'formik';



export type EmailFieldProps = Pick<AuthFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

const prefix = <UserOutlined />;

export const EmailField = memo<EmailFieldProps>(
  ({ onChange, onBlur, autoFocusElement, touched, value, errors, disabled }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched);

    return (
      <FormItem
        title='Логин'
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input
          prefix={prefix}
          disabled={disabled}
          ref={autoFocusElement}
          data-cy="input"
          autoFocus
          name="email"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder='test@mail.com'
        />
      </FormItem>
    );
  }
);

EmailField.displayName = 'EmailField';