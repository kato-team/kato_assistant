// app/settings/automation.tsx

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import SettingsHeader from '../../components/settings/SettingsHeader';
import { LinearGradient } from 'expo-linear-gradient';
 
export default function AutomationScreen() {
  const router = useRouter();
  const [customPrompt, setCustomPrompt] = useState('');

  const AutomationCard = ({ 
    icon, 
    title, 
    subtitle, 
    iconBg, 
    iconColor, 
    onPress,
    badge = ''
  }: any) => (
    <TouchableOpacity 
      className="bg-white rounded-md p-4 mb-3"
      style={styles.cardShadow}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center flex-1">
          <View 
            className="w-12 h-12 rounded-md items-center justify-center mr-3"
            style={{ backgroundColor: iconBg }}
          >
            <Ionicons name={icon} size={24} color={iconColor} />
          </View>
          <View className="flex-1 pr-3">
            <View className="flex-row items-center">
              <Text className="text-[15px] font-semibold text-gray-900">
                {title}
              </Text>
              {badge && (
                <View className="ml-2 bg-blue-100 px-2 py-0.5 rounded-full">
                  <Text className="text-[9px] font-bold text-blue-600">{badge}</Text>
                </View>
              )}
            </View>
            <Text className="text-[12px] text-gray-500 mt-0.5">
              {subtitle}
            </Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#C7C7CC" />
      </View>
    </TouchableOpacity>
  );

  const PromptTemplate = ({ title, prompt, onSelect }: any) => (
    <TouchableOpacity 
      className="bg-gray-50 rounded-md p-3 mb-2 border border-gray-100"
      activeOpacity={0.7}
      onPress={() => onSelect(prompt)}
    >
      <View className="flex-row items-center justify-between mb-1">
        <Text className="text-[13px] font-semibold text-gray-900">{title}</Text>
        <Ionicons name="add-circle" size={18} color="#3B82F6" />
      </View>
      <Text className="text-[11px] text-gray-500 leading-4">{prompt}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FA]">
      <SettingsHeader title="Automation Rules" onBack={() => router.back()} />

      <ScrollView 
        className="flex-1 px-3.5" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
       

        {/* Test AI */}
        {/* <View className="mt-6">
  <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
    Testing
  </Text>

  <TouchableOpacity
    activeOpacity={0.8}
    style={{ borderRadius: 12, overflow: 'hidden' }}
  >
    <LinearGradient
      colors={['#a855f7', '#db2777']}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
      style={{ padding: 20 }}
    > */}

      {/* Header */}
      {/* <View className="flex-row items-center mb-3">
        <View className="bg-white/20 w-12 h-12 rounded-full items-center justify-center mr-3">
          <Ionicons name="call" size={24} color="white" />
        </View>

        <View className="flex-1">
          <Text className="text-white text-[17px] font-bold">
            Test AI Call
          </Text>
          <Text className="text-white/90 text-[12px] mt-0.5">
            Get a demo call from your AI assistant
          </Text>
        </View>
      </View> */}

      {/* Info Box */}
      {/* <View className="bg-white/20 rounded-md p-3 mb-3">
        <Text className="text-white/80 text-[11px] mb-2">
          What happens?
        </Text>

        <View className="flex-row mb-2">
          <Text className="text-white text-[12px] mr-2">•</Text>
          <Text className="text-white text-[12px] flex-1">
            You'll receive a call in 30 seconds
          </Text>
        </View> */}

        {/* <View className="flex-row mb-2">
          <Text className="text-white text-[12px] mr-2">•</Text>
          <Text className="text-white text-[12px] flex-1">
            Experience how AI talks to customers
          </Text>
        </View> */}

        {/* <View className="flex-row">
          <Text className="text-white text-[12px] mr-2">•</Text>
          <Text className="text-white text-[12px] flex-1">
            Test voice, tone, and responses
          </Text>
        </View>
      </View> */}

      {/* CTA */}
      {/* <View className="bg-white rounded-md py-3 items-center">
        <View className="flex-row items-center">
          <Ionicons name="play" size={16} color="#8B5CF6" />
          <Text className="text-purple-600 text-[14px] font-bold ml-2">
            Start Test Call Now
          </Text>
        </View>
      </View>

    </LinearGradient>
  </TouchableOpacity>
</View> */}


        {/* Custom Prompts */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Custom AI Prompts
          </Text>
          
          <View className="bg-white rounded-md p-4" style={styles.cardShadow}>
            <View className="flex-row items-center mb-3">
              <Ionicons name="create" size={20} color="#3B82F6" />
              <Text className="text-[15px] font-semibold text-gray-900 ml-2">
                Add Custom Response
              </Text>
            </View>
            
            <Text className="text-[12px] text-gray-500 mb-2">
              Teach AI how to respond to specific questions
            </Text>

            <View className="mb-3">
              <Text className="text-[11px] font-semibold text-gray-600 mb-1.5">
                When customer asks:
              </Text>
              <TextInput
                className="bg-gray-50 rounded-md px-3 py-2.5 text-[13px] text-gray-900 border border-gray-100"
                placeholder="e.g., What are your office hours?"
                placeholderTextColor="#9CA3AF"
                multiline
              />
            </View>

            <View className="mb-3">
              <Text className="text-[11px] font-semibold text-gray-600 mb-1.5">
                AI should respond:
              </Text>
              <TextInput
                className="bg-gray-50 rounded-md px-3 py-2.5 text-[13px] text-gray-900 border border-gray-100"
                placeholder="e.g., Our office is open Monday to Friday, 9 AM to 6 PM"
                placeholderTextColor="#9CA3AF"
                multiline
                numberOfLines={3}
                value={customPrompt}
                onChangeText={setCustomPrompt}
              />
            </View>

            <TouchableOpacity 
              className="bg-blue-500 rounded-sm py-2.5 items-center"
              activeOpacity={0.8}
            >
              <Text className="text-white text-[13px] font-semibold">Add Prompt</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Prompt Templates */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Quick Templates
          </Text>
          
          <PromptTemplate
            title="Business Hours"
            prompt="Our office is open Monday to Friday, 9 AM to 6 PM. We're closed on weekends and public holidays."
            onSelect={setCustomPrompt}
          />
          
          <PromptTemplate
            title="Pricing Information"
            prompt="Our pricing starts from ₹999/month for the professional plan. Please visit our website or speak with our team for detailed pricing."
            onSelect={setCustomPrompt}
          />
          
          <PromptTemplate
            title="Unavailable Response"
            prompt="I'm currently unavailable but will get back to you within 24 hours. For urgent matters, please email support@company.com"
            onSelect={setCustomPrompt}
          />

          <PromptTemplate
            title="Meeting Schedule"
            prompt="I'll check the calendar and schedule a meeting for you. What time works best for you?"
            onSelect={setCustomPrompt}
          />
        </View>

        {/* Automation Rules */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Smart Automation
          </Text>
          
          <AutomationCard
            icon="time"
            title="Business Hours Rules"
            subtitle="Auto-responses based on time"
            iconBg="#FFFBEB"
            iconColor="#F59E0B"
            onPress={() => console.log('Business Hours')}
            badge="COMING"
          />

          <AutomationCard
            icon="people"
            title="VIP Customer Priority"
            subtitle="Special handling for VIP contacts"
            iconBg="#F5F3FF"
            iconColor="#8B5CF6"
            onPress={() => console.log('VIP Priority')}
            badge="COMING"
          />

          <AutomationCard
            icon="notifications"
            title="Smart Notifications"
            subtitle="Intelligent alert system"
            iconBg="#ECFEFF"
            iconColor="#06B6D4"
            onPress={() => console.log('Smart Notifications')}
            badge="COMING"
          />
        </View>

        {/* Info Box */}
        <View className="mt-6 bg-blue-50 rounded-md p-4 border border-blue-100">
          <View className="flex-row items-start">
            <Ionicons name="information-circle" size={20} color="#3B82F6" />
            <View className="flex-1 ml-2">
              <Text className="text-[13px] font-semibold text-blue-900 mb-1">
                Pro Tip
              </Text>
              <Text className="text-[12px] text-blue-700 leading-5">
                Test your custom prompts using the "Test AI Call" feature to ensure your AI responds exactly as you want.
              </Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 7,
    elevation: 0.5,
  }
};