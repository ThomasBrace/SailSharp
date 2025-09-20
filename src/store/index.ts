// src/store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import quizReducer from './slices/quizSlice';
import modulesReducer from './slices/modulesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    quiz: quizReducer,
    modules: modulesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
