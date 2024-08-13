import { rtkApi } from '../../../../api/rtqApi';
import { transformErrorResponse } from '../../../../shared/utils/ErrorResponse';
import { Profile, UpdateProfileBody } from '../profileTypes';

export const profileApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<Profile, void>({
      query: () => {
        return {
          url: '/profile',
        };
      },
      transformErrorResponse,
    }),
    editProfile: build.mutation<Profile, UpdateProfileBody>({
      query: (values) => ({
        url: '/profile',
        method: 'PUT',
        body: values,
      }),
      transformErrorResponse,
    }),
  }),
});

export const { useGetProfileQuery, useEditProfileMutation } = profileApi;
