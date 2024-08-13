import React, { ChangeEvent, memo, useCallback } from 'react';
import { Button } from '../../Button/Button';
import { FormProps } from '../../Forms/Forms/types';
import { getValidates } from '../../Forms/Forms/validations';
import { Text } from '../../Forms/TextField/Text';
import { TextField } from '../../Forms/TextField/TextField';
import { Form } from '../../../shared/form/Form';
import { useProfileForm } from './Hooks/useProfileForm';
import { UpdateProfileBody } from './profileTypes';

type ProfileScreenForm = FormProps<UpdateProfileBody>;

export const ProfileScreenForm = memo(({ className }: ProfileScreenForm) => {
  const {
    values,
    submitForm,
    touched,
    errors,
    handleBlur,
    handleSubmit,
    handleChange,
    status,
    setStatus,
    isLoading,
    isSaving,
  } = useProfileForm();

  const { help } = getValidates(errors.name, touched.name);

  const handleInputChange = useCallback(
    (e: ChangeEvent) => {
      setStatus('');
      handleChange(e);
    },
    [handleChange, setStatus]
  );

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <TextField
        value={values.name}
        name="name"
        onChange={handleInputChange}
        onBlur={handleBlur}
        label={'Пользователь'}
        required
        errorMessage={help}
      />
      {status && (
        <Text color="error" size="s">
          {status}
        </Text>
      )}
      <Button label={'Сохранить изменения'} onClick={submitForm} full={false} disabled={isSaving || isLoading} />
    </Form>
  );
});

ProfileScreenForm.displayName = 'ProfileScreenForm';
