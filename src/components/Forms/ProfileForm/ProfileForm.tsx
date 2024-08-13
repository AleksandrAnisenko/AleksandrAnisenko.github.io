import React, { memo } from 'react';
import { ProfileFormProps } from './types';

export const ProfileForm = memo<ProfileFormProps>(({ formManager, formElement, autoFocusElement, disabled }) => {
  const { values, touched, errors, handleBlur, handleSubmit, handleChange } = formManager;

  return (
    <form ref={formElement} onSubmit={handleSubmit}>
      <NameField
        autoFocusElement={autoFocusElement}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.name}
        errors={errors.name}
        touched={touched.name}
        disabled={disabled}
      />
    </form>
  );
});

ProfileForm.displayName = 'ProfileForm';
