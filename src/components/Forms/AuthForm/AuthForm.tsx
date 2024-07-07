import React, { memo } from 'react';
import { EmailField } from './fields/EmailField/EmailField';
import { PasswordField } from './fields/PassField/PassField';
import { AuthFormProps } from './types';

export const AuthForm = memo<AuthFormProps>(
  ({ formManager, formElement, autoFocusElement, disabled }) => {
    const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange } = formManager;

    return (
      <form ref={formElement} onSubmit={handleSubmit}>
        <EmailField
          autoFocusElement={autoFocusElement}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          errors={errors.email}
          submitCount={submitCount}
          touched={touched.email}
          disabled={disabled}
        />
        <PasswordField
          autoFocusElement={autoFocusElement}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          errors={errors.password}
          submitCount={submitCount}
          touched={touched.password}
          disabled={disabled}
        />
      </form>
    );
  }
);

AuthForm.displayName = 'AuthForm';