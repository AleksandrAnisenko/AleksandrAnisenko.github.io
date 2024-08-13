import React, { memo } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../Forms/FormItem/FormItem';
import { getValidates } from '../../Forms/validations';
import { ProfileFormProps } from '../types';

export type NameFieldProps = Pick<ProfileFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

const prefix = <UserOutlined />;

export const NameField = memo<NameFieldProps>(
  ({ className, onChange, onBlur, autoFocusElement, touched, value, errors, disabled }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched);

    return (
      <FormItem title="Имя" required validateStatus={validateStatus} help={help}>
        <Input
          prefix={prefix}
          disabled={disabled}
          ref={autoFocusElement}
          data-cy="input"
          autoFocus
          name="name"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder="Имя"
        />
      </FormItem>
    );
  }
);

NameField.displayName = 'NameField';
