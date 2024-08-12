import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAuthorizationToken } from 'src/helpers';
import { API_URL } from 'src/shared/consts/api';

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
  endpoints: () => ({}),
  
});