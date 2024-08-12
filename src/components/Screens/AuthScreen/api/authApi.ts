import { AuthResult, rtkApi } from 'src/api/rtqApi';
import { AuthFormValues } from 'src/components/Forms/AuthForm/AuthForm';
import { COMMAND_ID } from 'src/shared/consts/api';
import { transformErrorResponse } from 'src/shared/utils/ErrorResponse';

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