import { useMemo } from 'react';
import { Help } from './FormItem/FormItem';

export type ValidateStatus = 'error' | '';

const MIN_LENGTH_PASSWORD = 6;

export const getValidateStatus = (errors: unknown, touched: unknown): ValidateStatus =>
  errors && touched ? 'error' : '';

export const getHelp = (errors: unknown, touched: unknown): Help =>
  errors && touched ? (errors as Help) : null;

export type Validates = { validateStatus: ValidateStatus; help: Help };

export const isNotDefinedString = (string?: string): boolean => !string?.trim();

export const getValidates = (
  errors: unknown,
  touched: unknown,
): { validateStatus: ValidateStatus; help: Help } => ({
  validateStatus: getValidateStatus(errors, touched),
  help: getHelp(errors, touched),
});

export const useValidates = (
  errors: unknown,
  touched: unknown,
): { validateStatus: ValidateStatus; help: Help } =>
  useMemo(() => getValidates(errors, touched), [errors, touched]);