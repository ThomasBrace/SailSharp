// src/store/slices/quizSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuizState, Question } from '../../types';

const initialState: QuizState = {
  currentQuestion: 0,
  selectedAnswer: null,
  isAnswered: false,
  showResults: false,
  questions: [],
  score: 0,
  timeStarted: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startQuiz: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
      state.currentQuestion = 0;
      state.selectedAnswer = null;
      state.isAnswered = false;
      state.showResults = false;
      state.score = 0;
      state.timeStarted = Date.now();
    },
    selectAnswer: (state, action: PayloadAction<number>) => {
      state.selectedAnswer = action.payload;
      state.isAnswered = true;
    },
    showResults: (state) => {
      state.showResults = true;
      if (state.selectedAnswer === state.questions[state.currentQuestion].correctAnswer) {
        state.score += 1;
      }
    },
    nextQuestion: (state) => {
      state.currentQuestion += 1;
      state.selectedAnswer = null;
      state.isAnswered = false;
      state.showResults = false;
    },
    resetQuiz: (state) => {
      state.currentQuestion = 0;
      state.selectedAnswer = null;
      state.isAnswered = false;
      state.showResults = false;
      state.score = 0;
      state.timeStarted = 0;
    },
  },
});

export const {
  startQuiz,
  selectAnswer,
  showResults,
  nextQuestion,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
