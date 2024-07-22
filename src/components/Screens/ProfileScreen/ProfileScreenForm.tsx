import React, { memo, useMemo } from 'react';
import { FormikConfig, useFormik } from 'formik';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { ProfileFormErrors, ProfileFormValues } from '../../Forms/ProfileForm/types';
import { isNotDefinedString } from '../../Forms/Forms/validations';
import { Title } from '../../Forms/Forms/Title/Tytle';
import { ProfileForm } from '../../Forms/ProfileForm/ProfileForm';


export type ProfileCompletedFormProps = {
  className?: string;
};

export const ProfileScreenForm = memo<ProfileCompletedFormProps>(({ className }) => {
  const { t } = useTranslation();
  const { onSubmit, validate, initialValues } = useMemo<
    Pick<FormikConfig<ProfileFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {

    return {
      initialValues: {
        name:'',
        about: '',
      },
      onSubmit: (values, { setErrors }) => {
             console.log(values);
      },
      validate: (values) => {
        const errors = {} as ProfileFormErrors;
        if (isNotDefinedString(values.name)) {
          errors.name = 'Обязательно для заполнения';
        }
        return errors;
      },
    };
  }, [ t ]);

  const formManager = useFormik<ProfileFormValues>({
    initialValues,
    onSubmit,
    validate,
  });
  const { submitForm, setValues } = formManager;

  return (
    <div className='root'>
      <Title className='title'>{'Профиль пользователя'}</Title>
      <ProfileForm formManager={formManager} />
      <Button type="primary"  onClick={submitForm}>
        {'Сохранить'}
      </Button>
    </div>
  );
});

ProfileScreenForm.displayName = 'ProfileScreenForm';