import React, { memo, useMemo } from 'react';
import { Button } from 'antd';
import { FormikConfig, useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDate, getTime } from '../../../../homeworks/ts1/3_write';
import { addOperation } from '../../../../store/operationsSlice';
import { Title } from '../../../Forms/Forms/Title/Tytle';
import { isNotDefinedString } from '../../../Forms/Forms/validations';
import { OperationForm } from '../../../Forms/OperationForm/OperationForm';
import { OperationFormErrors, OperationFormValues } from '../../../Forms/OperationForm/types';
import { Modal } from '../../../Modal/Modal';

export const CreateOperationForm = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { onSubmit, validate, initialValues } = useMemo<
    Pick<FormikConfig<OperationFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {
    return {
      initialValues: {
        name: '',
        amount: 0,
        category: '',
        desc: '',
      },
      onSubmit: (values, { setErrors }) => {
        dispatch(addOperation({ id: getTime(), createdAt: getDate(), ...values }));
        navigate('/operations');
      },
      validate: (values) => {
        const errors = {} as OperationFormErrors;
        if (isNotDefinedString(values.name) || isNotDefinedString(values.category)) {
          errors.name = 'Обязательно для заполнения';
        }
        return errors;
      },
    };
  }, [t]);

  const formManager = useFormik<OperationFormValues>({
    initialValues,
    onSubmit,
    validate,
  });

  const { submitForm } = formManager;

  return (
    <Modal visible={true}>
      <div>
        <Title className="title">{'Создать операцию'}</Title>
        <OperationForm formManager={formManager} />
        <div>
          <Button type="primary" onClick={submitForm}>
            {'Сохранить'}
          </Button>
        </div>
      </div>
    </Modal>
  );
});

CreateOperationForm.displayName = 'CreateOperationForm';
