// src/store/slices/modulesSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Module } from '../../types';

const initialState: Module[] = [
  {
    id: 'nautical_terms',
    name: 'Nautical Terms',
    description: 'Parts of a boat, directional terms, and sailing vocabulary',
    totalQuestions: 15,
    completedQuestions: 0,
    accuracy: 0,
    isCompleted: false,
    icon: 'menu-book', // MaterialIcons book
  },
  {
    id: 'navigation',
    name: 'Navigation',
    description: 'Chart work, plotting, GPS, chart symbols and navigation marks',
    totalQuestions: 40,
    completedQuestions: 0,
    accuracy: 0,
    isCompleted: false,
    icon: 'explore', // MaterialIcons compass
  },
  {
    id: 'rules_of_the_road',
    name: 'Rules of the Road',
    description: 'IRPCS, navigation lights, buoyage systems and collision regulations',
    totalQuestions: 35,
    completedQuestions: 0,
    accuracy: 0,
    isCompleted: false,
    icon: 'directions-boat', // MaterialIcons boat
  },
  {
    id: 'pilotage_boat_handling',
    name: 'Pilotage & Boat Handling',
    description: 'Anchoring, mooring, berthing, passage planning and harbor entry',
    totalQuestions: 30,
    completedQuestions: 0,
    accuracy: 0,
    isCompleted: false,
    icon: 'anchor', // MaterialIcons anchor
  },
  {
    id: 'tides_tidal_streams',
    name: 'Tides & Tidal Streams',
    description: 'Tidal calculations, tidal heights, tidal streams and effects',
    totalQuestions: 25,
    completedQuestions: 0,
    accuracy: 0,
    isCompleted: false,
    icon: 'waves', // MaterialIcons waves
  },
  {
    id: 'weather',
    name: 'Weather',
    description: 'Weather systems, forecasting and interpreting conditions',
    totalQuestions: 20,
    completedQuestions: 0,
    accuracy: 0,
    isCompleted: false,
    icon: 'cloud', // MaterialIcons cloud
  },
  {
    id: 'safety',
    name: 'Safety',
    description: 'Safety equipment, emergency procedures and distress signals',
    totalQuestions: 25,
    completedQuestions: 0,
    accuracy: 0,
    isCompleted: false,
    icon: 'security', // MaterialIcons security/shield
  },
];

const modulesSlice = createSlice({
  name: 'modules',
  initialState,
  reducers: {
    updateModuleProgress: (state, action: PayloadAction<{ moduleId: string; completed: number; accuracy: number }>) => {
      const module = state.find(m => m.id === action.payload.moduleId);
      if (module) {
        module.completedQuestions = action.payload.completed;
        module.accuracy = action.payload.accuracy;
        module.isCompleted = module.completedQuestions >= module.totalQuestions;
      }
    },
    completeModule: (state, action: PayloadAction<string>) => {
      const module = state.find(m => m.id === action.payload);
      if (module) {
        module.isCompleted = true;
        module.completedQuestions = module.totalQuestions;
      }
    },
  },
});

export const {
  updateModuleProgress,
  completeModule,
} = modulesSlice.actions;

export default modulesSlice.reducer;
