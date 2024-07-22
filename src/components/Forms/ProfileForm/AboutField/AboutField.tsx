import React, { memo } from 'react';
import Input from 'antd/lib/input';
import { FormikHandlers } from 'formik/dist/types';
import { useTranslation } from 'react-i18next';
import { ProfileFormProps } from '../types';
import { getValidates } from '../../Forms/validations';
import { FormItem } from '../../Forms/FormItem/FormItem';

export type AboutFieldProps = Pick<ProfileFormProps, 'className' | 'disabled'> & {
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const AboutField = memo<AboutFieldProps>(
  ({ className, onChange, onBlur, touched, value, errors, disabled }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched);

    return (
      <FormItem
        title='О себе'
        validateStatus={validateStatus}
        help={help}
      >
        <Input.TextArea
          disabled={disabled}
          name="about"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder='О себе'
        />
      </FormItem>
    );
  }
);