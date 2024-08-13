import { isNotDefinedString } from '../../../Forms/Forms/validations';
import { OperationType } from '../operationsTypes';

type ProductFormErrors = Record<keyof OperationType, string>;

export const validate = (values: OperationType) => {
  const errors = {} as ProductFormErrors;
  if (isNotDefinedString(values.name)) {
    errors.name = 'Обязательное поле';
  }
  if (isNotDefinedString(values.categoryId)) {
    errors.categoryId = 'Обязательное поле';
  }
  if (isNotDefinedString(String(values.amount || ''))) {
    errors.amount = 'Обязательное поле';
  }
  if (isNotDefinedString(String(values.type || ''))) {
    errors.type = 'Обязательное поле';
  }
  return errors;
};
