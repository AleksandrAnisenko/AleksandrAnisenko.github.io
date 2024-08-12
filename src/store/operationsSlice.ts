import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createRandomOperation } from '../homeworks/ts1/3_write';
import { operations } from '../mocks/operations.mocks';
import { TOperation } from '../Types';

interface OpearationsSchema {
  operations: TOperation[] | null;
}

const initialState: OpearationsSchema = {
  operations: operations || [],
};

const operationsSlice = createSlice({
  name: 'operations',
  initialState,
  reducers: {
    addOperation: (state, { payload }: PayloadAction<TOperation>) => {
      state.operations.push(payload || createRandomOperation());
      console.log(state.operations);
    },
    updateOperation: (state, { payload }: PayloadAction<TOperation>) => {
      Object.assign(
        state.operations.find((operation) => operation.id === payload.id),
        payload
      );
    },
  },
  selectors: {
    selectOperations: (state) => state.operations,
  },
});

export const { addOperation, updateOperation } = operationsSlice.actions;
export const { selectOperations } = operationsSlice.selectors;
export const operationsReducer = operationsSlice.reducer;
