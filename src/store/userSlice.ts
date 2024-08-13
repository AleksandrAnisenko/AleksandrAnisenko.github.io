import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserSchema {
  token: string | null;
}

const initialState: UserSchema = {
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<string>) => {
      localStorage.setItem('token', payload);
      state.token = payload;
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  selectors: {
    selectUser: (state) => state,
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const { selectUser } = userSlice.selectors;
export const userReducer = userSlice.reducer;
