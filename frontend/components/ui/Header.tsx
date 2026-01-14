// components\ui\Header.tsx

import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  showSettings?: boolean;
  onBackPress?: () => void;
  onProfilePress?: () => void;
}

export default function Header({
  title, 
  showBackButton = false, 
  showSettings = true,
  onBackPress,
  onProfilePress,
}: HeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-4 pt-2 pb-3 bg-[#F8F9FA]">
      {/* Left Side */}
      <TouchableOpacity onPress={onBackPress} activeOpacity={0.7}>
        {showBackButton ? (
          <View 
            className="w-11 h-11 rounded-[14px] bg-white items-center justify-center" 
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.08,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Ionicons name="arrow-back" size={22} color="#1F2937" />
          </View>
        ) : (
          <LinearGradient
            colors={['#3B82F6', '#2563EB']}
            className="w-11 h-11  items-center justify-center"
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              shadowColor: '#3B82F6',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 6,
              elevation: 4,
              borderRadius: 20
            }}
          >
            <Text className="text-white font-bold text-[20px]">K</Text>
          </LinearGradient>
        )}
      </TouchableOpacity>

      {/* Center - Title/Date */}
      <View className="items-center">
        {title ? (
          <Text className="text-[18px] font-semibold text-gray-900">{title}</Text>
        ) : (
          <View className="items-center">
            <Text className="text-[11px] text-gray-500 font-medium tracking-wide">Today</Text>
            <Text className="text-[16px] font-bold text-gray-900 mt-0.5">Jan 13</Text>
          </View>
        )}
      </View>

      {/* Right Side - Settings */}
      {showSettings ? (
        <TouchableOpacity 
          className="w-11 h-11 rounded-[14px] bg-white items-center justify-center"
          onPress={onProfilePress}
          activeOpacity={0.7}
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.08,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Ionicons name="settings-outline" size={22} color="#6B7280" />
        </TouchableOpacity>
      ) : (
        <View className="w-11 h-11" />
      )}
    </View>
  );
}