import React, { memo, useMemo } from 'react';
import { FormikConfig, useFormik } from 'formik';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { isNotDefinedString } from '../../../Forms/Forms/validations'
import { Title } from '../../../Forms/Forms/Title/Tytle';
import { OperationForm } from '../../../Forms/OperationForm/OperationForm';
import { OperationFormErrors, OperationFormValues } from '../../../Forms/OperationForm/types';

export const CreateOperationForm = memo(() => {
  const { t } = useTranslation();

  const { onSubmit, validate , initialValues} = useMemo<Pick<FormikConfig<OperationFormValues>, 'onSubmit' | 'validate' | 'initialValues'>>(() => {

    return {
        initialValues: {
          name: '',
          cost: 0,
          category: '',
          description: ''
        },
        onSubmit: (values, { setErrors }) => {
               console.log('Операция создана :', values.name);
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
      <Title className='title'>{'Создать операцию'}</Title>
      <OperationForm formManager={formManager} />
      <div>
        <Button type="primary" onClick={submitForm}>
          {'Сохранить'}
        </Button>
      </div>
    </div>
  );
});

CreateOperationForm.displayName = 'CreateOperationForm';