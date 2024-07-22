import React, { memo, useMemo } from 'react';
import { FormikConfig, useFormik } from 'formik';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { OperationFormErrors, OperationFormValues } from '../../../Forms/OperationForm/types';
import { isNotDefinedString } from '../../../Forms/Forms/validations';
import { Title } from '../../../Forms/Forms/Title/Tytle';
import { OperationForm } from '../../../Forms/OperationForm/OperationForm';

export const UpdateOperationForm = memo(() => {
  const { t } = useTranslation();

  const { onSubmit, validate , initialValues} = useMemo<Pick<FormikConfig<OperationFormValues>, 'onSubmit' | 'validate' | 'initialValues'>>(() => {

    return {
        initialValues: {
          name: 'Test',
          cost: 50,
          category: 'CategoryTest',
          description: ''
        },
        onSubmit: (values, { setErrors }) => {
               console.log('Операция обновлена:', initialValues.name, 'новое имя:', values.name);
        },
        validate: (values) => {
          const errors = {} as OperationFormErrors;
          if (isNotDefinedString(values.name) || isNotDefinedString(values.category)) {
            errors.name = 'Обязательно для заполнения';
          }
          return errors;
        },
      };
    }, [ t ]);

  const formManager = useFormik<OperationFormValues>({
    initialValues,
    onSubmit,
    validate,
  });

  const { submitForm } = formManager;

  return (
    <div>
      <Title className='title'>{'Редактировать операцию'}</Title>
      <OperationForm formManager={formManager} />
      <div>
        <Button type="primary" onClick={submitForm}>
          {'Сохранить'}
        </Button>
      </div>
    </div>
  );
});

UpdateOperationForm.displayName = 'CreateOperationForm';