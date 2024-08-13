import React, { memo, useEffect, useMemo } from 'react';
import { useFormik } from 'formik/dist';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../Button/Button';
import { Text } from '../../Forms/TextField/Text';
import {
  useCreateUpdateOperationMutation,
  useGetOperationByIdQuery,
} from '../../Screens/OperationScreen/api/operationsApi';
import { OperationType } from '../../Screens/OperationScreen/operationsTypes';
import { validate } from '../../Screens/OperationScreen/utils/validateoperationForm';
import { getDate } from '../../../homeworks/ts1/3_write';
import { Form } from '../../../shared/form/Form';
import { OperationField } from './fields/operationField/operationField';
import { OperationCategorySelect } from './fields/selectField/operationCategorySelect';
import { OpeartionTypeSelect } from './fields/selectField/typeSelectField';

interface OperationFormProps {
  id?: string;
  onSubmitAction?: () => void;
  className?: string;
}

export const OperationForm = memo(({ onSubmitAction, id, className }: OperationFormProps) => {
  const navigate = useNavigate();
  const {
    data: operation,
    isLoading: operationIsLoading,
    error: operationError,
  } = useGetOperationByIdQuery(id || '', { skip: !id });
  const [editOperation, { data: editOperationData, isLoading: editOperationIsLoading, error: editOperationError }] =
    useCreateUpdateOperationMutation();

  const initialValues: OperationType = useMemo(
    () => ({
      name: operation?.name || '',
      desc: operation?.desc || '',
      amount: operation?.amount || 0,
      categoryId: operation?.category.id || '',
      type: operation?.type || 'Cost',
      date: operation?.date || '',
    }),
    [operation]
  );

  const onSubmit = (values: OperationType) => {
    if (!id) values.date = getDate();
    editOperation({ values, id });
    navigate(-1);
  };

  const formManager = useFormik<OperationType>({
    initialValues,
    onSubmit,
    validate,
    enableReinitialize: true,
  });

  const { values, submitForm, touched, errors, handleBlur, handleSubmit, handleChange, setStatus, status, resetForm } =
    formManager;

  useEffect(() => {
    if (editOperationError) setStatus(editOperationError);
  }, [editOperationError, setStatus]);

  useEffect(() => {
    if (editOperationData) {
      resetForm({ values: initialValues });
      onSubmitAction?.();
    }
  }, [editOperationData, initialValues, onSubmitAction, resetForm]);

  if (operationIsLoading) return null;
  if (operationError) return <Text>{operationError as string}</Text>;

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <OperationField
        value={values.name}
        name="name"
        label="Название Операции"
        required
        touched={!!touched.name}
        errorMessage={errors.name}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <OperationCategorySelect
        name="categoryId"
        required
        touched={false}
        errorMessage={errors.categoryId}
        onChange={handleChange}
        value={values.categoryId}
      />
      <OperationField
        value={values.desc}
        name="desc"
        label="Описание"
        required
        touched={!!touched.desc}
        errorMessage={errors.desc}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <OperationField
        value={values.amount}
        name="amount"
        label="Сумма"
        type="number"
        required
        touched={!!touched.amount}
        errorMessage={errors.amount}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <OpeartionTypeSelect
        name="type"
        required
        touched={false}
        errorMessage={errors.type}
        onChange={handleChange}
        value={values.type}
      />
      {status && (
        <Text color="error" size="s">
          {status}
        </Text>
      )}
      <Button label="Сохранить" onClick={submitForm} disabled={operationIsLoading || editOperationIsLoading} />
    </Form>
  );
});

OperationForm.displayName = 'ProfileScreenForm';
