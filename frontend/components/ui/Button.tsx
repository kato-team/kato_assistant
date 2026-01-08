import React from 'react';
import { Pressable, Text, View, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ButtonProps {
  title: string;
  onPress: () => void;
  icon?: React.ReactNode;
  variant?: 'primary' | 'glass'; // Diffrent places ke liye options
}

export default function Button({ title, onPress, icon, variant = 'primary' }: ButtonProps) {
  // Image se liya gaya Deep Blue Gradient
  const primaryGradient: [string, string] = ['#09a3da', '#285fd8'];
  const glassGradient: [string, string] = ['#FFFFFF', '#ffffff'];
  
  return (
    <View style={styles.shadowWrapper} className="w-full mb-4">



      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          { transform: [{ scale: pressed ? 0.97 : 1 }], opacity: pressed ? 0.9 : 1 }
        ]}
      >
        <LinearGradient
          colors={variant === 'primary' ? primaryGradient : ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.4)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBg}
          className="flex-row items-center px-6 py-4 border border-white/20"
        >
          {icon && (
            <View className="mr-3">
              {icon}
            </View>
          )}
          
          <Text 
            className={`flex-1 text-center text-[17px] font-bold tracking-tight ${
              variant === 'primary' ? 'text-white' : 'text-[#1C1C1E]'
            }`}
          >
            {title}
          </Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowWrapper: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  gradientBg: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    zIndex: 1, // Button ko shadow ke upar lane ke liye
  }
});