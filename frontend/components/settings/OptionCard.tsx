// components/settings/OptionCard.tsx

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface OptionCardProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle?: string;
  iconBg?: string;
  iconColor?: string;
  onPress?: () => void;
  badge?: string;
  badgeColor?: 'red' | 'green' | 'blue' | 'orange' | 'purple';
  showArrow?: boolean;
  disabled?: boolean;
}

export default function OptionCard({
  icon,
  title,
  subtitle,
  iconBg = '#EFF6FF',
  iconColor = '#3B82F6',
  onPress,
  badge,
  badgeColor = 'blue',
  showArrow = true,
  disabled = false
}: OptionCardProps) {
  
  const getBadgeStyles = () => {
    const styles = {
      red: 'bg-red-100 text-red-600',
      green: 'bg-green-100 text-green-600',
      blue: 'bg-blue-100 text-blue-600',
      orange: 'bg-orange-100 text-orange-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return styles[badgeColor];
  };

  return (
    <TouchableOpacity 
      className={`bg-white rounded-[18px] p-4 mb-3 ${disabled ? 'opacity-50' : ''}`}
      style={styles.cardShadow}
      activeOpacity={disabled ? 1 : 0.7}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center flex-1">
          <View 
            className="w-12 h-12 rounded-[14px] items-center justify-center mr-3"
            style={{ backgroundColor: iconBg }}
          >
            <Ionicons name={icon} size={24} color={iconColor} />
          </View>
          
          <View className="flex-1 pr-3">
            <View className="flex-row items-center">
              <Text className="text-[15px] font-semibold text-gray-900">
                {title}
              </Text>
              {badge && (
                <View className={`ml-2 px-2 py-0.5 rounded-full ${getBadgeStyles()}`}>
                  <Text className={`text-[9px] font-bold`}>
                    {badge}
                  </Text>
                </View>
              )}
            </View>
            {subtitle && (
              <Text className="text-[12px] text-gray-500 mt-0.5">
                {subtitle}
              </Text>
            )}
          </View>
        </View>
        
        {showArrow && !disabled && (
          <Ionicons name="chevron-forward" size={18} color="#C7C7CC" />
        )}
        {disabled && (
          <View className="bg-gray-100 px-3 py-1 rounded-full">
            <Text className="text-[11px] font-semibold text-gray-500">Soon</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  }
};