import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

// Helper Component for Menu Items
const SettingItem = ({ 
  icon, 
  title, 
  iconBg, 
  iconColor,
  onPress,
  isLast = false
}: any) => (
  <TouchableOpacity 
    className={`flex-row items-center py-4 px-4 ${!isLast ? 'border-b border-white border-opacity-20' : ''}`}
    activeOpacity={0.6}
    onPress={onPress}
  >
    {/* Icon Container */}
    <View 
      className="w-10 h-10 rounded-lg items-center justify-center mr-3"
      style={{ backgroundColor: iconBg }}
    >
      <MaterialCommunityIcons name={icon} size={20} color={iconColor} />
    </View>
    
    {/* Text */}
    <Text className="text-[15px] font-semibold text-gray-800">
      {title}
    </Text>
  </TouchableOpacity>
);

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      
      {/* Header with Back Button */}
      <View className="px-6 pt-2 pb-4 flex-row items-center">
        <TouchableOpacity 
          onPress={() => router.back()}
          className="w-8 h-8 items-center justify-center"
        >
          <MaterialCommunityIcons name="chevron-left" size={24} color="#3B82F6" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        className="flex-1 px-6" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        
        {/* ================= CARD 1: Profile with Gradient ================= */}
        <LinearGradient
          colors={['#ffffff', '#ffffff']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.cardShadow,
            {
              borderTopLeftRadius: 70,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              marginBottom: 13,
              padding: 17,
              overflow: 'hidden'
            }
          ]}
        >
          {/* Pro Badge */}
          <View className="absolute top-4 right-4">
            <Text className="text-green-600 font-bold text-[11px]">•Pro User</Text>
          </View>

          {/* Profile Section */}
          <View className="flex-row items-center mt-2">
            {/* Avatar */}
            <View 
              className="w-20 h-20 rounded-full bg-white border-4 border-white overflow-hidden mr-4"
              style={{ borderRadius: 80 }}
            >
              <Image 
                source={{ uri: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg' }} 
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>

            {/* Name & Email */}
            <View className="flex-1 justify-center">
              <Text className="text-lg font-bold text-gray-900">John Deo</Text>
              <Text className="text-xs text-gray-600 mt-1">
                johndeo@example.com
              </Text>
            </View>

            {/* Edit Button */}
            <TouchableOpacity className="w-10 h-10 bg-orange-300 rounded-lg items-center justify-center">
              <MaterialCommunityIcons name="pencil" size={18} color="#ffffff" />
            </TouchableOpacity>
          </View>

          {/* Settings inside gradient card */}
          <View className="mt-2">
            <SettingItem 
              icon="folder-cog"
              title="AI Configuration"
              iconBg="#7c3aed4c"
              iconColor="#7C3AED"
              onPress={() => router.push('/settings/ai-config')}
            />

            <SettingItem 
              icon="phone"
              title="Call Settings"
              iconBg="#3b83f645"
              iconColor="#3B82F6"
              onPress={() => router.push('/settings/call-settings')}
            />

            <SettingItem 
              icon="robot"
              title="Automation Rules"
              iconBg="#ec489a37"
              iconColor="#EC4899"
              onPress={() => router.push('/settings/automation')}
            />

            <SettingItem 
              icon="bell"
              title="Notifications"
              iconBg="#f59f0b43"
              iconColor="#F59E0B"
              isLast={true}
              onPress={() => router.push('/settings/notifications')}
            />
          </View>
        </LinearGradient>

        {/* ================= CARD 2: More Options ================= */}
        <View style={[styles.cardShadow, { borderRadius: 16 }]} className="bg-white px-6 py-2 mb-3">
          <SettingItem 
            icon="link-variant"
            title="Integrations"
            iconBg="#DBEAFE"
            iconColor="#0284C7"
            onPress={() => router.push('/settings/integrations')}
          />

          <SettingItem 
            icon="wallet"
            title="Billing & Subscriptions"
            iconBg="#FCD34D"
            iconColor="#D97706"
            onPress={() => router.push('/settings/billing')}
          />

          <SettingItem 
            icon="shield-check"
            title="Privacy & Security"
            iconBg="#FBBF24"
            iconColor="#F59E0B"
            onPress={() => router.push('/settings/privacy')}
          />

          <SettingItem 
            icon="headphones"
            title="Help & Support"
            iconBg="#FDBA74"
            iconColor="#EA580C"
            isLast={true}
            onPress={() => router.push('/settings/help')}
          />
        </View>

        {/* ================= Logout Button ================= */}
        <TouchableOpacity 
          onPress={() => console.log("Logout")}
          activeOpacity={0.6}
          style={[styles.cardShadow, { borderRadius: 16 }]}
          className="bg-white px-6 py-4 items-center justify-center"
        >
          <Text className="text-red-500 font-bold text-[16px]">Logout</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 0.5,
  }
});