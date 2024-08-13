import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProfileData {
  id: string;
  name?: string;
}

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
