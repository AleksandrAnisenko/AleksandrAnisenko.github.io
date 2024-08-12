import React, { memo, MutableRefObject } from 'react';
import { TextField } from './fields/TextField/TextField';
import { Form } from 'src/shared/form/Form';
import { FormikContextType } from 'formik';
import { getValidates } from '../Forms/validations';

import { Text } from './fields/TextField/Text';
import { Button } from 'src/components/Button/Button';

export type AuthFormValues = {
  email: string;
  password: string;
};

export interface AuthFormProps extends FormProps<AuthFormValues> {
  title: string;
}

interface FormProps<Values = unknown> {
  className?: string;
  disabled?: boolean;
  formManager: FormikContextType<Values>;
  formElement?: MutableRefObject<HTMLFormElement>;
  autoFocusElement?: MutableRefObject<HTMLInputElement>;
}

export const AuthForm = memo(({ formManager, title, className }: AuthFormProps) => {

  const {
    submitForm,
    touched,
    errors,
    handleBlur,
    handleSubmit,
    handleChange,
    values,
    status,
  } = formManager;

  const { help: helpEmail } = getValidates(errors.email, touched.email);
  const { help: helpPassword } = getValidates(errors.password, touched.password);

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <TextField
        value={values.email}
        autoFocus
        name="email"
        type="email"
        onChange={handleChange}
        onBlur={handleBlur}
        label="Email"
        required
        errorMessage={helpEmail}
      />
      <TextField
        value={values.password}
        name="password"
        type="password"
        required
        onChange={handleChange}
        onBlur={handleBlur}
        label="Пароль"
        errorMessage={helpPassword}
      />
      {status && (
        <Text size="s" color="error">
          {status}
        </Text>
      )}
      <Button children={title} onClick={submitForm} />
    </Form>
  );
});

AuthForm.displayName = 'AuthForm';