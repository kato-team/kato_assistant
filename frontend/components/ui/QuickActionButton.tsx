import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface QuickActionButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  iconColor?: string;
  onPress?: () => void;
}

export default function QuickActionButton({
  icon,
  label,
  iconColor = '#3B82F6',
  onPress,
}: QuickActionButtonProps) {
  // Get background color based on icon color
  const getBgColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      '#EF4444': '#FEF2F2', // red-50
      '#10B981': '#F0FDF4', // green-50
      '#F59E0B': '#FFFBEB', // amber-50
      '#3B82F6': '#EFF6FF', // blue-50
      '#8B5CF6': '#F5F3FF', // purple-50
    };
    return colorMap[color] || '#EFF6FF';
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className="bg-white rounded-[18px] p-4 items-center justify-center"
      style={{
        aspectRatio: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      <View 
        className="w-12 h-12 rounded-[14px] items-center justify-center mb-2"
        style={{ backgroundColor: getBgColor(iconColor) }}
      >
        <Ionicons name={icon} size={24} color={iconColor} />
      </View>
      <Text className="text-[12px] text-gray-700 text-center font-medium leading-4">
        {label}
      </Text>
    </TouchableOpacity>
  );
}