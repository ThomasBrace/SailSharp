// src/screens/ResultsScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type ResultsScreenRouteProp = RouteProp<RootStackParamList, 'Results'>;

const ResultsScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<ResultsScreenRouteProp>();
  const { moduleId, moduleName, score, total } = route.params;

  const percentage = Math.round((score / total) * 100);
  const isPassed = percentage >= 70; // RYA Day Skipper pass mark is typically 70%

  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Outstanding! You've mastered this module.";
    if (percentage >= 80) return "Excellent work! You have a strong understanding.";
    if (percentage >= 70) return "Well done! You've passed this module.";
    if (percentage >= 60) return "Good effort! Review the areas you missed.";
    return "Keep studying! Review the material and try again.";
  };

  const getPerformanceColor = () => {
    if (percentage >= 70) return '#22c55e'; // Green for pass
    if (percentage >= 60) return '#f59e0b'; // Amber for close
    return '#ef4444'; // Red for fail
  };

  const handleRetakeQuiz = () => {
    navigation.navigate('Quiz', { moduleId, moduleName });
  };

  const handleBackToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  const handleViewModuleComplete = () => {
    if (isPassed) {
      navigation.navigate('ModuleComplete', { moduleId, moduleName, score, total });
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.moduleName}>{moduleName}</Text>
          <Text style={styles.quizComplete}>Quiz Complete</Text>
        </View>

        {/* Score Display */}
        <View style={styles.scoreContainer}>
          <View style={[styles.scoreCircle, { borderColor: getPerformanceColor() }]}>
            <Text style={[styles.scorePercentage, { color: getPerformanceColor() }]}>
              {percentage}%
            </Text>
            <Text style={styles.scoreLabel}>Score</Text>
          </View>
          
          <View style={styles.scoreDetails}>
            <Text style={styles.scoreText}>
              {score} out of {total} correct
            </Text>
            <Text style={[styles.passStatus, { color: getPerformanceColor() }]}>
              {isPassed ? 'PASSED' : 'NOT PASSED'}
            </Text>
          </View>
        </View>

        {/* Performance Message */}
        <View style={styles.messageContainer}>
          <Text style={styles.performanceMessage}>
            {getPerformanceMessage()}
          </Text>
        </View>

        {/* Performance Breakdown */}
        <View style={styles.breakdownContainer}>
          <Text style={styles.breakdownTitle}>Performance Breakdown</Text>
          
          <View style={styles.breakdownItem}>
            <Text style={styles.breakdownLabel}>Correct Answers</Text>
            <Text style={[styles.breakdownValue, { color: '#22c55e' }]}>{score}</Text>
          </View>
          
          <View style={styles.breakdownItem}>
            <Text style={styles.breakdownLabel}>Incorrect Answers</Text>
            <Text style={[styles.breakdownValue, { color: '#ef4444' }]}>{total - score}</Text>
          </View>
          
          <View style={styles.breakdownItem}>
            <Text style={styles.breakdownLabel}>Total Questions</Text>
            <Text style={styles.breakdownValue}>{total}</Text>
          </View>
          
          <View style={styles.breakdownItem}>
            <Text style={styles.breakdownLabel}>Pass Mark</Text>
            <Text style={styles.breakdownValue}>70%</Text>
          </View>
        </View>

        {/* Recommendations */}
        <View style={styles.recommendationsContainer}>
          <Text style={styles.recommendationsTitle}>Recommendations</Text>
          
          {isPassed ? (
            <View style={styles.recommendationItem}>
              <Text style={styles.recommendationText}>
                🎉 Congratulations! You've successfully completed this module.
              </Text>
            </View>
          ) : (
            <View style={styles.recommendationItem}>
              <Text style={styles.recommendationText}>
                📚 Review the questions you missed and study the explanations.
              </Text>
            </View>
          )}
          
          <View style={styles.recommendationItem}>
            <Text style={styles.recommendationText}>
              🔄 Consider retaking the quiz to reinforce your knowledge.
            </Text>
          </View>
          
          <View style={styles.recommendationItem}>
            <Text style={styles.recommendationText}>
              📖 Continue with other modules to complete your RYA Day Skipper theory.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        {isPassed && (
          <TouchableOpacity
            style={[styles.actionButton, styles.primaryButton]}
            onPress={handleViewModuleComplete}
          >
            <Text style={styles.primaryButtonText}>View Module Complete</Text>
          </TouchableOpacity>
        )}
        
        <TouchableOpacity
          style={[styles.actionButton, styles.secondaryButton]}
          onPress={handleRetakeQuiz}
        >
          <Text style={styles.secondaryButtonText}>Retake Quiz</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.actionButton, styles.tertiaryButton]}
          onPress={handleBackToDashboard}
        >
          <Text style={styles.tertiaryButtonText}>Back to Dashboard</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  moduleName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  quizComplete: {
    fontSize: 16,
    color: '#64748b',
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  scoreCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  scorePercentage: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  scoreLabel: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  scoreDetails: {
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 18,
    color: '#374151',
    marginBottom: 8,
  },
  passStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  messageContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  performanceMessage: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
    lineHeight: 24,
  },
  breakdownContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  breakdownTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  breakdownItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  breakdownLabel: {
    fontSize: 16,
    color: '#64748b',
  },
  breakdownValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  recommendationsContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recommendationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  recommendationItem: {
    marginBottom: 12,
  },
  recommendationText: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  actionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  actionButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButton: {
    backgroundColor: '#22c55e',
  },
  secondaryButton: {
    backgroundColor: '#2196F3',
  },
  tertiaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  tertiaryButtonText: {
    color: '#64748b',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ResultsScreen;
