// components/ui/TaskCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TaskCardProps {
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  iconBg: string;
  title: string;
  subtitle: string;
  badge?: string;
  badgeColor?: string;
  onPress?: () => void;
}

export default function TaskCard({
  icon,
  iconColor,
  iconBg,
  title,
  subtitle,
  badge,
  badgeColor = 'bg-red-100',
  onPress,
}: TaskCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center p-3 bg-white rounded-2xl mb-2 shadow-sm"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
      }}
    >
      {/* Icon Container */}
      <View className={`w-10 h-10 rounded-xl ${iconBg} items-center justify-center mr-3`}>
        <Ionicons name={icon} size={20} color={iconColor} />
      </View>

      {/* Content */}
      <View className="flex-1">
        <Text className="text-sm font-semibold text-gray-800">{title}</Text>
        <Text className="text-xs text-gray-500 mt-0.5">{subtitle}</Text>
      </View>

      {/* Badge */}
      {badge && (
        <View className={`px-3 py-1 rounded-full ${badgeColor}`}>
          <Text className="text-xs font-medium text-red-600">{badge}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}