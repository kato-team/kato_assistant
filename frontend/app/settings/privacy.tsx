// app/settings/privacy.tsx

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import SettingsHeader from '../../components/settings/SettingsHeader';

export default function PrivacyScreen() {
  const router = useRouter();
  
  const [dataEncryption, setDataEncryption] = useState(true);
  const [callRecording, setCallRecording] = useState(false);
  const [recordingAnnouncement, setRecordingAnnouncement] = useState(true);
  const [twoFA, setTwoFA] = useState(false);
  const [autoDeleteDays, setAutoDeleteDays] = useState('30');

  const SecurityItem = ({ 
    icon, 
    title, 
    subtitle, 
    iconBg, 
    iconColor,
    onPress,
    showArrow = true
  }: any) => (
    <TouchableOpacity 
      className="flex-row items-center justify-between py-4 border-b border-gray-50"
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View className="flex-row items-center flex-1">
        <View 
          className="w-11 h-11 rounded-[14px] items-center justify-center mr-3"
          style={{ backgroundColor: iconBg }}
        >
          <Ionicons name={icon} size={20} color={iconColor} />
        </View>
        <View className="flex-1 pr-3">
          <Text className="text-[15px] font-semibold text-gray-900">
            {title}
          </Text>
          <Text className="text-[12px] text-gray-500 mt-0.5">
            {subtitle}
          </Text>
        </View>
      </View>
      {showArrow && <Ionicons name="chevron-forward" size={18} color="#C7C7CC" />}
    </TouchableOpacity>
  );

  const DeleteOption = ({ days, selected, onSelect }: any) => (
    <TouchableOpacity
      className={`flex-1 py-3 px-4 rounded-[14px] mx-1 border-2 ${
        selected ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'
      }`}
      onPress={() => onSelect(days)}
      activeOpacity={0.7}
    >
      <Text className={`text-center text-[14px] font-bold ${
        selected ? 'text-red-600' : 'text-gray-600'
      }`}>
        {days} Days
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FA]">
      <SettingsHeader title="Privacy & Security" onBack={() => router.back()} />

      <ScrollView 
        className="flex-1 px-5" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Security Banner */}
        <View className="mt-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-[20px] p-5" style={styles.cardShadow}>
          <View className="flex-row items-center mb-2">
            <View className="bg-white/20 w-12 h-12 rounded-full items-center justify-center mr-3">
              <Ionicons name="shield-checkmark" size={24} color="white" />
            </View>
            <View className="flex-1">
              <Text className="text-white text-[17px] font-bold">Secure & Protected</Text>
              <Text className="text-white/90 text-[12px] mt-1">
                Your data is encrypted and safe
              </Text>
            </View>
          </View>
        </View>

        {/* Data Encryption */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Data Protection
          </Text>
          <View className="bg-white rounded-[20px] px-4 py-1" style={styles.cardShadow}>
            <View className="flex-row items-center justify-between py-4">
              <View className="flex-row items-center flex-1">
                <View className="w-11 h-11 rounded-[14px] bg-green-50 items-center justify-center mr-3">
                  <Ionicons name="lock-closed" size={20} color="#10B981" />
                </View>
                <View className="flex-1 pr-3">
                  <Text className="text-[15px] font-semibold text-gray-900">
                    Data Encryption
                  </Text>
                  <Text className="text-[12px] text-gray-500 mt-0.5">
                    End-to-end encryption enabled
                  </Text>
                </View>
              </View>
              <Switch
                value={dataEncryption}
                onValueChange={setDataEncryption}
                trackColor={{ false: '#E5E7EB', true: '#86EFAC' }}
                thumbColor={dataEncryption ? '#10B981' : '#F3F4F6'}
              />
            </View>
          </View>
        </View>

        {/* Call Recording Settings */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Call Recording
          </Text>
          <View className="bg-white rounded-[20px] px-4 py-1" style={styles.cardShadow}>
            <View className="flex-row items-center justify-between py-4 border-b border-gray-50">
              <View className="flex-row items-center flex-1">
                <View className="w-11 h-11 rounded-[14px] bg-red-50 items-center justify-center mr-3">
                  <Ionicons name="mic" size={20} color="#EF4444" />
                </View>
                <View className="flex-1 pr-3">
                  <View className="flex-row items-center">
                    <Text className="text-[15px] font-semibold text-gray-900">
                      Enable Recording
                    </Text>
                    <View className="ml-2 bg-red-100 px-2 py-0.5 rounded-full">
                      <Text className="text-[9px] font-bold text-red-600">HOT</Text>
                    </View>
                  </View>
                  <Text className="text-[12px] text-gray-500 mt-0.5">
                    Record all AI calls
                  </Text>
                </View>
              </View>
              <Switch
                value={callRecording}
                onValueChange={setCallRecording}
                trackColor={{ false: '#E5E7EB', true: '#FCA5A5' }}
                thumbColor={callRecording ? '#EF4444' : '#F3F4F6'}
              />
            </View>

            {callRecording && (
              <>
                <View className="flex-row items-center justify-between py-4 border-b border-gray-50">
                  <View className="flex-row items-center flex-1">
                    <View className="w-11 h-11 rounded-[14px] bg-orange-50 items-center justify-center mr-3">
                      <Ionicons name="volume-high" size={20} color="#F59E0B" />
                    </View>
                    <View className="flex-1 pr-3">
                      <Text className="text-[15px] font-semibold text-gray-900">
                        Recording Announcement
                      </Text>
                      <Text className="text-[12px] text-gray-500 mt-0.5">
                        Inform customers about recording
                      </Text>
                    </View>
                  </View>
                  <Switch
                    value={recordingAnnouncement}
                    onValueChange={setRecordingAnnouncement}
                    trackColor={{ false: '#E5E7EB', true: '#FCD34D' }}
                    thumbColor={recordingAnnouncement ? '#F59E0B' : '#F3F4F6'}
                  />
                </View>

                <View className="py-4">
                  <View className="flex-row items-center mb-3">
                    <View className="w-11 h-11 rounded-[14px] bg-purple-50 items-center justify-center mr-3">
                      <Ionicons name="trash" size={20} color="#8B5CF6" />
                    </View>
                    <View className="flex-1">
                      <Text className="text-[15px] font-semibold text-gray-900">
                        Auto-Delete After
                      </Text>
                      <Text className="text-[12px] text-gray-500 mt-0.5">
                        Automatically delete old recordings
                      </Text>
                    </View>
                  </View>
                  
                  <View className="flex-row mt-2">
                    <DeleteOption days="7" selected={autoDeleteDays === '7'} onSelect={setAutoDeleteDays} />
                    <DeleteOption days="30" selected={autoDeleteDays === '30'} onSelect={setAutoDeleteDays} />
                    <DeleteOption days="90" selected={autoDeleteDays === '90'} onSelect={setAutoDeleteDays} />
                  </View>
                </View>
              </>
            )}
          </View>
        </View>

        {/* Two-Factor Authentication */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Account Security
          </Text>
          <View className="bg-white rounded-[20px] px-4 py-1" style={styles.cardShadow}>
            <View className="flex-row items-center justify-between py-4">
              <View className="flex-row items-center flex-1">
                <View className="w-11 h-11 rounded-[14px] bg-blue-50 items-center justify-center mr-3">
                  <Ionicons name="key" size={20} color="#3B82F6" />
                </View>
                <View className="flex-1 pr-3">
                  <Text className="text-[15px] font-semibold text-gray-900">
                    Two-Factor Authentication
                  </Text>
                  <Text className="text-[12px] text-gray-500 mt-0.5">
                    Add extra layer of security
                  </Text>
                </View>
              </View>
              <Switch
                value={twoFA}
                onValueChange={setTwoFA}
                trackColor={{ false: '#E5E7EB', true: '#93C5FD' }}
                thumbColor={twoFA ? '#3B82F6' : '#F3F4F6'}
              />
            </View>
          </View>
        </View>

        {/* Legal Documents */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Legal
          </Text>
          <View className="bg-white rounded-[20px] px-4 py-1" style={styles.cardShadow}>
            <SecurityItem
              icon="document-text"
              title="Privacy Policy"
              subtitle="How we handle your data"
              iconBg="#EFF6FF"
              iconColor="#3B82F6"
              onPress={() => console.log('Privacy Policy')}
            />
            <SecurityItem
              icon="shield"
              title="Terms of Service"
              subtitle="Usage terms and conditions"
              iconBg="#F0FDF4"
              iconColor="#10B981"
              onPress={() => console.log('Terms of Service')}
              showArrow={true}
            />
          </View>
        </View>

        {/* Security Tips */}
        <View className="mt-6 bg-amber-50 rounded-[18px] p-4 border border-amber-200">
          <View className="flex-row items-start mb-3">
            <View className="w-9 h-9 rounded-full bg-amber-100 items-center justify-center mr-3">
              <Ionicons name="bulb" size={18} color="#F59E0B" />
            </View>
            <Text className="text-[14px] font-bold text-amber-900 flex-1">
              Security Tips
            </Text>
          </View>
          <View className="ml-12">
            <Text className="text-[12px] text-amber-800 mb-2 leading-5">
              • Enable two-factor authentication for better security
            </Text>
            <Text className="text-[12px] text-amber-800 mb-2 leading-5">
              • Use strong, unique passwords
            </Text>
            <Text className="text-[12px] text-amber-800 leading-5">
              • Review your privacy settings regularly
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