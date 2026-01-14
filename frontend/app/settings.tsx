// app/settings.tsx

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { routePatternToRegex } from 'expo-router/build/fork/getStateFromPath-forks';

export default function SettingsScreen() {
  const router = useRouter();

  const SettingItem = ({ 
    icon, 
    title, 
    subtitle, 
    iconBg = '#EFF6FF', 
    iconColor = '#3B82F6',
    isLast = false,
    onPress,
    showBadge = false,
    badgeText = ''
  }: any) => (
    <TouchableOpacity 
      className={`flex-row items-center justify-between py-4 ${!isLast ? 'border-b border-gray-50' : ''}`}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <View className="flex-row items-center flex-1">
        <View 
          className="w-11 h-11 rounded-[14px] items-center justify-center mr-3.5"
          style={{ backgroundColor: iconBg }}
        >
          <Ionicons name={icon} size={20} color={iconColor} />
        </View>
        
        <View className="flex-1 pr-3">
          <View className="flex-row items-center">
            <Text className="text-[15px] font-semibold text-gray-900 mb-0.5">
              {title}
            </Text>
            {showBadge && (
              <View className="ml-2 bg-red-500 px-2 py-0.5 rounded-full">
                <Text className="text-[9px] font-bold text-white">{badgeText}</Text>
              </View>
            )}
          </View>
          <Text className="text-[13px] text-gray-500 font-medium leading-4">
            {subtitle}
          </Text>
        </View>
      </View>
      
      <Ionicons name="chevron-forward" size={18} color="#C7C7CC" />
    </TouchableOpacity>
  );

  const SectionHeader = ({ title }: { title: string }) => (
    <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-2.5 mt-6 px-1">
      {title}
    </Text>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FA]">
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 pt-1 pb-3 bg-[#F8F9FA]">
        <TouchableOpacity 
          onPress={() => router.back()}
          className="w-9 h-9 items-center justify-center rounded-full"
          activeOpacity={0.6}
        >
          <Ionicons name="chevron-back" size={28} color="#3B82F6" />
        </TouchableOpacity>
        <Text className="text-[17px] font-semibold text-gray-900">Settings</Text>
        <View className="w-9" />
      </View>

      <ScrollView 
        className="flex-1" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40, paddingTop: 5 }}
      >
        <View className="px-5">
          
          {/* Profile Card */}
          <View style={styles.cardShadow} className="bg-white rounded-[20px] p-6 mb-6 items-center relative">
            {/* Pro Member Badge */}
            <View className="absolute top-4 right-4 bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
              <Text className="text-[10px] font-bold text-green-600 uppercase tracking-wider">
                Pro Member
              </Text>
            </View>

            {/* Profile Avatar */}
            <LinearGradient
              colors={['#3B82F6', '#2563EB']}
              className="w-20 h-20 items-center justify-center mb-3"
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.avatarShadow}
            >
              <Text className="text-white text-3xl font-bold">JD</Text>
            </LinearGradient>

            {/* Name & Email */}
            <Text className="text-[20px] font-bold text-gray-900 mb-1">
              John Doe
            </Text>
            <Text className="text-[14px] text-gray-500 font-medium mb-5">
              john@example.com
            </Text>

            {/* Edit Profile Button */}
            <TouchableOpacity 
              className="bg-gray-50 py-2.5 px-6 rounded-full flex-row items-center border border-gray-100"
              activeOpacity={0.7}
              onPress={() => router.push('/settings/profile')}
            >
              <Ionicons name="pencil" size={14} color="#6B7280" />
              <Text className="text-[13px] font-semibold text-gray-700 ml-2">
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>

          {/* AI & Automation Section */}
          <SectionHeader title="AI & Automation" />
          <View style={styles.cardShadow} className="bg-white rounded-[20px] px-4 py-1 mb-1">
            <SettingItem 
              icon="hardware-chip" 
              title="AI Configuration" 
              subtitle="Voice, tone, language preferences"
              iconBg="#EFF6FF"
              iconColor="#3B82F6"
              onPress={() => router.push('/settings/ai-config')}
            />
            <SettingItem 
              icon="call" 
              title="Call Settings" 
              subtitle="Busy calls, voice preferences"
              iconBg="#FEF2F2"
              iconColor="#EF4444"
              showBadge={true}
              badgeText="NEW"
              onPress={() => router.push('/settings/call-settings')}
            />
            <SettingItem 
              icon="git-branch" 
              title="Automation Rules" 
              subtitle="Custom prompts & actions"
              iconBg="#F5F3FF"
              iconColor="#8B5CF6"
              onPress={() => router.push('/settings/automation')}
              isLast={true}
            />
          </View>

          {/* Account & Data Section */}
          <SectionHeader title="Account & Data" />
          <View style={styles.cardShadow} className="bg-white rounded-[20px] px-4 py-1 mb-1">
            <SettingItem 
              icon="notifications" 
              title="Notifications" 
              subtitle="Alerts & summaries"
              iconBg="#FFFBEB"
              iconColor="#F59E0B"
              onPress={() => router.push('/settings/notifications')}
            />
            <SettingItem 
              icon="link" 
              title="Integrations" 
              subtitle="Gmail, Calendar, Phone"
              iconBg="#ECFEFF"
              iconColor="#06B6D4"
              onPress={() => router.push('/settings/integrations')}
            />
            <SettingItem 
              icon="shield-checkmark" 
              title="Privacy & Security" 
              subtitle="Data protection, 2FA"
              iconBg="#F0FDF4"
              iconColor="#10B981"
              onPress={() => router.push('/settings/privacy')}
            />
            <SettingItem 
              icon="card" 
              title="Billing & Subscription" 
              subtitle="Professional Plan"
              iconBg="#FEF2F2"
              iconColor="#EF4444"
              onPress={() => router.push('/settings/billing')}
              isLast={true}
            />
          </View>

          {/* Support Section */}
          <SectionHeader title="Support" />
          <View style={styles.cardShadow} className="bg-white rounded-[20px] px-4 py-1 mb-8">
            <SettingItem 
              icon="help-circle" 
              title="Help & Support" 
              subtitle="FAQs, tutorials, contact"
              iconBg="#F5F3FF"
              iconColor="#8B5CF6"
              onPress={() => router.push('/settings/help')}
              isLast={true}
            />
          </View>

          {/* Logout Button */}
          <TouchableOpacity 
            style={styles.cardShadow}
            className="flex-row items-center justify-center bg-white rounded-[20px] py-3.5 mb-3"
            activeOpacity={0.7}
            onPress={() => {
              // Handle logout logic
              console.log('Logout pressed');
            }}
          >
            <Ionicons name="log-out-outline" size={20} color="#EF4444" />
            <Text className="ml-2 text-[15px] font-semibold text-red-500">
              Logout
            </Text>
          </TouchableOpacity>

          <Text className="text-center text-[13px] text-gray-400 font-medium">
            Version 1.0.0
          </Text>

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
  avatarShadow: {
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    borderRadius: 20,
  }
};