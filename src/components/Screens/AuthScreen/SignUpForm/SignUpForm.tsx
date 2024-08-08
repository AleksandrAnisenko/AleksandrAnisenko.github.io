import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { FormikConfig, useFormik } from 'formik';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { AuthForm } from '../../../Forms/AuthForm/AuthForm';
import { AuthFormErrors, AuthFormValues } from '../../../Forms/AuthForm/types'
import { isNotDefinedString } from '../../../Forms/Forms/validations';
import { Title } from '../../../Forms/Forms/Title/Tytle';
import { Link } from 'react-router-dom';
import s from './SignUpForm.module.scss';
import { useAuthWithQuery } from 'src/components/useAuthWithQuery';
import { useDispatch } from 'react-redux';
import { setUser } from 'src/store/userSlice';
import { useAuth } from 'src/components/useAuth';

export const SingUpForm = memo(() => {
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

    // const formManager = useAuthWithQuery('signUp');
    const formManager = useAuth('signUp');

    const { setErrors, initialErrors, setStatus, initialStatus, submitForm } = formManager;

  return (
    <div className={s.container}>
      <Title className='title'>{'Регистрация'}</Title>
      <AuthForm formManager={formManager} />
      <div>
      <div style={{color: 'red'}}></div>
        <Button type="primary" onClick={submitForm}>
          {'Зарегистрироваться'}
        </Button>
        <Link to="logIn" style={{display: 'block'}}>Войти</Link>
      </div>
    </div>
  );
});

SingUpForm.displayName = 'SingUpForm';