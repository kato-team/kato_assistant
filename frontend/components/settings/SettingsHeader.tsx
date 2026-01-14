// components/settings/SettingsHeader.tsx

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SettingsHeaderProps {
  title: string;
  onBack: () => void;
  rightAction?: () => void;
  rightIcon?: keyof typeof Ionicons.glyphMap;
}

export default function SettingsHeader({ 
  title, 
  onBack, 
  rightAction, 
  rightIcon 
}: SettingsHeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-5 pt-1 pb-3 bg-[#F8F9FA]">
      <TouchableOpacity 
        onPress={onBack}
        className="w-9 h-9 items-center justify-center rounded-full"
        activeOpacity={0.6}
      >
        <Ionicons name="chevron-back" size={28} color="#3B82F6" />
      </TouchableOpacity>
      
      <Text className="text-[17px] font-semibold text-gray-900">{title}</Text>
      
      {rightAction && rightIcon ? (
        <TouchableOpacity 
          onPress={rightAction}
          className="w-9 h-9 items-center justify-center rounded-full"
          activeOpacity={0.6}
        >
          <Ionicons name={rightIcon} size={24} color="#3B82F6" />
        </TouchableOpacity>
      ) : (
        <View className="w-9" />
      )}
    </View>
  );
}