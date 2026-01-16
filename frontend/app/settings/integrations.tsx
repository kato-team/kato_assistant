// app/settings/integrations.tsx

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import SettingsHeader from '../../components/settings/SettingsHeader';

export default function IntegrationsScreen() {
  const router = useRouter();
  
  const [gmailConnected, setGmailConnected] = useState(true);
  const [calendarConnected, setCalendarConnected] = useState(true);
  const [taskConnected, setTaskConnected] = useState(false);
const [latestNews, setLatestNews] = useState(true);
  const IntegrationCard = ({ 
    icon, 
    title, 
    subtitle, 
    connected, 
    onToggle, 
    iconBg, 
    iconColor,
    badge = '',
    disabled = false
  }: any) => (
    <View className="bg-white rounded-[18px] p-4 mb-3" style={styles.cardShadow}>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center flex-1">
          <View 
            className="w-12 h-12 rounded-[14px] items-center justify-center mr-3"
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
                <View className={`ml-2 px-2 py-0.5 rounded-full ${
                  badge === 'Connected' ? 'bg-green-100' : 
                  badge === 'Soon' ? 'bg-gray-100' : 'bg-blue-100'
                }`}>
                  <Text className={`text-[9px] font-bold ${
                    badge === 'Connected' ? 'text-green-600' : 
                    badge === 'Soon' ? 'text-gray-500' : 'text-blue-600'
                  }`}>
                    {badge}
                  </Text>
                </View>
              )}
            </View>
            <Text className="text-[12px] text-gray-500 mt-0.5">
              {subtitle}
            </Text>
          </View>
        </View>
        
        {!disabled && (
          <Switch
            value={connected}
            onValueChange={onToggle}
            trackColor={{ false: '#E5E7EB', true: '#93C5FD' }}
            thumbColor={connected ? iconColor : '#F3F4F6'}
          />
        )}
        {disabled && (
          <View className="bg-gray-100 px-3 py-1.5 rounded-full">
            <Text className="text-[11px] font-semibold text-gray-500">Soon</Text>
          </View>
        )}
      </View>
    </View>
  );

  const VIPTagCard = () => (
    <TouchableOpacity 
      className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-[18px] p-4 mb-3"
      style={styles.cardShadow}
      activeOpacity={0.8}
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center flex-1">
          <View className="w-12 h-12 rounded-[14px] bg-white/20 items-center justify-center mr-3">
            <Ionicons name="star" size={24} color="white" />
          </View>
          <View className="flex-1">
            <Text className="text-[15px] font-bold text-white">
              VIP Customer Tagging
            </Text>
            <Text className="text-[12px] text-white/80 mt-0.5">
              Mark important contacts as VIP
            </Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={20} color="white" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FA]">
      <SettingsHeader title="Integrations" onBack={() => router.back()} />

      <ScrollView 
        className="flex-1 px-5" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Connected Accounts */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Connected Accounts
          </Text>
          
          <IntegrationCard
            icon="mail"
            title="Gmail"
            subtitle="Sync emails and contacts"
            connected={gmailConnected}
            onToggle={setGmailConnected}
            iconBg="#FEF2F2"
            iconColor="#EF4444"
            badge="Connected"
          />

          <IntegrationCard
            icon="calendar"
            title="Calendar"
            subtitle="Manage meetings and events"
            connected={calendarConnected}
            onToggle={setCalendarConnected}
            iconBg="#EFF6FF"
            iconColor="#3B82F6"
            badge="Connected"
          />

          <IntegrationCard
            icon="checkbox"
            title="Tasks"
            subtitle="Sync your to-do lists"
            connected={taskConnected}
            onToggle={setTaskConnected}
            iconBg="#F0FDF4"
            iconColor="#10B981"
          />
        </View>


        

        {/* Coming Soon */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Coming Soon
          </Text>
          
          <IntegrationCard
            icon="logo-whatsapp"
            title="WhatsApp Business"
            subtitle="Handle WhatsApp messages"
            connected={false}
            iconBg="#F0FDF4"
            iconColor="#10B981"
            disabled={true}
          />

          <IntegrationCard
            icon="bar-chart"
            title="CRM Integration"
            subtitle="Sync with your CRM"
            connected={false}
            iconBg="#F5F3FF"
            iconColor="#8B5CF6"
            disabled={true}
          />

          <IntegrationCard
            icon="logo-youtube"
            title="YouTube Channel"
            subtitle="Manage your channel"
            connected={false}
            iconBg="#FEF2F2"
            iconColor="#EF4444"
            disabled={true}
          />

          <IntegrationCard
            icon="logo-instagram"
            title="Instagram"
            subtitle="Connect your business account"
            connected={false}
            iconBg="#FFF7ED"
            iconColor="#F97316"
            disabled={true}
          />

          <IntegrationCard
            icon="logo-facebook"
            title="Facebook"
            subtitle="Manage your page"
            connected={false}
            iconBg="#EFF6FF"
            iconColor="#3B82F6"
            disabled={true}
          />

          <IntegrationCard
            icon="musical-notes"
            title="Spotify / YouTube Music"
            subtitle="Music integration"
            connected={false}
            iconBg="#F0FDF4"
            iconColor="#10B981"
            disabled={true}
          />
          <IntegrationCard
            icon="newspaper-outline"
            title="Latest News"
            subtitle="Business news updates"
            connected={false}
            iconBg="#f0f0fd"
            iconColor="#3710b9"
            disabled={true}
          />

          {/* Latest News Toggle
          <View className="bg-white rounded-md p-6 mt-4 shadow-sm" style={styles.cardShadow}>
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
          </View> */}

        </View>

        {/* Info Box */}
        <View className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-[18px] p-4 border border-blue-100">
          <View className="flex-row items-start">
            <View className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center mr-3">
              <Ionicons name="rocket" size={20} color="#3B82F6" />
            </View>
            <View className="flex-1">
              <Text className="text-[14px] font-bold text-gray-900 mb-1">
                More Integrations Coming!
              </Text>
              <Text className="text-[12px] text-gray-600 leading-5">
                We're working on bringing more integrations to make your workflow seamless. Stay tuned!
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
    shadowRadius: 8,
    elevation: 3,
  }
};