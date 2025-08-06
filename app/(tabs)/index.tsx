import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

// Import screens
import HomeScreen from '../../components/HomeScreen';
import DevicesScreen from '../../components/DevicesScreen';
import SettingsScreen from '../../components/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#1a1a2e" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Devices') {
              iconName = focused ? 'hardware-chip' : 'hardware-chip-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#1a1a2e',
            borderTopColor: '#2d2d44',
          },
          headerStyle: {
            backgroundColor: '#1a1a2e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Smart Home' }}
        />
        <Tab.Screen 
          name="Devices" 
          component={DevicesScreen}
          options={{ title: 'My Devices' }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
      </Tab.Navigator>
    </>
  );
}
