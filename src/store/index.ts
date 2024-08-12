import { configureStore } from '@reduxjs/toolkit';
import { rtkApi } from '../api/rtqApi';
import { appReducer } from './appSlice';
import { operationsReducer } from './operationsSlice';
import { profileReducer } from './profileSlice';
import { userReducer } from './userSlice';
export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    operations: operationsReducer,
    profile: profileReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
