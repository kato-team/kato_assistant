import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Helper Component for Menu Items
const SettingItem = ({ 
  icon, 
  title, 
  subtitle, 
  iconBg, 
  iconColor,
  onPress,
  isLast = false
}: any) => (
  <TouchableOpacity 
    className={`flex-row items-center py-4 ${!isLast ? 'border-b border-gray-100' : ''}`}
    activeOpacity={0.7}
    onPress={onPress}
  >
    {/* Icon Container */}
    <View 
      className="w-12 h-12 rounded-xl items-center justify-center mr-4"
      style={{ backgroundColor: iconBg }}
    >
      <Ionicons name={icon} size={22} color={iconColor} />
    </View>
    
    {/* Text Info */}
    <View className="flex-1">
      <Text className="text-[16px] font-bold text-gray-900 mb-0.5">
        {title}
      </Text>
      <Text className="text-[12px] text-gray-400 font-medium">
        {subtitle}
      </Text>
    </View>
  </TouchableOpacity>
);

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#F2F4F6]">
      
      {/* Header (Back Button Only) */}
      <View className="px-6 pt-2 pb-4">
        <TouchableOpacity 
          onPress={() => router.back()}
          className="w-10 h-10 bg-white items-center justify-center rounded-full shadow-sm"
          style={styles.smallShadow}
        >
          <Ionicons name="chevron-back" size={24} color="#3B82F6" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        className="flex-1 px-5" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        
        {/* ================= CARD 1: Profile + Main Options ================= */}
        {/* Top Left is heavily rounded (100), others are normal (30) */}
        <View 
          style={[styles.cardShadow, { 
            borderTopLeftRadius: 80, 
            borderTopRightRadius: 15, 
            borderBottomLeftRadius: 15, 
            borderBottomRightRadius: 15 
          }]} 
          className="bg-white p-6 mb-6 relative"
        >
           {/* Pro Badge (Absolute Positioned) */}
           <View className="absolute top-6 right-6">
             <Text className="text-green-500 font-bold text-[11px]">• Pro User</Text>
           </View>

           {/* --- Profile Section --- */}
           <View className="flex-row items-center mt-1 mb-8 ml-0">
              {/* Avatar Area */}
              <View className="mr-4 shadow-sm">
                <View className="w-20 h-20 rounded-full bg-gray-200 border-4 border-gray-50 overflow-hidden">
                  <Image 
                    source={{ uri: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg' }} 
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>
              </View>

              {/* Name & Edit Icon */}
              <View className="flex-1 justify-center">
                 <Text className="text-xl font-extrabold text-gray-900">John Deo</Text>
                 <Text className="text-xs text-gray-400 underline decoration-gray-300 mb-1">
                    johndeo@example.com
                 </Text>
              </View>

              {/* Orange Edit Button */}
              <TouchableOpacity className="w-9 h-9 bg-orange-50 rounded-full items-center justify-center border border-orange-100 mr-2">
                  <Ionicons name="create-outline" size={18} color="#F97316" />
              </TouchableOpacity>
           </View>

           {/* --- Divider Separator --- */}
           <View className="h-[1px] bg-gray-100 w-full mb-2" />

           {/* --- Options Section (Merged inside Card 1) --- */}
           <View>
              <SettingItem 
                icon="options" // Square icon like "AI Config"
                title="AI Configuration" 
                subtitle="Voice, tone, Language Preferences"
                iconBg="#FFF7ED" 
                iconColor="#4B5563"
                onPress={() => router.push('/settings/ai-config')}
              />

              <SettingItem 
                icon="call" 
                title="Call Settings" 
                subtitle="Busy Calls, Voice preferences"
                iconBg="#E0F2FE" 
                iconColor="#0EA5E9"
                onPress={() => router.push('/settings/call-settings')}
              />

              <SettingItem 
                icon="git-network" // Represents Automation/Robot arm
                title="Automation Rules" 
                subtitle="Custom Prompts and Actions"
                iconBg="#FEF9C3" 
                iconColor="#CA8A04"
                onPress={() => router.push('/settings/automation')}
              />

              <SettingItem 
                icon="notifications" 
                title="Notifications" 
                subtitle="Alerts & summaries"
                iconBg="#FFEDD5" 
                iconColor="#F59E0B"
                isLast={true} // Removes border for the last item in this group
                onPress={() => router.push('/settings/notifications')}
              />
           </View>
        </View>


        {/* ================= CARD 2: Billing + Help + LOGOUT ================= */}
        <View style={[styles.cardShadow, { borderRadius: 15 }]} className="bg-white px-5 py-2 mb-8">
          
          <SettingItem 
            icon="wallet" 
            title="Billing & Subscriptions" 
            subtitle="Professional Plan"
            iconBg="#ECFCCB" 
            iconColor="#65A30D"
            onPress={() => router.push('/settings/billing')}
          />

          <SettingItem 
            icon="headset" 
            title="Help & Support" 
            subtitle="Help & Support about application"
            iconBg="#FFE4E6" 
            iconColor="#F43F5E"
            onPress={() => router.push('/settings/help')}
          />

          {/* --- Logout Button (Moved INSIDE Card 2) --- */}
          <View className="pt-2 pb-4 mt-2 border-t border-gray-100">
            <TouchableOpacity 
              onPress={() => console.log("Logout")}
              activeOpacity={0.6}
              className="items-center justify-center py-2"
            >
              <Text className="text-red-500 font-bold text-[16px]">Logout</Text>
            </TouchableOpacity>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: '#9CA3AF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 0.5, 
  },
  smallShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 0.5,
  }
});