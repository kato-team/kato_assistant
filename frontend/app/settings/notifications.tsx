// app/settings/notifications.tsx

import React, { useState } from 'react';
import { View, Text, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import SettingsHeader from '../../components/settings/SettingsHeader';

export default function NotificationsScreen() {
  const router = useRouter();
  
  const [missedCallAlerts, setMissedCallAlerts] = useState(true);
  const [dailySummaryMorning, setDailySummaryMorning] = useState(true);
  const [dailySummaryEvening, setDailySummaryEvening] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailSummary, setEmailSummary] = useState(true);
  const [meetingReminders, setMeetingReminders] = useState(true);

  const NotificationToggle = ({ 
    icon, 
    title, 
    subtitle, 
    value, 
    onValueChange, 
    iconBg, 
    iconColor, 
    isLast = false,
    badge = false 
  }: any) => (
    <View className={`flex-row items-center justify-between py-4 ${!isLast ? 'border-b border-gray-50' : ''}`}>
      <View className="flex-row items-center flex-1">
        <View 
          className="w-11 h-11 rounded-[14px] items-center justify-center mr-3"
          style={{ backgroundColor: iconBg }}
        >
          <Ionicons name={icon} size={20} color={iconColor} />
        </View>
        <View className="flex-1 pr-3">
          <View className="flex-row items-center">
            <Text className="text-[15px] font-semibold text-gray-900">
              {title}
            </Text>
            {badge && (
              <View className="ml-2 bg-red-500 px-2 py-0.5 rounded-full">
                <Text className="text-[9px] font-bold text-white">HOT</Text>
              </View>
            )}
          </View>
          <Text className="text-[12px] text-gray-500 mt-0.5">
            {subtitle}
          </Text>
        </View>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#E5E7EB', true: '#93C5FD' }}
        thumbColor={value ? iconColor : '#F3F4F6'}
      />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FA]">
      <SettingsHeader title="Notifications" onBack={() => router.back()} />

      <ScrollView 
        className="flex-1 px-5" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Call Alerts */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Call Alerts
          </Text>
          <View className="bg-white rounded-[20px] px-4 py-1" style={styles.cardShadow}>
            <NotificationToggle
              icon="call"
              title="Missed Call Alerts"
              subtitle="Get notified about missed calls"
              value={missedCallAlerts}
              onValueChange={setMissedCallAlerts}
              iconBg="#FEF2F2"
              iconColor="#EF4444"
              badge={true}
              isLast={true}
            />
          </View>
        </View>

        {/* Daily Summary */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Daily Summary
          </Text>
          <View className="bg-white rounded-[20px] px-4 py-1" style={styles.cardShadow}>
            <NotificationToggle
              icon="sunny"
              title="Morning Summary"
              subtitle="Get summary at 8:00 AM"
              value={dailySummaryMorning}
              onValueChange={setDailySummaryMorning}
              iconBg="#FFFBEB"
              iconColor="#F59E0B"
            />
            <NotificationToggle
              icon="moon"
              title="Evening Summary"
              subtitle="Get summary at 8:00 PM"
              value={dailySummaryEvening}
              onValueChange={setDailySummaryEvening}
              iconBg="#F5F3FF"
              iconColor="#8B5CF6"
              isLast={true}
            />
          </View>
        </View>

        {/* General Notifications */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            General
          </Text>
          <View className="bg-white rounded-[20px] px-4 py-1" style={styles.cardShadow}>
            <NotificationToggle
              icon="notifications"
              title="Push Notifications"
              subtitle="Real-time updates on your device"
              value={pushNotifications}
              onValueChange={setPushNotifications}
              iconBg="#EFF6FF"
              iconColor="#3B82F6"
            />
            <NotificationToggle
              icon="mail"
              title="Email Summary"
              subtitle="Daily email digest of activities"
              value={emailSummary}
              onValueChange={setEmailSummary}
              iconBg="#ECFEFF"
              iconColor="#06B6D4"
            />
            <NotificationToggle
              icon="calendar"
              title="Meeting Reminders"
              subtitle="Get reminded before meetings"
              value={meetingReminders}
              onValueChange={setMeetingReminders}
              iconBg="#F0FDF4"
              iconColor="#10B981"
              isLast={true}
            />
          </View>
        </View>

        {/* Info Card */}
        <View className="mt-6 bg-blue-50 rounded-[20px] p-4 border border-blue-100">
          <View className="flex-row items-start">
            <Ionicons name="information-circle" size={20} color="#3B82F6" />
            <Text className="text-[13px] text-blue-700 ml-2 flex-1 leading-5">
              Notifications help you stay updated with important activities. You can customize which notifications you want to receive.
            </Text>
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
  }
};