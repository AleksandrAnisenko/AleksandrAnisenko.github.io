import { configureStore } from '@reduxjs/toolkit';
import { operationsReducer } from './operationsSlice';
import { userReducer } from './userSlice';
import { profileReducer } from './profileSlice';
import { appReducer } from './appSlice';
import { rtkApi } from 'src/api/rtqApi';
export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    operations: operationsReducer,
    profile: profileReducer,
    [rtkApi.reducerPath]: rtkApi.reducer, 
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(rtkApi.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;