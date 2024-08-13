import { rtkApi } from '../../../../api/rtqApi';
import { Filter } from '../../../../shared/types/filtertypes';
import { transformErrorResponse } from '../../../../shared/utils/ErrorResponse';
import { CategoriesRequest, CategoriesResponse, Category, CategoryParams } from '../categoryTypes';

const fetchCategoriesParams: CategoriesRequest = (() => {
  const params: Filter = {
    sorting: {
      type: 'ASC',
      field: 'createdAt',
    },
    pagination: {
      pageNumber: 1,
      pageSize: 100,
    },
  };

  return {
    ...params,
    sorting: JSON.stringify(params.sorting),
    pagination: JSON.stringify(params.pagination),
  };
})();

export const categoriesApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<Category[], void>({
      query: () => ({
        url: '/categories',
        params: fetchCategoriesParams,
      }),
      transformErrorResponse,
      transformResponse: (rawResponse: CategoriesResponse) => rawResponse.data,
    }),
    getCategoryById: build.query<Category, string>({
      query: (id) => ({
        url: `/categories/${id}`,
      }),
      transformErrorResponse,
    }),
    createCategory: build.mutation<Category, CategoryParams>({
      query: (body) => ({
        url: '/categories',
        method: 'POST',
        body,
      }),
      transformErrorResponse,
    }),
    editCategory: build.mutation<Category, { values: Partial<CategoryParams>; id: string }>({
      query: ({ values, id }) => ({
        url: `/categories/${id}`,
        method: 'PATCH',
        body: values,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryByIdQuery, useCreateCategoryMutation, useEditCategoryMutation } =
  categoriesApi;
