import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProfileData } from '../mocks/profileData';

interface ProfileSchema {
  profileData: ProfileData | null;
}

const initialState: ProfileSchema = {
  profileData: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, { payload }: PayloadAction<ProfileData>) => {
      state.profileData = payload;
    },
    resetProfileData: (state) => {
      state.profileData = null;
    },
  },
  selectors: {
    selectProfile: (state) => state.profileData,
  },
});

export const { setProfileData, resetProfileData } = profileSlice.actions;
export const { selectProfile } = profileSlice.selectors;
export const profileReducer = profileSlice.reducer;
