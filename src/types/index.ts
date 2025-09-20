// src/types/index.ts

export interface Question {
  id: string;
  module: string;
  question: string;
  image?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Module {
  id: string;
  name: string;
  description: string;
  totalQuestions: number;
  completedQuestions: number;
  accuracy: number;
  isCompleted: boolean;
  icon: string;
}

export interface UserProgress {
  currentModule: string;
  completedModules: string[];
  overallProgress: number;
  totalAccuracy: number;
  timeSpent: { [moduleId: string]: number };
}

export interface QuizState {
  currentQuestion: number;
  selectedAnswer: number | null;
  isAnswered: boolean;
  showResults: boolean;
  questions: Question[];
  score: number;
  timeStarted: number;
}

export interface RootState {
  user: UserProgress;
  quiz: QuizState;
  modules: Module[];
}

export type RootStackParamList = {
  Dashboard: undefined;
  ModuleList: undefined;
  Quiz: { moduleId: string };
  Results: { moduleId: string; score: number; totalQuestions: number };
  ModuleComplete: { moduleId: string; score: number; totalQuestions: number };
};
