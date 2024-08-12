import { useCallback, useEffect, useMemo } from 'react';
import { useFormik } from 'formik';
import { FormikErrors } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { UpdateProfileBody } from '../profileTypes';
import { useEditProfileMutation, useGetProfileQuery } from '../api/profileApi';
import { isNotDefinedString } from 'src/components/Forms/Forms/validations';

type ProfileFormErrors = FormikErrors<UpdateProfileBody>;

export const useProfileForm = () => {
  const { data: profile, isFetching: profileIsLoading } = useGetProfileQuery();
  const [editProfile, { isLoading, error }] = useEditProfileMutation();
  const { t } = useTranslation();

  const initialValues: UpdateProfileBody = useMemo(
    () => ({
        name: profile?.name || '13',
    }),
    [profile]
  );

  const onSubmit = useCallback(
    (values: UpdateProfileBody) => {
      editProfile(values);
    },
    [editProfile]
  );

  const validate = useCallback(
    (values: UpdateProfileBody) => {
      const errors: ProfileFormErrors = {};
      if (isNotDefinedString(values.name)) {
        errors.name = 'Обязательное поле';
      }
      return errors;
    },
    [t]
  );

  const manager = useFormik<UpdateProfileBody>({
    initialValues,
    onSubmit,
    validate,
    enableReinitialize: true,
  });

  const { setStatus } = manager;

  useEffect(() => {
    if (error) {
      setStatus(error);
    }
  }, [error, setStatus]);

  return {
    ...manager,
    isLoading: profileIsLoading,
    isSaving: isLoading,
  };
};