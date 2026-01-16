// app/settings/call-settings.tsx

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import SettingsHeader from '../../components/settings/SettingsHeader';

// --- IntegrationCard Component ---
const IntegrationCard = ({ icon, title, subtitle, connected, onToggle, iconBg, iconColor, badge }) => (
  <View className="bg-white rounded-[18px] px-4 py-4 mb-3 flex-row items-center justify-between shadow-sm" style={styles.cardShadow}>
    <View className="flex-row items-center flex-1">
      <View style={{ backgroundColor: iconBg }} className="w-12 h-12 rounded-[14px] items-center justify-center mr-3">
        <Ionicons name={icon} size={22} color={iconColor} />
      </View>
      <View className="flex-1 pr-2">
        <View className="flex-row items-center">
          <Text className="text-[15px] font-semibold text-gray-900">{title}</Text>
          {badge && (
            <View className="bg-green-100 px-2 py-0.5 rounded-full ml-2">
              <Text className="text-[10px] font-bold text-green-600">{badge}</Text>
            </View>
          )}
        </View>
        <Text className="text-[12px] text-gray-500 mt-0.5" numberOfLines={1}>
          {subtitle}
        </Text>
      </View>
    </View>
    <Switch
      value={connected}
      onValueChange={onToggle}
      trackColor={{ false: '#E5E7EB', true: '#A5F3FC' }}
      thumbColor={connected ? iconColor : '#F3F4F6'}
    />
  </View>
);

