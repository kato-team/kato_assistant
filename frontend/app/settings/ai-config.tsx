// app/settings/ai-config.tsx

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient'; // Install this: npx expo install expo-linear-gradient
import SettingsHeader from '../../components/settings/SettingsHeader';

export default function AIConfigScreen() {
  const router = useRouter();
  const [selectedVoice, setSelectedVoice] = useState('female');
  const [selectedTone, setSelectedTone] = useState('professional');
  const [aiPaused, setAiPaused] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  // Blue Gradient Colors from Image
  const activeGradient = ['#0082ff', '#0082ff'];

  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FA]">
      <SettingsHeader title="AI Configuration" onBack={() => router.back()} />

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>

         {/* Emergency Controls */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Emergency Controls
          </Text>
          
          <View className="bg-white rounded-md px-4 py-1" style={styles.cardShadow}>
            <View className="flex-row items-center justify-between py-4">
              <View className="flex-row items-center flex-1">
                <View className="w-12 h-12 rounded-[14px] bg-red-50 items-center justify-center mr-3">
                  <Ionicons name="pause-circle" size={24} color="#EF4444" />
                </View>
                <View className="flex-1 pr-3">
                  <Text className="text-[15px] font-semibold text-gray-900">
                    Pause AI Assistant
                  </Text>
                  <Text className="text-[12px] text-gray-500 mt-0.5">
                    Temporarily disable all AI actions
                  </Text>
                </View>
              </View>
              <Switch
                value={aiPaused}
                onValueChange={setAiPaused}
                trackColor={{ false: '#E5E7EB', true: '#FCA5A5' }}
                thumbColor={aiPaused ? '#EF4444' : '#F3F4F6'}
              />
            </View>
          </View>

          {aiPaused && (
            <View className="mt-3 bg-red-50 rounded-md p-4 border border-red-100">
              <View className="flex-row items-start">
                <Ionicons name="warning" size={18} color="#EF4444" />
                <Text className="text-[12px] text-red-700 ml-2 flex-1 leading-5">
                  AI Assistant is currently paused. All calls and messages will not be handled automatically.
                </Text>
              </View>
            </View>
          )}
        </View>

        <View className="bg-white rounded-md p-6 mt-4 shadow-sm" style={styles.cardShadow}>
          
          {/* Voice Section */}
          <View className="mb-6">
            <Text className="text-[14px] font-bold text-gray-700 mb-3">Voice</Text>
            <View className="flex-row justify-between">
              {/* Male Button */}
              <TouchableOpacity 
                onPress={() => setSelectedVoice('male')}
                className="w-[48%] h-14 rounded-md overflow-hidden"
              >
                {selectedVoice === 'male' ? (
                  <LinearGradient colors={activeGradient} className="flex-1 flex-row items-center justify-center">
                    <Text className="text-lg mr-2">👦</Text>
                    <Text className="font-bold text-white">Male</Text>
                  </LinearGradient>
                ) : (
                  <View className="flex-1 flex-row items-center justify-center bg-white border border-gray-100">
                    <Text className="text-lg mr-2">👦</Text>
                    <Text className="font-bold text-gray-400">Male</Text>
                  </View>
                )}
              </TouchableOpacity>

              {/* Female Button */}
              <TouchableOpacity 
                onPress={() => setSelectedVoice('female')}
                className="w-[48%] h-14 rounded-md overflow-hidden"
              >
                {selectedVoice === 'female' ? (
                  <LinearGradient colors={activeGradient} className="flex-1 flex-row items-center justify-center">
                    <Text className="text-lg mr-2">👧</Text>
                    <Text className="font-bold text-white">Female</Text>
                  </LinearGradient>
                ) : (
                  <View className="flex-1 flex-row items-center justify-center bg-gray-50">
                    <Text className="text-lg mr-2">👧</Text>
                    <Text className="font-bold text-gray-400">Female</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Tone Section */}
          <View className="mb-6">
            <Text className="text-[14px] font-bold text-gray-700 mb-3">Tone</Text>
            <View className="flex-row justify-between bg-gray-50 p-1 rounded-md">
              {['Professional', 'Friendly', 'Casual'].map((tone) => {
                const isActive = selectedTone === tone.toLowerCase();
                return (
                  <TouchableOpacity 
                    key={tone}
                    onPress={() => setSelectedTone(tone.toLowerCase())}
                    className="flex-1 h-10 rounded-md overflow-hidden mx-0.5"
                  >
                    {isActive ? (
                      <LinearGradient colors={activeGradient} className="flex-1 items-center justify-center">
                        <Text className="text-[12px] font-bold text-white">{tone}</Text>
                      </LinearGradient>
                    ) : (
                      <View className="flex-1 items-center justify-center">
                        <Text className="text-[12px] font-bold text-gray-400">{tone}</Text>
                      </View>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Language Section */}
          <View className="mb-6">
            <Text className="text-[14px] font-bold text-gray-700 mb-3">Language Preference</Text>
            <TouchableOpacity className="flex-row items-center justify-between bg-gray-50 px-4 py-4 rounded-md border border-gray-100 shadow-inner">
              <Text className="text-gray-700 font-medium">{selectedLanguage}</Text>
              <Ionicons name="chevron-down" size={20} color="#374151" />
            </TouchableOpacity>
          </View>

          {/* <View className="" /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 0.5,
  }
});