import { rtkApi } from 'src/api/rtqApi';
import { Profile, UpdateProfileBody } from '../profileTypes';
import { transformErrorResponse } from 'src/shared/utils/ErrorResponse';


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