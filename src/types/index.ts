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
  selectedAnswer: number;
  isAnswered: boolean;
  showResults: boolean;
  questions: Question[];
  score: number;
  timeStarted: number;
  isCompleted: boolean;
}

export interface RootState {
  user: UserProgress;
  quiz: QuizState;
  modules: Module[];
}

export type RootStackParamList = {
  Dashboard: undefined;
  ModuleList: { moduleId: string; moduleName: string };
  Quiz: { moduleId: string; moduleName: string };
  Results: { moduleId: string; moduleName: string; score: number; total: number };
  ModuleComplete: { moduleId: string; moduleName: string; score: number; total: number };
};
