import { useCallback } from 'react';
import { useFormik } from 'formik';
import { FormikHelpers } from 'formik/dist';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { $api } from '../api/api';
import { AuthResult } from '../api/rtqApi';
import { COMMAND_ID } from '../shared/consts/api';
import { errorHandler } from '../shared/utils/ErrorHandler';
import { setUser } from '../store/userSlice';
import { AuthFormValues } from './Forms/AuthForm/types';

type UserAuthMode = 'signIn' | 'signUp';

const initialValues: AuthFormValues = {
  email: '',
  password: '',
};

export const useAuth = (mode: UserAuthMode, onSubmit?: () => void) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSignInMode = mode === 'signIn';

  const handleSubmit = useCallback(
    (values: AuthFormValues, { resetForm, setStatus }: FormikHelpers<AuthFormValues>) => {
      if (isSignInMode) {
        $api
          .post<AuthResult>('/signin', values)
          .then((res) => {
            dispatch(setUser(res.data.token));
            navigate('/', { replace: false });
            resetForm({ values: initialValues });
            onSubmit?.();
          })
          .catch((err) => errorHandler(err, setStatus));
      } else {
        $api
          .post<AuthResult>('/signup', {
            ...values,
            commandId: COMMAND_ID,
          })
          .then((res) => {
            dispatch(setUser(res.data.token));
            resetForm({ values: initialValues });
            onSubmit?.();
          })
          .catch((err) => errorHandler(err, setStatus));
      }
    },
    [dispatch, isSignInMode, onSubmit]
  );

  return useFormik<AuthFormValues>({
    initialValues,
    onSubmit: handleSubmit,
    validate: undefined,
  });
};
