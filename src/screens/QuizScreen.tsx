// src/screens/QuizScreen.tsx

import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootState } from '../store';
import { RootStackParamList } from '../types';
import { updateQuizProgress, setCurrentQuestion, setSelectedAnswer, resetQuiz } from '../store/slices/quizSlice';
import { questions } from '../data/questions';
import { renderSvg } from '../utils/svgLoader';

type QuizScreenRouteProp = RouteProp<RootStackParamList, 'Quiz'>;

const QuizScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<QuizScreenRouteProp>();
  const dispatch = useDispatch();
  
  const { moduleId, moduleName } = route.params;
  const { currentQuestion, selectedAnswer, isCompleted } = useSelector((state: RootState) => state.quiz);
  const modules = useSelector((state: RootState) => state.modules);
  
  const [showExplanation, setShowExplanation] = useState(false);

  // Get current module data
  const currentModule = modules.find(module => module.id === moduleId);
  
  // Get questions for this module and randomize them
  const randomizedQuestions = useMemo(() => {
    const moduleQuestions = questions[moduleId] || [];
    // Create a shuffled copy of the questions
    const shuffled = [...moduleQuestions].sort(() => Math.random() - 0.5);
    return shuffled;
  }, [moduleId]);

  const currentQuestionData = randomizedQuestions[currentQuestion] || randomizedQuestions[0];

  useEffect(() => {
    // Initialize quiz if not already started
    if (randomizedQuestions.length > 0) {
      dispatch(setCurrentQuestion(0));
    }
  }, [dispatch, randomizedQuestions.length]);

  const handleAnswerSelect = (answerIndex: number) => {
    dispatch(setSelectedAnswer(answerIndex));
  };

  const handleAnswerSubmit = () => {
    if (selectedAnswer === -1) {
      return; // No answer selected
    }
    
    setShowExplanation(true);
    
    // Update progress
    dispatch(updateQuizProgress({
      questionId: currentQuestionData.id,
      selectedAnswer: selectedAnswer,
      isCorrect: selectedAnswer === currentQuestionData.correctAnswer,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < randomizedQuestions.length - 1) {
      dispatch(setCurrentQuestion(currentQuestion + 1));
      setShowExplanation(false);
      dispatch(setSelectedAnswer(-1));
    } else {
      // Quiz completed - calculate score
      const correctAnswers = randomizedQuestions.filter((question, index) => {
        // This would need to be tracked in Redux state for proper scoring
        // For now, we'll use a simple calculation
        return question.correctAnswer === selectedAnswer;
      }).length;
      
      navigation.navigate('Results', {
        moduleId,
        moduleName,
        score: correctAnswers,
        total: randomizedQuestions.length,
      });
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '#4CAF50';
      case 'medium': return '#FF9800';
      case 'hard': return '#F44336';
      default: return '#2196F3';
    }
  };

  const getAnswerButtonStyle = (index: number) => {
    if (!showExplanation) {
      return selectedAnswer === index ? styles.selectedAnswer : styles.answerButton;
    }
    
    if (index === currentQuestionData.correctAnswer) {
      return styles.correctAnswer;
    } else if (index === selectedAnswer && index !== currentQuestionData.correctAnswer) {
      return styles.incorrectAnswer;
    }
    return styles.answerButton;
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            Question {currentQuestion + 1} of {randomizedQuestions.length}
          </Text>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${((currentQuestion + 1) / randomizedQuestions.length) * 100}%` }
              ]} 
            />
          </View>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Question */}
        <View style={styles.questionContainer}>
          <View style={styles.difficultyBadge}>
            <Text style={[styles.difficultyText, { color: getDifficultyColor(currentQuestionData.difficulty) }]}>
              {currentQuestionData.difficulty.toUpperCase()}
            </Text>
          </View>
          
          <Text style={styles.questionText}>{currentQuestionData.question}</Text>
          
          {/* SVG Image */}
          {currentQuestionData.image && (
            <View style={styles.imageContainer}>
              {renderSvg(currentQuestionData.image.replace('.svg', ''), 200, 150)}
            </View>
          )}
        </View>

        {/* Answer Options */}
        <View style={styles.answersContainer}>
          {currentQuestionData.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={getAnswerButtonStyle(index)}
              onPress={() => !showExplanation && handleAnswerSelect(index)}
              disabled={showExplanation}
            >
              <Text style={[
                styles.answerText,
                showExplanation && index === currentQuestionData.correctAnswer && styles.correctAnswerText,
                showExplanation && index === selectedAnswer && index !== currentQuestionData.correctAnswer && styles.incorrectAnswerText
              ]}>
                {String.fromCharCode(65 + index)}. {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Explanation */}
        {showExplanation && (
          <View style={styles.explanationContainer}>
            <Text style={styles.explanationTitle}>Explanation:</Text>
            <Text style={styles.explanationText}>{currentQuestionData.explanation}</Text>
          </View>
        )}
      </ScrollView>

      {/* Footer Actions */}
      <View style={styles.footer}>
        {!showExplanation ? (
          <TouchableOpacity
            style={[styles.submitButton, selectedAnswer === -1 && styles.disabledButton]}
            onPress={() => handleAnswerSubmit()}
            disabled={selectedAnswer === -1}
          >
            <Text style={styles.submitButtonText}>Submit Answer</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNextQuestion}
          >
            <Text style={styles.nextButtonText}>
              {currentQuestion < randomizedQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  progressContainer: {
  },
  progressText: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#e2e8f0',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2196F3',
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  questionContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  difficultyBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 12,
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: '600',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    lineHeight: 26,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 16,
    paddingVertical: 12,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
  },
  answersContainer: {
    marginBottom: 24,
  },
  answerButton: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#e2e8f0',
  },
  selectedAnswer: {
    backgroundColor: '#dbeafe',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  correctAnswer: {
    backgroundColor: '#dcfce7',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#22c55e',
  },
  incorrectAnswer: {
    backgroundColor: '#fef2f2',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#ef4444',
  },
  answerText: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },
  correctAnswerText: {
    color: '#166534',
    fontWeight: '600',
  },
  incorrectAnswerText: {
    color: '#dc2626',
    fontWeight: '600',
  },
  explanationContainer: {
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
    marginBottom: 24,
  },
  explanationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  explanationText: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  submitButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#94a3b8',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: '#22c55e',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default QuizScreen;
