// app/settings/ai-config.tsx

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import SettingsHeader from '../../components/settings/SettingsHeader';
import OptionCard from '../../components/settings/OptionCard';

export default function AIConfigScreen() {
  const router = useRouter();
  const [selectedVoice, setSelectedVoice] = useState('female');
  const [selectedTone, setSelectedTone] = useState('professional');
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [latestNews, setLatestNews] = useState(true);

  const voiceOptions = [
    { id: 'male', label: 'Male Voice', icon: 'man' },
    { id: 'female', label: 'Female Voice', icon: 'woman' },
  ];

  const toneOptions = [
    { id: 'professional', label: 'Professional', icon: 'briefcase', desc: 'Formal and business-like' },
    { id: 'friendly', label: 'Friendly', icon: 'happy', desc: 'Warm and approachable' },
    { id: 'casual', label: 'Casual', icon: 'chatbubbles', desc: 'Relaxed and informal' },
  ];

  const languageOptions = [
    { id: 'hindi', label: 'Hindi', icon: '🇮🇳' },
    { id: 'english', label: 'English', icon: '🇬🇧' },
    { id: 'hinglish', label: 'Hinglish', icon: '🔀' },
    { id: 'gujarati', label: 'Gujarati', icon: '🇮🇳' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FA]">
      <SettingsHeader title="AI Configuration" onBack={() => router.back()} />

      <ScrollView 
        className="flex-1 px-5" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
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
          <View className="bg-white rounded-[20px] p-4" style={styles.cardShadow}>
            {toneOptions.map((option, index) => (
              <TouchableOpacity
                key={option.id}
                className={`py-3.5 ${
                  index < toneOptions.length - 1 ? 'border-b border-gray-50' : ''
                }`}
                onPress={() => setSelectedTone(option.id)}
                activeOpacity={0.7}
              >
                <View className="flex-row items-center justify-between mb-1">
                  <View className="flex-row items-center flex-1">
                    <View className={`w-11 h-11 rounded-[14px] items-center justify-center mr-3 ${
                      selectedTone === option.id ? 'bg-purple-50' : 'bg-gray-50'
                    }`}>
                      <Ionicons 
                        name={option.icon as any} 
                        size={20} 
                        color={selectedTone === option.id ? '#8B5CF6' : '#9CA3AF'} 
                      />
                    </View>
                    <View className="flex-1">
                      <Text className={`text-[15px] font-semibold ${
                        selectedTone === option.id ? 'text-gray-900' : 'text-gray-600'
                      }`}>
                        {option.label}
                      </Text>
                      <Text className="text-[12px] text-gray-400 mt-0.5">
                        {option.desc}
                      </Text>
                    </View>
                  </View>
                  
                  {selectedTone === option.id && (
                    <View className="w-6 h-6 rounded-full bg-purple-500 items-center justify-center">
                      <Ionicons name="checkmark" size={16} color="white" />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Language Selection */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Language Preference
          </Text>
          <View className="bg-white rounded-[20px] p-3" style={styles.cardShadow}>
            <View className="flex-row flex-wrap justify-between">
              {languageOptions.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  className={`w-[46%] m-1 p-4 rounded-[16px] border-2 ${
                    selectedLanguage === option.id 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-100 bg-gray-50'
                  }`}
                  onPress={() => setSelectedLanguage(option.id)}
                  activeOpacity={0.7}
                >
                  <Text className="text-2xl mb-2 text-center">{option.icon}</Text>
                  <Text className={`text-[14px] font-semibold text-center ${
                    selectedLanguage === option.id ? 'text-blue-600' : 'text-gray-700'
                  }`}>
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Latest News Toggle */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Additional Features
          </Text>
          <View className="bg-white rounded-[20px] px-4 py-1" style={styles.cardShadow}>
            <View className="flex-row items-center justify-between py-4">
              <View className="flex-row items-center flex-1">
                <View className="w-11 h-11 rounded-[14px] bg-orange-50 items-center justify-center mr-3">
                  <Ionicons name="newspaper" size={20} color="#F59E0B" />
                </View>
                <View className="flex-1">
                  <Text className="text-[15px] font-semibold text-gray-900">
                    Latest News Updates
                  </Text>
                  <Text className="text-[12px] text-gray-500 mt-0.5">
                    Get daily news in conversations
                  </Text>
                </View>
              </View>
              <Switch
                value={latestNews}
                onValueChange={setLatestNews}
                trackColor={{ false: '#E5E7EB', true: '#93C5FD' }}
                thumbColor={latestNews ? '#3B82F6' : '#F3F4F6'}
              />
            </View>
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity 
          className="bg-blue-500 rounded-[18px] py-4 mt-8"
          activeOpacity={0.8}
          style={styles.buttonShadow}
        >
          <Text className="text-white text-[16px] font-bold text-center">
            Save Changes
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
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  }
};