import { configureStore } from '@reduxjs/toolkit';
import { operationsReducer } from './operationsSlice';
import { userReducer } from './userSlice';
import { profileReducer } from './profileSlice';
import { appReducer } from './appSlice';
export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    operations: operationsReducer,
    profile: profileReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;