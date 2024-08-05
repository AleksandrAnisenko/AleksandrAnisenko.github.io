import React, { memo, useMemo } from 'react';
import { FormikConfig, useFormik } from 'formik';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { ProfileFormErrors, ProfileFormValues } from '../../Forms/ProfileForm/types';
import { isNotDefinedString } from '../../Forms/Forms/validations';
import { Title } from '../../Forms/Forms/Title/Tytle';
import { ProfileForm } from '../../Forms/ProfileForm/ProfileForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { setProfileData } from 'src/store/profileSlice';


export type ProfileCompletedFormProps = {
  className?: string;
};

export const ProfileScreenForm = memo<ProfileCompletedFormProps>(({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.profile.profileData);
  const { onSubmit, validate, initialValues } = useMemo<
    Pick<FormikConfig<ProfileFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {

    return {
      initialValues: {
        name: profile.name || '',
        about: profile.about || '',
      },
      onSubmit: (values, { setErrors }) => {
        dispatch(setProfileData({id: profile.id, ...values}));
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