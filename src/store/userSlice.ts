import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  
interface UserSchema {
  token: string | null;
  role: string | null 
}

const initialState: UserSchema = {
  token: null,
  role: null
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }: PayloadAction<UserSchema>) => {
          Object.assign(state, payload);
        },
        removeUser: (state, action: PayloadAction<UserSchema>) => {
          Object.assign(state, initialState);
        },
      },
    selectors: {
        selectUser: (state) => state,
    },
});

export const { setUser, removeUser } = userSlice.actions;
export const { selectUser } = userSlice.selectors;
export const userReducer = userSlice.reducer;