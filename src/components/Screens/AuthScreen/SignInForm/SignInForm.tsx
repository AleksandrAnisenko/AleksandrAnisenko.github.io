import React, { memo, useEffect, useMemo } from 'react';
import { FormikConfig } from 'formik';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { AuthForm } from '../../../Forms/AuthForm/AuthForm';
import { AuthFormErrors, AuthFormValues } from '../../../Forms/AuthForm/types'
import { isNotDefinedString } from '../../../Forms/Forms/validations';
import { Title } from '../../../Forms/Forms/Title/Tytle';
import s from './SignInForm.module.scss';
import { setUser } from 'src/store/userSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuthWithQuery } from 'src/components/useAuthWithQuery';
import { useAuth } from 'src/components/useAuth';


export const SingInForm = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    dispatch(setUser(token));
  }, [dispatch]);

  const { onSubmit, validate , initialValues} = useMemo<Pick<FormikConfig<AuthFormValues>, 'onSubmit' | 'validate' | 'initialValues'>>(() => {

    return {
        initialValues: {
          email: undefined,
          password: undefined,
        },
        onSubmit: (values, { setErrors }) => {
        },
        validate: (values) => {
          const errors = {} as AuthFormErrors;
          if (isNotDefinedString(values.email)) {
            errors.email = 'Обязательно для заполнения';
          }
          else if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)))
          { 
            errors.email = 'Значение указано некорректно';
          }
          if (isNotDefinedString(values.password)) {
            errors.password = 'Обязательно для заполнения';
          }
          else if (!(/^((?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,32})$/.test(values.password)))
          { 
            errors.password = 'Пароль должен содержать строчные и прописные латинские буквы, цифры, спецсимволы (!@#$%^&*). Минимум 6 и максимум 32 символов';
          }
          return errors;
        },
      };
    }, [ t ]);

    // const formManager = useAuthWithQuery('signIn');
    const formManager = useAuth('signIn');

    const { setErrors, initialErrors, setStatus, initialStatus, submitForm } = formManager;

  return (
    <div className={s.container}>
      <Title className='title'>{'Вход в систему'}</Title>
      <AuthForm formManager={formManager} />
      <div>
        <Button type="primary" onClick={submitForm}>
          {'Войти'}
        </Button>
        <Link to="/signUp" style={{display: 'block'}}>Регистрация</Link>
      </div>
    </div>
  );
});

SingInForm.displayName = 'SingInForm';