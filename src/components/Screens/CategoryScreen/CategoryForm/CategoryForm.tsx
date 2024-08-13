import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { useFormik } from 'formik';
import { FormikHelpers } from 'formik/dist';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../Button/Button';
import { getValidates } from '../../../Forms/Forms/validations';
import { Text } from '../../../Forms/TextField/Text';
import { TextField } from '../../../Forms/TextField/TextField';
import { FileUploader } from '../../../../shared/FileUploader/FileUploader';
import { Form } from '../../../../shared/form/Form';
import { useCreateCategoryMutation, useEditCategoryMutation, useGetCategoryByIdQuery } from '../api/categoryApi';
import { CategoryParams } from '../categoryTypes';

interface CategoryFormProps {
  id?: string;
  onSubmitAction?: () => void;
  className?: string;
}

export const CategoryForm = memo(({ onSubmitAction, id, className }: CategoryFormProps) => {
  const navigate = useNavigate();
  const {
    data: category,
    isLoading: categoryLoading,
    error: categoryError,
  } = useGetCategoryByIdQuery(id || '', { skip: !id });
  const [editCategory, { isLoading: editCategoryLoading, error: editCategoryError }] = useEditCategoryMutation();
  const [createCategory, { isLoading: createCategoryLoading, error: createCategoryError }] =
    useCreateCategoryMutation();

  const initialValues = useMemo(
    () => ({
      name: category?.name || '',
      photo: category?.photo || '',
    }),
    [category]
  );

  const onSubmit = useCallback(
    (values: CategoryParams, { resetForm }: FormikHelpers<CategoryParams>) => {
      id ? editCategory({ values, id }) : createCategory(values);
      resetForm({ values: initialValues });
      onSubmitAction?.();
      navigate(-1);
    },
    [createCategory, editCategory, id, initialValues, onSubmitAction]
  );

  const formManager = useFormik<CategoryParams>({
    initialValues,
    onSubmit,
    enableReinitialize: true,
  });

  const {
    values,
    status,
    setStatus,
    submitForm,
    touched,
    errors,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldValue,
  } = formManager;

  useEffect(() => {
    if (createCategoryError) setStatus(createCategoryError);
  }, [createCategoryError, setStatus]);

  const { help: helpName } = getValidates(errors.name, touched.name);

  const handlePhotoUpdate = useCallback(
    (photo: string) => {
      setFieldValue('photo', photo);
    },
    [setFieldValue]
  );

  if (categoryLoading) return <Text>Загружаем данные категории...</Text>;
  if (categoryError) return <Text>{categoryError as string}</Text>;

  return (
    <Form onSubmit={handleSubmit} className={className}>
      <TextField
        value={values.name}
        name="name"
        label="Название"
        required
        errorMessage={helpName}
        onBlur={handleBlur}
        onChange={handleChange}
        {...(category ? { defaultValue: category.name } : { autoFocus: true })}
      />
      <FileUploader pic={values.photo} picProportion="885/375" onUpload={handlePhotoUpdate} />
      {status && (
        <Text size="s" color="error">
          {status}
        </Text>
      )}
      <Button
        label="Сохранить"
        onClick={submitForm}
        disabled={categoryLoading || createCategoryLoading || editCategoryLoading}
      />
    </Form>
  );
});

CategoryForm.displayName = 'CategoryForm';
