// src/store/slices/modulesSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Module } from '../../types';

const initialState: Module[] = [
  {
    id: 'nautical_terms',
    name: 'Nautical Terms',
    description: 'Parts of a boat, directional terms, and sailing vocabulary',
    totalQuestions: 10,
    completedQuestions: 0,
    accuracy: 0,
    isCompleted: false,
    icon: 'anchor', // MaterialIcons anchor
  },
  {
    id: 'chart_symbols',
    name: 'Chart Symbols & Conventions',
    description: 'Understanding chart symbols and navigation marks',
    totalQuestions: 10,
    completedQuestions: 0,
    accuracy: 0,
    isCompleted: false,
    icon: 'map', // MaterialIcons map
  },
  {
    id: 'anchorwork',
    name: 'Anchorwork',
    description: 'Anchoring techniques and procedures',
    totalQuestions: 10,
    completedQuestions: 0,
    accuracy: 0,
    isCompleted: false,
    icon: 'anchor', // MaterialIcons anchor
  },
  {
    id: 'lights',
    name: 'Lights',
    description: 'Navigation lights and their meanings',
    totalQuestions: 10,
    completedQuestions: 0,
    accuracy: 0,
    isCompleted: false,
    icon: 'lightbulb', // MaterialIcons lightbulb
  },
  {
    id: 'buoyage',
    name: 'Buoyage',
    description: 'IALA buoyage systems and marks',
    totalQuestions: 10,
    completedQuestions: 0,
    accuracy: 0,
    isCompleted: false,
    icon: 'radio-button-unchecked', // MaterialIcons circle (buoy shape)
  },
  {
    id: 'irpcs',
    name: 'IRPCS',
    description: 'International Regulations for Preventing Collisions at Sea',
    totalQuestions: 10,
    completedQuestions: 0,
    accuracy: 0,
    isCompleted: false,
    icon: 'directions-boat', // MaterialIcons boat
  },
  {
    id: 'weather',
    name: 'Weather',
    description: 'Weather systems and forecasting',
    totalQuestions: 10,
    completedQuestions: 0,
    accuracy: 0,
    isCompleted: false,
    icon: 'cloud', // MaterialIcons cloud
  },
  {
    id: 'safety',
    name: 'Safety',
    description: 'Safety equipment and emergency procedures',
    totalQuestions: 10,
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
