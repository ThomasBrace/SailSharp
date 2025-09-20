// src/store/slices/quizSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuizState, Question } from '../../types';

const initialState: QuizState = {
  currentQuestion: 0,
  selectedAnswer: -1,
  isAnswered: false,
  showResults: false,
  questions: [],
  score: 0,
  timeStarted: 0,
  isCompleted: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startQuiz: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
      state.currentQuestion = 0;
      state.selectedAnswer = -1;
      state.isAnswered = false;
      state.showResults = false;
      state.score = 0;
      state.timeStarted = Date.now();
      state.isCompleted = false;
    },
    setCurrentQuestion: (state, action: PayloadAction<number>) => {
      state.currentQuestion = action.payload;
    },
    setSelectedAnswer: (state, action: PayloadAction<number>) => {
      state.selectedAnswer = action.payload;
    },
    updateQuizProgress: (state, action: PayloadAction<{
      questionId: string;
      selectedAnswer: number;
      isCorrect: boolean;
    }>) => {
      const { questionId, selectedAnswer, isCorrect } = action.payload;
      // Store the answer for this question
      if (!state.questions[state.currentQuestion]) {
        state.questions[state.currentQuestion] = {
          id: questionId,
          module: '',
          question: '',
          options: [],
          correctAnswer: 0,
          explanation: '',
          difficulty: 'easy',
        };
      }
      if (isCorrect) {
        state.score += 1;
      }
    },
    selectAnswer: (state, action: PayloadAction<number>) => {
      state.selectedAnswer = action.payload;
      state.isAnswered = true;
    },
    showResults: (state) => {
      state.showResults = true;
      if (state.selectedAnswer === state.questions[state.currentQuestion]?.correctAnswer) {
        state.score += 1;
      }
    },
    nextQuestion: (state) => {
      state.currentQuestion += 1;
      state.selectedAnswer = -1;
      state.isAnswered = false;
      state.showResults = false;
    },
    resetQuiz: (state) => {
      state.currentQuestion = 0;
      state.selectedAnswer = -1;
      state.isAnswered = false;
      state.showResults = false;
      state.score = 0;
      state.timeStarted = 0;
      state.isCompleted = false;
    },
  },
});

export const {
  startQuiz,
  setCurrentQuestion,
  setSelectedAnswer,
  updateQuizProgress,
  selectAnswer,
  showResults,
  nextQuestion,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
