// app/settings/call-settings.tsx

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient'; // npx expo install expo-linear-gradient
import SettingsHeader from '../../components/settings/SettingsHeader';

export default function CallSettingsScreen() {
  const router = useRouter();
  const [busyCalls, setBusyCalls] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState('female');
  const [selectedTone, setSelectedTone] = useState('professional');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  // Blue Gradient for active states
  const activeGradient = ['#0082ff', '#0082ff'];

  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FA]">
      <SettingsHeader title="Call Settings" onBack={() => router.back()} />

      <ScrollView 
        className="flex-1 px-5" 
        showsVerticalScrollIndicator={false}
      >
        {/* Main Unified Card */}
        <View className="bg-white rounded-md p-6 mt-4 shadow-sm" style={styles.cardShadow}>
          
          {/* 1. Busy Calls Handling Section */}
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-1">
              <Text className="text-[14px] font-bold text-gray-800">Busy Calls Handling</Text>
              <Text className="text-[12px] text-gray-400">AI answers when you're busy</Text>
            </View>
            <Switch
              value={busyCalls}
              onValueChange={setBusyCalls}
              trackColor={{ false: '#E5E7EB', true: '#007AFF' }}
              thumbColor={'#FFF'}
              ios_backgroundColor="#E5E7EB"
            />
          </View>

          {/* Divider Line */}
          <View className="h-[1px] bg-gray-100 w-full mb-6" />

          {/* 2. Voice Selection */}
          <View className="mb-6">
            <Text className="text-[14px] font-bold text-gray-700 mb-3">Voice</Text>
            <View className="flex-row justify-between">
              {/* Male Button */}
              <TouchableOpacity 
                onPress={() => setSelectedVoice('male')}
                className="w-[48%] h-14 rounded-sm overflow-hidden"
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
                className="w-[48%] h-14 rounded-sm overflow-hidden"
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

          {/* 3. Tone Selection */}
          <View className="mb-6">
            <Text className="text-[14px] font-bold text-gray-700 mb-3">Tone</Text>
            <View className="flex-row justify-between bg-gray-50 p-1 rounded-sm">
              {['Professional', 'Friendly', 'Casual'].map((tone) => {
                const isActive = selectedTone === tone.toLowerCase();
                return (
                  <TouchableOpacity 
                    key={tone}
                    onPress={() => setSelectedTone(tone.toLowerCase())}
                    className="flex-1 h-10 rounded-sm overflow-hidden mx-0.5"
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

          {/* 4. Language Preference (Dropdown Style) */}
          <View className="mb-2">
            <Text className="text-[14px] font-bold text-gray-700 mb-3">Language Preference</Text>
            <TouchableOpacity 
              activeOpacity={0.7}
              className="flex-row items-center justify-between bg-white px-4 py-4 rounded-sm border border-gray-100 shadow-sm"
              style={styles.dropdownShadow}
            >
              <Text className="text-gray-700 font-medium">{selectedLanguage}</Text>
              <Ionicons name="chevron-down" size={20} color="#000" />
            </TouchableOpacity>
          </View>

           {/* Save Button */}
        <TouchableOpacity 
          className="mt-8 overflow-hidden rounded-sm"
          activeOpacity={0.8}
        >
          <LinearGradient colors={activeGradient} className="py-4">
            <Text className="text-white text-[16px] font-bold text-center">
              Save Call Settings
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        </View>

       

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 7,
    elevation: 0.5,
  },
  dropdownShadow: {
    shadowColor: '#0000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 0.4,
  }
});