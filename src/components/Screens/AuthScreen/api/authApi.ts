import { AuthResult, rtkApi } from '../../../../api/rtqApi';
import { AuthFormValues } from '../../../Forms/AuthForm/AuthForm';
import { COMMAND_ID } from '../../../../shared/consts/api';
import { transformErrorResponse } from '../../../../shared/utils/ErrorResponse';

export const authApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    signInRTK: build.mutation<AuthResult, AuthFormValues>({
      query: (arg) => ({
        url: '/signin',
        method: 'POST',
        body: arg,
      }),
      transformErrorResponse,
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
      transformErrorResponse,
    }),
  }),
});

export const { useSignInRTKMutation, useSignUpRTKMutation } = authApi;
export const { signInRTK, signUpRTK } = authApi.endpoints;
