import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface TabItem {
  id: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  activeIcon: keyof typeof Ionicons.glyphMap;
}

interface FooterProps {
  activeTab?: string;
  onTabPress?: (tabId: string) => void;
}

const tabs: TabItem[] = [
  { id: 'home', label: 'Home', icon: 'home-outline', activeIcon: 'home' },
  { id: 'calls', label: 'Calls', icon: 'call-outline', activeIcon: 'call' },
  { id: 'add', label: '', icon: 'add', activeIcon: 'add' },
  { id: 'email', label: 'Email', icon: 'mail-outline', activeIcon: 'mail' },
  { id: 'history', label: 'History', icon: 'time-outline', activeIcon: 'time' },
];

export default function Footer({ activeTab = 'home', onTabPress }: FooterProps) {
  return (
    <View 
      className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100"
      style={{
        paddingBottom: Platform.OS === 'ios' ? 20 : 12,
        paddingTop: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 8,
      }}
    >
      <View className="flex-row justify-around items-center px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const isCenterButton = tab.id === 'add';
          
          if (isCenterButton) {
            return (
              <TouchableOpacity
                key={tab.id}
                onPress={() => onTabPress?.(tab.id)}
                activeOpacity={0.8}
                className="-mt-8"
              >
                <LinearGradient
                  colors={['#3B82F6', '#2563EB']}
                  className="w-[60px] h-[60px] rounded-full items-center justify-center"
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    shadowColor: '#3B82F6',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.4,
                    shadowRadius: 12,
                    elevation: 12,
                    borderRadius: 20
                  }}
                >
                  <Text className="text-white font-bold text-[22px]">K</Text>
                </LinearGradient>
              </TouchableOpacity>
            );
          }
          
          return (
            <TouchableOpacity
              key={tab.id}
              onPress={() => onTabPress?.(tab.id)}
              activeOpacity={0.6}
              className="items-center justify-center py-1 px-3 min-w-[60px]"
            >
              <Ionicons 
                name={isActive ? tab.activeIcon : tab.icon} 
                size={24} 
                color={isActive ? '#3B82F6' : '#9CA3AF'} 
              />
              <Text 
                className={`text-[11px] mt-1 font-medium ${
                  isActive ? 'text-blue-500' : 'text-gray-400'
                }`}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}