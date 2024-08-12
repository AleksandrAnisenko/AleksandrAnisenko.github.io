import { FormProps } from '../Forms/types';

export type OperationFormValues = {
  name: string;
  amount: number;
  category: string;
  desc: string;
};

export type OperationFormErrors = Record<keyof OperationFormValues, string>;
export type OperationFormTouched = Record<keyof OperationFormValues, boolean>;

export type OperationFormProps = FormProps<OperationFormValues>;
