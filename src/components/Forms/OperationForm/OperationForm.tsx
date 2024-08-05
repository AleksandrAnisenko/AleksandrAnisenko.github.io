import React, { memo } from 'react';
import { OperationFormProps } from './types';
import { NameField } from './fields/NameField/NameField';
import { CostField } from './fields/CostField/CostField';
import { CategoryField } from './fields/CathegoryField/CathegoryField';
import { DescriptionField } from './fields/DescriptionField/DescriptionField';

export const OperationForm = memo<OperationFormProps>(
  ({ className, formManager, formElement, disabled }) => {
    const { values, touched, errors, handleBlur, handleSubmit, handleChange } = formManager;

    return (
      <form ref={formElement} onSubmit={handleSubmit}>
        <NameField
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name}
          errors={errors.name}
          touched={touched.name}
          disabled={disabled}
        />
       <CostField
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.amount}
          errors={errors.amount}
          touched={touched.amount}
          disabled={disabled}
        />
        <CategoryField
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.category}
          errors={errors.category}
          touched={touched.category}
          disabled={disabled}
        />
        <DescriptionField
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.desc}
          errors={errors.desc}
          touched={touched.desc}
          disabled={disabled}
        />
      </form>
    );
  }
);

OperationForm.displayName = 'OperationForm';