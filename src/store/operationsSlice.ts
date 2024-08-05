import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createRandomOperation } from 'src/homeworks/ts1/3_write';
import { operations } from 'src/mocks/operations.mocks';
import { TOperation } from 'src/Types';
  
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
            state.operations.push(
                payload || createRandomOperation(),
            );
            console.log(state.operations)
        },
        updateOperation: (state, { payload }: PayloadAction<TOperation>) => {
          Object.assign(state.operations.find(operation => operation.id === payload.id), payload);
      },
      },
    selectors: {
        selectOperations: (state) => state.operations,
    },
});

export const { addOperation,updateOperation } = operationsSlice.actions;
export const { selectOperations } = operationsSlice.selectors;
export const operationsReducer = operationsSlice.reducer;