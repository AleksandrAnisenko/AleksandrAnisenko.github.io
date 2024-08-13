import React, { memo } from 'react';
import { getValidates } from '../../../../Forms/Forms/validations';
import { TextField, TextFieldProps } from '../../../../Forms/TextField/TextField';

interface OperationFieldProps extends TextFieldProps {
  errorMessage?: string;
  touched: boolean;
}

export const OperationField = memo(({ errorMessage = '', touched, ...otherProps }: OperationFieldProps) => {
  const { help } = getValidates(errorMessage, touched);

  return <TextField errorMessage={help} {...otherProps} />;
});

OperationField.displayName = 'OperationField';
