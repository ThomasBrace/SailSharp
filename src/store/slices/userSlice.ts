// src/store/slices/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProgress } from '../../types';

const initialState: UserProgress = {
  currentModule: 'nautical_terms',
  completedModules: [],
  overallProgress: 0,
  totalAccuracy: 0,
  timeSpent: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentModule: (state, action: PayloadAction<string>) => {
      state.currentModule = action.payload;
    },
    completeModule: (state, action: PayloadAction<string>) => {
      if (!state.completedModules.includes(action.payload)) {
        state.completedModules.push(action.payload);
      }
    },
    updateProgress: (state, action: PayloadAction<number>) => {
      state.overallProgress = action.payload;
    },
    updateAccuracy: (state, action: PayloadAction<number>) => {
      state.totalAccuracy = action.payload;
    },
    addTimeSpent: (state, action: PayloadAction<{ moduleId: string; time: number }>) => {
      state.timeSpent[action.payload.moduleId] = action.payload.time;
    },
  },
});

export const {
  setCurrentModule,
  completeModule,
  updateProgress,
  updateAccuracy,
  addTimeSpent,
} = userSlice.actions;

export default userSlice.reducer;
