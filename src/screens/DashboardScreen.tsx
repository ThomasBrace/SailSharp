// src/screens/DashboardScreen.tsx

import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../store';
import { Module } from '../types';
import { ShipLogo, WaveBackground } from '../components/BrandElements';

const DashboardScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const modules = useSelector((state: RootState) => state.modules);
  const user = useSelector((state: RootState) => state.user);
  const { width: screenWidth } = useWindowDimensions();


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
      
      
      {module.isCompleted && (
        <View style={styles.completedBadge}>
          <Text style={styles.completedText}>✓ Completed</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.header}>
          {/* Header Content on Top */}
          <View style={styles.headerContent}>
            <View style={styles.headerText}>
              <Text style={styles.title}>Welcome to SailSharp</Text>
              <Text style={styles.subtitle}>Master RYA Day Skipper Theory</Text>
            </View>
          </View>
        </View>

        <View style={styles.modulesContainer}>
          <Text style={styles.sectionTitle}>Course Modules</Text>
          {modules.map(renderModuleCard)}
        </View>

        {/* Footer Wave Decoration */}
        <View style={styles.footer}>
          <WaveBackground 
            width={screenWidth + 20} 
            height={120} 
            style={styles.footerWave}
          />
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
  scrollViewContent: {
    paddingBottom: 0,
  },
  header: {
    position: 'relative',
    backgroundColor: '#1e3a8a',
    overflow: 'hidden',
    minHeight: 110,
  },
  waveBackgroundLayer: {
    position: 'absolute',
    bottom: 0,
    left: -10,
    right: -10,
    width: '110%',
    zIndex: 0,
  },
  waveDecoration: {
    opacity: 1,
  },
  headerContent: {
    position: 'relative',
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  headerLogo: {
    marginRight: 0,
  },
  headerText: {
    flex: 1,
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
  footer: {
    width: '100%',
    marginTop: -30,
    marginBottom: -40,
    overflow: 'visible',
    alignItems: 'center',
  },
  footerWave: {
    opacity: 1,
    marginLeft: -10,
    marginBottom: -20,
  },
});

export default DashboardScreen;
