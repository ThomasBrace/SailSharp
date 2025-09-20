// src/screens/DashboardScreen.tsx

import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../store';
import { Module } from '../types';

const DashboardScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const modules = useSelector((state: RootState) => state.modules);
  const user = useSelector((state: RootState) => state.user);

  const calculateOverallProgress = () => {
    const totalQuestions = modules.reduce((sum, module) => sum + module.totalQuestions, 0);
    const completedQuestions = modules.reduce((sum, module) => sum + module.completedQuestions, 0);
    return totalQuestions > 0 ? Math.round((completedQuestions / totalQuestions) * 100) : 0;
  };

  const overallProgress = calculateOverallProgress();

  const renderModuleCard = (module: Module) => (
    <TouchableOpacity
      key={module.id}
      style={[
        styles.moduleCard,
        module.isCompleted && styles.completedModule
      ]}
      onPress={() => {
        // Navigate to quiz for this module
        navigation.navigate('Quiz', {
          moduleId: module.id,
          moduleName: module.name,
        });
      }}
    >
      <View style={styles.moduleHeader}>
        <View style={styles.iconContainer}>
          <Icon 
            name={module.icon} 
            size={32} 
            color="#1e3a8a" 
          />
        </View>
        <View style={styles.moduleInfo}>
          <Text style={styles.moduleName}>{module.name}</Text>
          <Text style={styles.moduleDescription}>{module.description}</Text>
        </View>
      </View>
      
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${(module.completedQuestions / module.totalQuestions) * 100}%` }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>
          {module.completedQuestions}/{module.totalQuestions} questions
        </Text>
      </View>
      
      {module.isCompleted && (
        <View style={styles.completedBadge}>
          <Text style={styles.completedText}>✓ Completed</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to SailSharp</Text>
          <Text style={styles.subtitle}>Master RYA Day Skipper Theory</Text>
        </View>

        <View style={styles.overallProgress}>
          <Text style={styles.progressTitle}>Overall Progress</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${overallProgress}%` }]} />
          </View>
          <Text style={styles.progressPercentage}>{overallProgress}%</Text>
        </View>

        <View style={styles.modulesContainer}>
          <Text style={styles.sectionTitle}>Course Modules</Text>
          {modules.map(renderModuleCard)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#1e3a8a',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#e2e8f0',
  },
  overallProgress: {
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e3a8a',
    marginBottom: 12,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e2e8f0',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 4,
  },
  progressPercentage: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e3a8a',
    textAlign: 'center',
  },
  modulesContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1e3a8a',
    marginBottom: 16,
  },
  moduleCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  completedModule: {
    borderColor: '#10b981',
    borderWidth: 2,
  },
  moduleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#e2e8f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  moduleInfo: {
    flex: 1,
  },
  moduleName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e3a8a',
    marginBottom: 4,
  },
  moduleDescription: {
    fontSize: 14,
    color: '#64748b',
  },
  progressContainer: {
    marginBottom: 8,
  },
  progressText: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
    marginTop: 4,
  },
  completedBadge: {
    backgroundColor: '#10b981',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  completedText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default DashboardScreen;