export default function CallSettingsScreen() {
  const router = useRouter();
  const [busyCalls, setBusyCalls] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState('female');
  const [selectedTone, setSelectedTone] = useState('professional');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [contactMemory, setContactMemory] = useState(true);
  const [phoneConnected, setPhoneConnected] = useState(true);

  const activeGradient = ['#8B5CF6', '#7C3AED'];

  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FA]">
      <SettingsHeader title="Call Settings" onBack={() => router.back()} />

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>


        {/* Main Configuration Card */}
        <View className="bg-white rounded-[18px] p-6 mt-6 shadow-sm" style={styles.cardShadow}>
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
            />
          </View>

          <View className="h-[1px] bg-gray-100 w-full mb-6" />

          {/* Voice Selection */}
          <View className="mb-6">
            <Text className="text-[14px] font-bold text-gray-700 mb-3">Voice</Text>
            <View className="flex-row justify-between">
              {['male', 'female'].map((voice) => (
                <TouchableOpacity 
                  key={voice}
                  onPress={() => setSelectedVoice(voice)}
                  className="w-[48%] h-14 rounded-xl overflow-hidden border border-gray-100"
                >
                  {selectedVoice === voice ? (
                    <LinearGradient colors={activeGradient} className="flex-1 flex-row items-center justify-center">
                      <Text className="text-lg mr-2">{voice === 'male' ? '👦' : '👧'}</Text>
                      <Text className="font-bold text-white capitalize">{voice}</Text>
                    </LinearGradient>
                  ) : (
                    <View className="flex-1 flex-row items-center justify-center bg-gray-50">
                      <Text className="text-lg mr-2">{voice === 'male' ? '👦' : '👧'}</Text>
                      <Text className="font-bold text-gray-400 capitalize">{voice}</Text>
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Tone Selection */}
          <View className="mb-6">
            <Text className="text-[14px] font-bold text-gray-700 mb-3">Tone</Text>
            <View className="flex-row justify-between bg-gray-50 p-1.5 rounded-xl">
              {['Professional', 'Friendly', 'Casual'].map((tone) => {
                const isActive = selectedTone === tone.toLowerCase();
                return (
                  <TouchableOpacity 
                    key={tone}
                    onPress={() => setSelectedTone(tone.toLowerCase())}
                    className="flex-1 h-10 rounded-lg overflow-hidden mx-0.5"
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

          {/* Language Preference */}
          <View>
            <Text className="text-[14px] font-bold text-gray-700 mb-3">Language Preference</Text>
            <TouchableOpacity 
              activeOpacity={0.7}
              className="flex-row items-center justify-between bg-white px-4 py-4 rounded-xl border border-gray-100"
            >
              <Text className="text-gray-700 font-medium">{selectedLanguage}</Text>
              <Ionicons name="chevron-down" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

         {/* Testing Section */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Testing
          </Text>
          <TouchableOpacity activeOpacity={0.8} style={{ borderRadius: 12, overflow: 'hidden' }}>
            <LinearGradient
              colors={['#a855f7', '#db2777']}
              start={{ x: 0.5, y: 1 }}
              end={{ x: 0.5, y: 0 }}
              style={{ padding: 20 }}
            >
              <View className="flex-row items-center mb-3">
                <View className="bg-white/20 w-12 h-12 rounded-full items-center justify-center mr-3">
                  <Ionicons name="call" size={24} color="white" />
                </View>
                <View className="flex-1">
                  <Text className="text-white text-[17px] font-bold">Test AI Call</Text>
                  <Text className="text-white/90 text-[12px] mt-0.5">
                    Get a demo call from your AI assistant
                  </Text>
                </View>
              </View>
              <View className="bg-white rounded-md py-3 items-center">
                <View className="flex-row items-center">
                  <Ionicons name="play" size={16} color="#8B5CF6" />
                  <Text className="text-purple-600 text-[14px] font-bold ml-2">Start Test Call Now</Text>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Contact Management */}
        <View className="mt-8">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Contact Management
          </Text>
          <View className="bg-white rounded-[18px] px-4" style={styles.cardShadow}>
            <View className="flex-row items-center justify-between py-4 border-b border-gray-50">
              <View className="flex-row items-center flex-1">
                <View className="w-12 h-12 rounded-[14px] bg-cyan-50 items-center justify-center mr-3">
                  <Ionicons name="people" size={22} color="#06B6D4" />
                </View>
                <View className="flex-1 pr-3">
                  <Text className="text-[15px] font-semibold text-gray-900">Contact Memory</Text>
                  <Text className="text-[12px] text-gray-500 mt-0.5">Remember contacts for 30 days</Text>
                </View>
              </View>
              <Switch
                value={contactMemory}
                onValueChange={setContactMemory}
                trackColor={{ false: '#E5E7EB', true: '#A5F3FC' }}
                thumbColor={contactMemory ? '#06B6D4' : '#F3F4F6'}
              />
            </View>
            <TouchableOpacity className="flex-row items-center justify-between py-4" activeOpacity={0.7}>
              <View className="flex-row items-center flex-1">
                <View className="w-12 h-12 rounded-[14px] bg-amber-50 items-center justify-center mr-3">
                  <Ionicons name="star" size={22} color="#F59E0B" />
                </View>
                <View className="flex-1">
                  <Text className="text-[15px] font-semibold text-gray-900">VIP Customers</Text>
                  <Text className="text-[12px] text-gray-500 mt-0.5">Tag important contacts</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#C7C7CC" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Phone Integration Section */}
        <View className="mt-8 mb-10">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Phone Integration
          </Text>
          
          <IntegrationCard
            icon="call"
            title="Business Phone"
            subtitle="Connect your business number"
            connected={phoneConnected}
            onToggle={setPhoneConnected}
            iconBg="#F5F3FF"
            iconColor="#8B5CF6"
            badge="Active"
          />

          {phoneConnected && (
            <View className="bg-blue-50 rounded-[16px] p-4 border border-blue-100">
              <View className="flex-row items-start mb-2">
                <Ionicons name="information-circle" size={18} color="#3B82F6" />
                <Text className="text-[12px] font-semibold text-blue-700 ml-2">
                  Call Forwarding Active
                </Text>
              </View>
              <Text className="text-[11px] text-blue-600 leading-4 ml-6">
                Your business calls are being forwarded to AI assistant when you're busy.
              </Text>
            </View>
          )}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
});