// app/settings/help.tsx

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import SettingsHeader from '../../components/settings/SettingsHeader';

export default function HelpScreen() {
  const router = useRouter();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the AI assistant work?",
      answer: "Our AI assistant uses advanced natural language processing to understand and respond to calls, emails, and tasks. It learns from your preferences and handles routine communications automatically while keeping you informed."
    },
    {
      question: "Can I customize the AI's responses?",
      answer: "Yes! You can set custom prompts, choose voice type, tone, and language preferences in the AI Configuration settings. You can also create automation rules for specific scenarios."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use end-to-end encryption for all your data. Your calls, emails, and personal information are protected with industry-standard security measures. You can review our security settings anytime."
    },
    {
      question: "How do I handle busy calls?",
      answer: "Enable 'Handle Busy Calls' in Call Settings. When you cut a call or are unavailable, the AI assistant will automatically answer and handle the conversation professionally based on your preferences."
    },
    {
      question: "Can I test the AI before using it with customers?",
      answer: "Yes! Use the 'Test AI Call' feature in Automation Rules to receive a demo call from your AI assistant. This helps you understand how it will interact with your customers."
    },
    {
      question: "What integrations are available?",
      answer: "Currently, we support Gmail, Calendar, Tasks, and Phone integration. WhatsApp Business, CRM, and social media integrations are coming soon. Check the Integrations page for updates."
    }
  ];

  const quickLinks = [
    { icon: "videocam", title: "Video Tutorials", subtitle: "Watch Hindi tutorials", iconBg: "#FEF2F2", iconColor: "#EF4444" },
    { icon: "people", title: "Community Forum", subtitle: "Connect with other users", iconBg: "#EFF6FF", iconColor: "#3B82F6" },
    { icon: "chatbubbles", title: "Live Chat Support", subtitle: "Chat with our team", iconBg: "#F0FDF4", iconColor: "#10B981" },
    { icon: "call", title: "Phone Support", subtitle: "Call us: +91 98765 43210", iconBg: "#F5F3FF", iconColor: "#8B5CF6" },
  ];

  const FAQItem = ({ question, answer, index }: any) => {
    const isExpanded = expandedFAQ === index;
    
    return (
      <TouchableOpacity 
        className={`py-4 ${index < faqs.length - 1 ? 'border-b border-gray-50' : ''}`}
        activeOpacity={0.7}
        onPress={() => setExpandedFAQ(isExpanded ? null : index)}
      >
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-[15px] font-semibold text-gray-900 flex-1 pr-3">
            {question}
          </Text>
          <Ionicons 
            name={isExpanded ? "chevron-up" : "chevron-down"} 
            size={20} 
            color="#9CA3AF" 
          />
        </View>
        
        {isExpanded && (
          <Text className="text-[13px] text-gray-600 leading-5 mt-2">
            {answer}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  const QuickLinkCard = ({ icon, title, subtitle, iconBg, iconColor }: any) => (
    <TouchableOpacity 
      className="bg-white rounded-[18px] p-4 mb-3"
      style={styles.cardShadow}
      activeOpacity={0.7}
    >
      <View className="flex-row items-center">
        <View 
          className="w-12 h-12 rounded-[14px] items-center justify-center mr-3"
          style={{ backgroundColor: iconBg }}
        >
          <Ionicons name={icon as any} size={24} color={iconColor} />
        </View>
        <View className="flex-1 pr-3">
          <Text className="text-[15px] font-semibold text-gray-900">
            {title}
          </Text>
          <Text className="text-[12px] text-gray-500 mt-0.5">
            {subtitle}
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#C7C7CC" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FA]">
      <SettingsHeader title="Help & Support" onBack={() => router.back()} />

      <ScrollView 
        className="flex-1 px-5" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Search Bar */}
        <View className="mt-6">
          <View className="bg-white rounded-[18px] px-4 py-3 flex-row items-center" style={styles.cardShadow}>
            <Ionicons name="search" size={20} color="#9CA3AF" />
            <TextInput
              className="flex-1 ml-3 text-[15px] text-gray-900"
              placeholder="Search for help..."
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        {/* Quick Links */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Quick Help
          </Text>
          {quickLinks.map((link, index) => (
            <QuickLinkCard
              key={index}
              icon={link.icon}
              title={link.title}
              subtitle={link.subtitle}
              iconBg={link.iconBg}
              iconColor={link.iconColor}
            />
          ))}
        </View>

        {/* FAQs */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Frequently Asked Questions
          </Text>
          <View className="bg-white rounded-[20px] px-4 py-1" style={styles.cardShadow}>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </View>
        </View>

        {/* Getting Started Guide */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Getting Started
          </Text>
          
          <View className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-[20px] p-5" style={styles.cardShadow}>
            <View className="flex-row items-center mb-4">
              <View className="bg-white/20 w-12 h-12 rounded-full items-center justify-center mr-3">
                <Ionicons name="rocket" size={24} color="white" />
              </View>
              <View className="flex-1">
                <Text className="text-white text-[17px] font-bold">Quick Start Guide</Text>
                <Text className="text-white/90 text-[12px] mt-0.5">
                  Learn the basics in 5 minutes
                </Text>
              </View>
            </View>

            <View className="space-y-3">
              <View className="flex-row items-start mb-3">
                <View className="w-6 h-6 rounded-full bg-white/30 items-center justify-center mr-3 mt-0.5">
                  <Text className="text-white text-[12px] font-bold">1</Text>
                </View>
                <Text className="text-white text-[13px] flex-1">
                  Set up your AI voice and language preferences
                </Text>
              </View>

              <View className="flex-row items-start mb-3">
                <View className="w-6 h-6 rounded-full bg-white/30 items-center justify-center mr-3 mt-0.5">
                  <Text className="text-white text-[12px] font-bold">2</Text>
                </View>
                <Text className="text-white text-[13px] flex-1">
                  Connect your Gmail and Calendar
                </Text>
              </View>

              <View className="flex-row items-start mb-3">
                <View className="w-6 h-6 rounded-full bg-white/30 items-center justify-center mr-3 mt-0.5">
                  <Text className="text-white text-[12px] font-bold">3</Text>
                </View>
                <Text className="text-white text-[13px] flex-1">
                  Enable call handling for busy situations
                </Text>
              </View>

              <View className="flex-row items-start">
                <View className="w-6 h-6 rounded-full bg-white/30 items-center justify-center mr-3 mt-0.5">
                  <Text className="text-white text-[12px] font-bold">4</Text>
                </View>
                <Text className="text-white text-[13px] flex-1">
                  Test your AI with a demo call
                </Text>
              </View>
            </View>

            <TouchableOpacity 
              className="bg-white rounded-[14px] py-3 items-center mt-4"
              activeOpacity={0.8}
            >
              <Text className="text-blue-600 text-[14px] font-bold">Watch Tutorial Video</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Contact Support */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Still Need Help?
          </Text>
          
          <View className="bg-white rounded-[20px] p-5" style={styles.cardShadow}>
            <View className="items-center mb-4">
              <View className="w-16 h-16 rounded-full bg-green-50 items-center justify-center mb-3">
                <Ionicons name="headset" size={32} color="#10B981" />
              </View>
              <Text className="text-[17px] font-bold text-gray-900">Contact Support Team</Text>
              <Text className="text-[13px] text-gray-500 text-center mt-1">
                We're here to help 24/7
              </Text>
            </View>

            <TouchableOpacity 
              className="bg-green-500 rounded-[14px] py-3.5 items-center mb-3"
              activeOpacity={0.8}
              style={styles.buttonShadow}
            >
              <View className="flex-row items-center">
                <Ionicons name="chatbubbles" size={18} color="white" />
                <Text className="text-white text-[15px] font-bold ml-2">Start Live Chat</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              className="bg-gray-100 rounded-[14px] py-3.5 items-center"
              activeOpacity={0.7}
            >
              <View className="flex-row items-center">
                <Ionicons name="mail" size={18} color="#6B7280" />
                <Text className="text-gray-700 text-[15px] font-semibold ml-2">Email Support</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* App Info */}
        <View className="mt-6 mb-4">
          <View className="bg-gray-50 rounded-[16px] p-4 items-center">
            <Text className="text-[12px] text-gray-500 mb-1">Kato AI Assistant</Text>
            <Text className="text-[13px] font-semibold text-gray-700">Version 1.0.0</Text>
            <Text className="text-[11px] text-gray-400 mt-2">© 2026 Kato. All rights reserved.</Text>
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
    shadowRadius: 8,
    elevation: 3,
  },
  buttonShadow: {
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  }
};