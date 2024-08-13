import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { signInRTK, signUpRTK } from '../components/Screens/AuthScreen/api/authApi';
import { getOperations } from '../components/Screens/OperationScreen/api/operationsApi';
import {
  OperationsFilters,
  OperationsResponse,
  OperationsSchema,
} from '../components/Screens/OperationScreen/operationsTypes';

const initialState: OperationsSchema = {
  operations: null,
  isLoading: false,
  error: '',
  hasMore: false,
  currentPage: 1,
  pageSize: 3,
  sortingType: 'DESC',
  sortingField: 'createdAt',
};

const resetOperationsSlice = (state: OperationsSchema) => {
  state.operations = null;
  state.isLoading = false;
  state.error = '';
  state.hasMore = false;
  state.currentPage = 1;
};

const operationsSlice = createSlice({
  name: 'operations',
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }: PayloadAction<number | undefined>) => {
      state.currentPage = payload ? payload : state.currentPage + 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(getOperations.matchPending, (state) => {
        state.isLoading = true;
        state.error = '';
        state.hasMore = false;
      })
      .addMatcher(
        getOperations.matchFulfilled,
        (
          state,
          {
            payload: {
              data,
              pagination: { pageNumber, pageSize, total },
            },
          }: PayloadAction<OperationsResponse>
        ) => {
          state.operations = [...(state.operations || []), ...data];
          state.isLoading = false;
          state.error = '';
          state.hasMore = total > pageNumber * pageSize;
        }
      )
      .addMatcher(getOperations.matchRejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as unknown as string;
        state.hasMore = false;
      })
      .addMatcher(signInRTK.matchFulfilled, (state) => {
        resetOperationsSlice(state);
      })
      .addMatcher(signUpRTK.matchFulfilled, (state) => {
        resetOperationsSlice(state);
      });
  },
  selectors: {
    selectOperationsList: (state) => state.operations,
    selectOperationsIsLoading: (state) => state.isLoading,
    selectOperationsError: (state) => state.error,
    selectOperationsHasMore: (state) => state.hasMore,
    selectOperationsFilter: (state): OperationsFilters => ({
      pagination: {
        pageNumber: state.currentPage,
        pageSize: state.pageSize,
      },
      sorting: {
        type: state.sortingType,
        field: state.sortingField,
      },
    }),
  },
});

export const { setCurrentPage } = operationsSlice.actions;

export const {
  selectOperationsList,
  selectOperationsIsLoading,
  selectOperationsError,
  selectOperationsHasMore,
  selectOperationsFilter,
} = operationsSlice.selectors;
export const operationsReducer = operationsSlice.reducer;
