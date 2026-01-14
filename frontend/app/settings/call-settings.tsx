// app/settings/call-settings.tsx

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import SettingsHeader from '../../components/settings/SettingsHeader';

export default function CallSettingsScreen() {
  const router = useRouter();
  const [busyCalls, setBusyCalls] = useState(true);
  const [selectedVoice, setSelectedVoice] = useState('female');
  const [selectedTone, setSelectedTone] = useState('professional');
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const voiceOptions = [
    { id: 'male', label: 'Male Voice', icon: 'man' },
    { id: 'female', label: 'Female Voice', icon: 'woman' },
  ];

  const toneOptions = [
    { id: 'professional', label: 'Professional', icon: 'briefcase' },
    { id: 'friendly', label: 'Friendly', icon: 'happy' },
    { id: 'casual', label: 'Casual', icon: 'chatbubbles' },
  ];

  const languageOptions = [
    { id: 'hindi', label: 'Hindi', flag: '🇮🇳' },
    { id: 'english', label: 'English', flag: '🇬🇧' },
    { id: 'hinglish', label: 'Hinglish', flag: '🔀' },
    { id: 'gujarati', label: 'Gujarati', flag: '🇮🇳' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FA]">
      <SettingsHeader title="Call Settings" onBack={() => router.back()} />

      <ScrollView 
        className="flex-1 px-5" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Feature Banner */}
        <View className="bg-white rounded-[20px] px-4 py-4" style={styles.cardShadow}>
          <View className="flex-row items-center mb-2">
            <View className="bg-white w-10 h-10 rounded-full items-center justify-center mr-3"style={styles.cardShadow}>
              <Ionicons name="call" size={20} color="blue" />
            </View>
            <View className="flex-1">
              <Text className="text-black text-[16px] font-bold">Smart Call Assistant</Text>
              <Text className="text-black text-[12px] mt-0.5">Let AI handle your calls professionally</Text>
            </View>
          </View>
        </View>

        {/* Busy Calls Toggle */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Call Handling
          </Text>
          <View className="bg-white rounded-[20px] px-4 py-1" style={styles.cardShadow}>
            <View className="flex-row items-center justify-between py-4">
              <View className="flex-row items-center flex-1">
                <View className="w-11 h-11 rounded-[14px] bg-red-50 items-center justify-center mr-3">
                  <Ionicons name="call-outline" size={20} color="#EF4444" />
                </View>
                <View className="flex-1">
                  <Text className="text-[15px] font-semibold text-gray-900">
                    Handle Busy Calls
                  </Text>
                  <Text className="text-[12px] text-gray-500 mt-0.5">
                    AI takes calls when you're busy
                  </Text>
                </View>
              </View>
              <Switch
                value={busyCalls}
                onValueChange={setBusyCalls}
                trackColor={{ false: '#E5E7EB', true: '#FCA5A5' }}
                thumbColor={busyCalls ? '#EF4444' : '#F3F4F6'}
              />
            </View>
          </View>
        </View>

        {/* Voice Selection */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Voice Type
          </Text>
          <View className="bg-white rounded-[20px] p-4" style={styles.cardShadow}>
            {voiceOptions.map((option, index) => (
              <TouchableOpacity
                key={option.id}
                className={`flex-row items-center justify-between py-3.5 ${
                  index < voiceOptions.length - 1 ? 'border-b border-gray-50' : ''
                }`}
                onPress={() => setSelectedVoice(option.id)}
                activeOpacity={0.7}
              >
                <View className="flex-row items-center">
                  <View className={`w-11 h-11 rounded-[14px] items-center justify-center mr-3 ${
                    selectedVoice === option.id ? 'bg-blue-50' : 'bg-gray-50'
                  }`}>
                    <Ionicons 
                      name={option.icon as any} 
                      size={22} 
                      color={selectedVoice === option.id ? '#3B82F6' : '#9CA3AF'} 
                    />
                  </View>
                  <Text className={`text-[15px] font-semibold ${
                    selectedVoice === option.id ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {option.label}
                  </Text>
                </View>
                
                {selectedVoice === option.id && (
                  <View className="w-6 h-6 rounded-full bg-blue-500 items-center justify-center">
                    <Ionicons name="checkmark" size={16} color="white" />
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Tone Selection */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Conversation Tone
          </Text>
          <View className="bg-white rounded-[20px] p-3" style={styles.cardShadow}>
            <View className="flex-row flex-wrap">
              {toneOptions.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  className={`w-[31%] m-1 p-3 rounded-[14px] items-center border-2 ${
                    selectedTone === option.id 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-100 bg-gray-50'
                  }`}
                  onPress={() => setSelectedTone(option.id)}
                  activeOpacity={0.7}
                >
                  <Ionicons 
                    name={option.icon as any} 
                    size={24} 
                    color={selectedTone === option.id ? '#8B5CF6' : '#9CA3AF'} 
                  />
                  <Text className={`text-[12px] font-semibold text-center mt-2 ${
                    selectedTone === option.id ? 'text-purple-600' : 'text-gray-700'
                  }`}>
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Language Selection */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Language Preference
          </Text>
          <View className="bg-white rounded-[20px] p-3" style={styles.cardShadow}>
            <View className="flex-row flex-wrap">
              {languageOptions.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  className={`w-[46%] m-1 p-4 rounded-[16px] border-2 ${
                    selectedLanguage === option.id 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-100 bg-gray-50'
                  }`}
                  onPress={() => setSelectedLanguage(option.id)}
                  activeOpacity={0.7}
                >
                  <Text className="text-2xl mb-2 text-center">{option.flag}</Text>
                  <Text className={`text-[14px] font-semibold text-center ${
                    selectedLanguage === option.id ? 'text-green-600' : 'text-gray-700'
                  }`}>
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity 
          className="bg-red-500 rounded-[18px] py-4 mt-8"
          activeOpacity={0.8}
          style={styles.buttonShadow}
        >
          <Text className="text-white text-[16px] font-bold text-center">
            Save Call Settings
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  buttonShadow: {
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  }
};