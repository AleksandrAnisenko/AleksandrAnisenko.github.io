import React, { memo, useMemo } from 'react';
import { FormikConfig, useFormik } from 'formik';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { OperationFormErrors, OperationFormValues } from '../../../Forms/OperationForm/types';
import { isNotDefinedString } from '../../../Forms/Forms/validations';
import { Title } from '../../../Forms/Forms/Title/Tytle';
import { OperationForm } from '../../../Forms/OperationForm/OperationForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from 'src/store';
import { Modal } from 'src/components/Modal/Modal';
import { updateOperation } from 'src/store/operationsSlice';

export const UpdateOperationForm = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const operation = useSelector((state: RootState) => state.operations.operations.find(operation => operation.id === params.id));
  const { onSubmit, validate , initialValues} = useMemo<Pick<FormikConfig<OperationFormValues>, 'onSubmit' | 'validate' | 'initialValues'>>(() => {

    return {
        initialValues: {
          name: operation.name,
          amount: operation.amount,
          category: operation.category,
          desc: operation.desc
        },
        onSubmit: (values, { setErrors }) => {
          dispatch(updateOperation({id: params.id, createdAt: operation.createdAt, ...values}));
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
    }, [ t ]);

  const formManager = useFormik<OperationFormValues>({
    initialValues,
    onSubmit,
    validate,
  });

  const { submitForm } = formManager;

  return (
    <Modal visible={true}>
      <div>
        <Title className='title'>{'Редактировать операцию'}</Title>
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

UpdateOperationForm.displayName = 'CreateOperationForm';