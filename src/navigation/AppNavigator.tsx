// src/navigation/AppNavigator.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { ShipLogo } from '../components/BrandElements';

// Import screens
import DashboardScreen from '../screens/DashboardScreen';
import ModuleListScreen from '../screens/ModuleListScreen';
import QuizScreen from '../screens/QuizScreen';
import ResultsScreen from '../screens/ResultsScreen';
import ModuleCompleteScreen from '../screens/ModuleCompleteScreen';

const Stack = createStackNavigator<RootStackParamList>();

// Custom header logo component
const HeaderLogo: React.FC = () => {
  return (
    <View style={styles.headerLogoContainer}>
      <ShipLogo size={32} />
    </View>
  );
};

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1e3a8a',
            elevation: 4,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          headerRight: () => <HeaderLogo />,
        }}
      >
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen}
          options={{ title: 'SailSharp' }}
        />
        <Stack.Screen 
          name="ModuleList" 
          component={ModuleListScreen}
          options={{ title: 'Course Modules' }}
        />
        <Stack.Screen 
          name="Quiz" 
          component={QuizScreen}
          options={{ title: 'Quiz' }}
        />
        <Stack.Screen 
          name="Results" 
          component={ResultsScreen}
          options={{ title: 'Results' }}
        />
        <Stack.Screen 
          name="ModuleComplete" 
          component={ModuleCompleteScreen}
          options={{ title: 'Module Complete' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerLogoContainer: {
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppNavigator;
