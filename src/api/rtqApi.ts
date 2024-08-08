import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthFormValues } from 'src/components/Forms/AuthForm/types';
import { getAuthorizationToken } from 'src/helpers';
import { API_URL, COMMAND_ID } from 'src/shared/consts/api';
import { ErrorResponse } from 'src/shared/utils/ErrorHandler';

export type AuthResult = {
  token: string;
};

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = getAuthorizationToken();
      if (token) headers.set('Authorization', token);
      return headers;
    },
  }),
  endpoints: (build) => ({
    signInRTK: build.mutation<AuthResult, AuthFormValues>({
      query: (arg) => ({
        url: '/signin',
        method: 'POST',
        body: arg,
      }),
      transformErrorResponse: (response: { data: ErrorResponse; status: number }) =>
        response.data.errors[0].message || response.status,
    }),
    signUpRTK: build.mutation<AuthResult, AuthFormValues>({
      query: (arg) => ({
        url: '/signup',
        method: 'POST',
        body: {
          ...arg,
          commandId: COMMAND_ID,
        },
      }),
      transformErrorResponse: (response: { data: ErrorResponse; status: number }) =>
        response.data.errors[0].message || response.status,
    }),
  }),
});

export const { useSignInRTKMutation, useSignUpRTKMutation } = rtkApi;