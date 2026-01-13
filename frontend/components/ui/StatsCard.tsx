import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface StatsCardProps {
  icon?: keyof typeof Ionicons.glyphMap;
  value: string | number;
  label: string;
  color?: string;
  iconColor?: string;
}

export default function StatsCard({
  icon,
  value,
  label,
  color = 'text-blue-600',
  iconColor = '#3B82F6',
}: StatsCardProps) {
  // Get background color based on icon color
  const getBgColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      '#EF4444': '#FEF2F2', // red-50
      '#10B981': '#F0FDF4', // green-50
      '#F59E0B': '#FFFBEB', // amber-50
      '#3B82F6': '#EFF6FF', // blue-50
      '#8B5CF6': '#F5F3FF', // purple-50
      '#06B6D4': '#ECFEFF', // cyan-50
    };
    return colorMap[color] || '#EFF6FF';
  };

  return (
    <View
      className="bg-white rounded-[18px] p-4"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      {icon && (
        <View 
          className="w-11 h-11 rounded-[14px] items-center justify-center mb-3"
          style={{ backgroundColor: getBgColor(iconColor) }}
        >
          <Ionicons name={icon} size={22} color={iconColor} />
        </View>
      )}
      <Text className={`text-[28px] font-bold ${color} mb-1`}>{value}</Text>
      <Text className="text-[12px] text-gray-500 leading-4">{label}</Text>
    </View>
  );
}