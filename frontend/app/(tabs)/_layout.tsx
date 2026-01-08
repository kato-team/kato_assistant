import { Tabs } from 'expo-router';
import React from 'react';
import '../../global.css'; 
import { HapticTab } from '@/components/haptic-tab';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF', 
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          // backgroundColor: '#F5F5F7',
          // borderTopColor: 'rgba(0, 0, 0, 0.08)',
          display: 'none',
        }
      }}>
    </Tabs>
  );
}