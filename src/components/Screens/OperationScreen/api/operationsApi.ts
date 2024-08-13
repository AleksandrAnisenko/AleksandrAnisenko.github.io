import { rtkApi } from '../../../../api/rtqApi';
import { transformErrorResponse } from '../../../../shared/utils/ErrorResponse';
import { Operation, OperationsFilters, OperationsRequest, OperationsResponse, OperationType } from '../operationsTypes';

export const operationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getOperations: build.query<OperationsResponse, OperationsFilters>({
      query: ({ pagination, sorting, ids, ...otherParams }) => {
        const prepareParams: OperationsRequest = {
          ...otherParams,
          ids: JSON.stringify(ids),
          pagination: JSON.stringify(pagination),
          sorting: JSON.stringify(sorting),
        };

        return {
          url: '/operations',
          params: prepareParams,
        };
      },
      transformErrorResponse,
    }),
    getOperationById: build.query<Operation, string>({
      query: (id) => ({
        url: `/operations/${id}`,
      }),
      transformErrorResponse,
    }),
    createUpdateOperation: build.mutation<OperationType, { values: OperationType; id?: string }>({
      query: ({ values, id }) => ({
        url: id ? `/operations/${id}` : '/operations',
        method: id ? 'PUT' : 'POST',
        body: values,
      }),
      transformErrorResponse,
    }),
  }),
});

export const { useGetOperationsQuery, useCreateUpdateOperationMutation, useGetOperationByIdQuery } = operationsApi;
export const { getOperations, createUpdateOperation } = operationsApi.endpoints;
