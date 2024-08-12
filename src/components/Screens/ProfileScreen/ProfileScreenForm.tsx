import React, { ChangeEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { UpdateProfileBody } from './profileTypes';
import { FormProps } from 'src/components/Forms/Forms/types';
import { useProfileForm } from './Hooks/useProfileForm';
import { getValidates } from 'src/components/Forms/Forms/validations';
import { Form } from 'src/shared/form/Form';
import { TextField } from 'src/components/Forms/TextField/TextField';
import { Button } from 'src/components/Button/Button';
import { Text } from 'src/components/Forms/TextField/Text';


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
  const { t } = useTranslation();

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
        label={t('Пользователь')}
        required
        errorMessage={help}
      />
      {status && (
        <Text color="error" size="s">
          {status}
        </Text>
      )}
      <Button
        label={'Сохранить изменения'}
        onClick={submitForm}
        full={false}
        disabled={isSaving || isLoading}
      />
    </Form>
  );
});

ProfileScreenForm.displayName = 'ProfileScreenForm';