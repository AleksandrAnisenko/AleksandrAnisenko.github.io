import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  
interface AppSchema {
    isInited: boolean
}

const initialState: AppSchema = {
    isInited: false
}


const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        initApp: (state, { payload }: PayloadAction<AppSchema>) => {
            state.isInited = state.isInited ? state.isInited : !state.isInited;
        },
      },
    selectors: {
        selectApp: (state) => state.isInited,
    },
});

export const { initApp } = appSlice.actions;
export const { selectApp } = appSlice.selectors;
export const appReducer = appSlice.reducer;