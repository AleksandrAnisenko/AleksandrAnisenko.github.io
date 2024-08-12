import { MutableRefObject } from 'react';
import { InputRef } from 'antd';
import { FormikContextType } from 'formik';

export interface FormProps<Values = unknown> {
  className?: string;
  disabled?: boolean;
  formManager?: FormikContextType<Values>;
  formElement?: MutableRefObject<HTMLFormElement>;
  autoFocusElement?: MutableRefObject<InputRef>;
}
