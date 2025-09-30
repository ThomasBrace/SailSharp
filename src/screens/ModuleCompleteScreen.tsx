// src/screens/ModuleCompleteScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type ModuleCompleteScreenRouteProp = RouteProp<RootStackParamList, 'ModuleComplete'>;

const ModuleCompleteScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<ModuleCompleteScreenRouteProp>();
  const { moduleId, moduleName, score, total } = route.params;

  const percentage = Math.round((score / total) * 100);

  const handleContinueToNextModule = () => {
    // For now, just go back to dashboard
    // In the future, this could navigate to the next available module
    navigation.navigate('Dashboard');
  };

  const handleBackToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  const handleRetakeQuiz = () => {
    navigation.navigate('Quiz', { moduleId, moduleName });
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.celebrationIcon}>
            <Text style={styles.celebrationEmoji}>🎉</Text>
          </View>
          <Text style={styles.moduleName}>{moduleName}</Text>
          <Text style={styles.completionStatus}>Module Complete!</Text>
        </View>

        {/* Achievement Badge */}
        <View style={styles.achievementContainer}>
          <View style={styles.achievementBadge}>
            <Text style={styles.achievementIcon}>🏆</Text>
            <Text style={styles.achievementTitle}>Module Mastered</Text>
            <Text style={styles.achievementScore}>{percentage}% Score</Text>
          </View>
        </View>

        {/* Completion Message */}
        <View style={styles.messageContainer}>
          <Text style={styles.congratulationsText}>
            Congratulations! You've successfully completed the {moduleName} module.
          </Text>
          <Text style={styles.achievementText}>
            You scored {score} out of {total} questions correctly, demonstrating a strong understanding of the material.
          </Text>
        </View>

        {/* Progress Information */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Your Achievement</Text>
          
          <View style={styles.progressItem}>
            <Text style={styles.progressLabel}>Module Completed</Text>
            <Text style={[styles.progressValue, { color: '#22c55e' }]}>✓ {moduleName}</Text>
          </View>
          
          <View style={styles.progressItem}>
            <Text style={styles.progressLabel}>Final Score</Text>
            <Text style={[styles.progressValue, { color: '#22c55e' }]}>{percentage}%</Text>
          </View>
          
          <View style={styles.progressItem}>
            <Text style={styles.progressLabel}>Questions Correct</Text>
            <Text style={[styles.progressValue, { color: '#22c55e' }]}>{score}/{total}</Text>
          </View>
          
          <View style={styles.progressItem}>
            <Text style={styles.progressLabel}>Status</Text>
            <Text style={[styles.progressValue, { color: '#22c55e' }]}>PASSED</Text>
          </View>
        </View>

        {/* Next Steps */}
        <View style={styles.nextStepsContainer}>
          <Text style={styles.nextStepsTitle}>What's Next?</Text>
          
          <View style={styles.nextStepItem}>
            <Text style={styles.nextStepText}>
              🎯 Continue with other RYA Day Skipper modules to complete your theory course.
            </Text>
          </View>
          
          <View style={styles.nextStepItem}>
            <Text style={styles.nextStepText}>
              📚 Review this module periodically to maintain your knowledge.
            </Text>
          </View>
          
          <View style={styles.nextStepItem}>
            <Text style={styles.nextStepText}>
              🚢 Consider practical sailing experience to complement your theoretical knowledge.
            </Text>
          </View>
          
          <View style={styles.nextStepItem}>
            <Text style={styles.nextStepText}>
              📋 Track your progress across all modules in the dashboard.
            </Text>
          </View>
        </View>

        {/* RYA Information */}
        <View style={styles.ryaContainer}>
          <Text style={styles.ryaTitle}>RYA Day Skipper Theory</Text>
          <Text style={styles.ryaText}>
            This module is part of the comprehensive RYA Day Skipper Theory course. 
            Complete all modules to achieve your RYA Day Skipper Theory certification.
          </Text>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={[styles.actionButton, styles.primaryButton]}
          onPress={handleContinueToNextModule}
        >
          <Text style={styles.primaryButtonText}>Continue Learning</Text>
        </TouchableOpacity>
        
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
    paddingVertical: 32,
  },
  celebrationIcon: {
    marginBottom: 16,
  },
  celebrationEmoji: {
    fontSize: 64,
  },
  moduleName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  completionStatus: {
    fontSize: 18,
    color: '#22c55e',
    fontWeight: '600',
  },
  achievementContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  achievementBadge: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#22c55e',
  },
  achievementIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  achievementTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  achievementScore: {
    fontSize: 16,
    color: '#22c55e',
    fontWeight: '600',
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
  congratulationsText: {
    fontSize: 18,
    color: '#1e293b',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 26,
  },
  achievementText: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
  },
  progressContainer: {
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
  progressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  progressItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  progressLabel: {
    fontSize: 16,
    color: '#64748b',
  },
  progressValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  nextStepsContainer: {
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
  nextStepsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  nextStepItem: {
    marginBottom: 12,
  },
  nextStepText: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  ryaContainer: {
    backgroundColor: '#f0f9ff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  ryaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 8,
  },
  ryaText: {
    fontSize: 14,
    color: '#1e40af',
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

export default ModuleCompleteScreen;