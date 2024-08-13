import { useCallback, useEffect } from 'react';
import { type SerializedError } from '@reduxjs/toolkit';
import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../../../store/userSlice';
import { AuthFormValues } from '../../../Forms/AuthForm/types';
import { useSignInRTKMutation, useSignUpRTKMutation } from '../api/authApi';

type UserAuthMode = 'signIn' | 'signUp';

const initialValues: AuthFormValues = {
  email: '',
  password: '',
};

export const useAuthWithQuery = (mode: UserAuthMode, onSubmit?: () => void) => {
  const [signInRTK, { data: signInData, error: signInError, isLoading: signInIsLoading }] = useSignInRTKMutation();
  const [signUpRTK, { data: signUpData, error: signUpError, isLoading: signUpIsLoading }] = useSignUpRTKMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSignInMode = mode === 'signIn';

  const handleSubmit = useCallback(
    async (values: AuthFormValues) => {
      if (isSignInMode) {
        if (signInIsLoading) return;
        await signInRTK(values);
        return;
      }

      if (signUpIsLoading) return;
      await signUpRTK(values);
    },
    [isSignInMode, signInIsLoading, signInRTK, signUpIsLoading, signUpRTK]
  );

  const manager = useFormik<AuthFormValues>({
    initialValues,
    onSubmit: handleSubmit,
    validate: undefined,
  });

  useEffect(() => {
    const formAction = (
      isLoading: boolean,
      err?: FetchBaseQueryError | SerializedError | undefined,
      token?: string
    ) => {
      if (isLoading) return;

      if (err) {
        manager.setStatus(err);
        return;
      }

      if (!token) return;

      dispatch(setUser(token));
      navigate('/', { replace: false });
      manager.resetForm({ values: initialValues });
      onSubmit?.();
    };

    isSignInMode
      ? formAction(signInIsLoading, signInError, signInData?.token)
      : formAction(signUpIsLoading, signUpError, signUpData?.token);
  }, [isSignInMode, onSubmit, signInError, signInIsLoading, signUpError, signUpIsLoading]);

  return manager;
};
