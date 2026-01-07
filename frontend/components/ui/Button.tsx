import React from 'react';
import { Pressable, Text, View, StyleSheet, Platform } from 'react-native';
import { BlurView } from 'expo-blur'; // Make sure to install: npx expo install expo-blur

interface ButtonProps {
  title: string;
  onPress: () => void;
  icon?: React.ReactNode;
}

export default function Button({ title, onPress, icon }: ButtonProps) {
  return (
    /* 1. Shadow Wrapper: Yeh niche ki taraf deep shadow dega */
    <View style={styles.shadowContainer} className="mb-6 w-full px-1">
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          { transform: [{ scale: pressed ? 0.96 : 1 }] },
          styles.buttonContainer
        ]}
      >
        {/* 2. Glass Effect: BlurView se frosted glass look aayega */}
        <BlurView
          intensity={60}
          tint="light"
          className="flex-row items-center px-6 py-[18px] rounded-[22px] border border-white/60 overflow-hidden"
          style={styles.glassEffect}
        >
          {icon && (
            <View className="w-6 items-start">
              {icon}
            </View>
          )}
          <Text 
            className="flex-1 text-center text-[16px] font-semibold text-[#1C1C1E]"
            style={icon ? { paddingRight: 24 } : {}}
          >
            {title}
          </Text>
        </BlurView>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowContainer: {
    // Is container par shadow lagane se glass effect kharab nahi hota
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.18,
        shadowRadius: 15,
      },
      android: {
        elevation: 12,
      },
    }),
  },
  buttonContainer: {
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent for Glass effect
  },
  glassEffect: {
    width: '100%',
  }
});