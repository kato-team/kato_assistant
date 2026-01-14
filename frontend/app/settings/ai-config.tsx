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
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [latestNews, setLatestNews] = useState(true);

  // Blue Gradient Colors from Image
  const activeGradient = ['#0082ff', '#0082ff'];

  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FA]">
      <SettingsHeader title="AI Configuration" onBack={() => router.back()} />

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
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

          <View className="h-[1px] bg-gray-100 w-full mb-5" />

          {/* Latest News Toggle */}
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-[14px] font-bold text-gray-800">Latest News</Text>
              <Text className="text-[12px] text-gray-400">Business news updates</Text>
            </View>
            <Switch
              value={latestNews}
              onValueChange={setLatestNews}
              trackColor={{ false: '#E5E7EB', true: '#007AFF' }}
              thumbColor={'#FFF'}
              ios_backgroundColor="#E5E7EB"
            />
          </View>
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