// app/settings/billing.tsx

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import SettingsHeader from '../../components/settings/SettingsHeader';

export default function BillingScreen() {
  const router = useRouter();

  const PlanCard = ({ 
    name, 
    price, 
    duration, 
    features, 
    isPopular = false, 
    isCurrent = false,
    color = ['#3B82F6', '#2563EB']
  }: any) => (
    <View className="mb-4">
      {isPopular && (
        <View className="bg-gradient-to-r from-amber-500 to-orange-600 py-2 rounded-t-[18px] items-center">
          <Text className="text-white text-[12px] font-bold">⭐ MOST POPULAR</Text>
        </View>
      )}
      <View 
        className={`bg-white ${isPopular ? 'rounded-b-[18px]' : 'rounded-[18px]'} p-5`} 
        style={styles.cardShadow}
      >
        <View className="flex-row items-center justify-between mb-4">
          <View>
            <Text className="text-[20px] font-bold text-gray-900">{name}</Text>
            <View className="flex-row items-end mt-1">
              <Text className="text-[32px] font-bold text-gray-900">{price}</Text>
              <Text className="text-[14px] text-gray-500 mb-1 ml-1">/{duration}</Text>
            </View>
          </View>
          {isCurrent && (
            <View className="bg-green-100 px-3 py-1.5 rounded-full border border-green-200">
              <Text className="text-[11px] font-bold text-green-600">CURRENT</Text>
            </View>
          )}
        </View>

        {/* Features */}
        <View className="mb-4">
          {features.map((feature: string, index: number) => (
            <View key={index} className="flex-row items-center mb-3">
              <View className="w-5 h-5 rounded-full bg-green-100 items-center justify-center mr-3">
                <Ionicons name="checkmark" size={14} color="#10B981" />
              </View>
              <Text className="text-[13px] text-gray-700 flex-1">{feature}</Text>
            </View>
          ))}
        </View>

        {/* Action Button */}
        {!isCurrent ? (
          <TouchableOpacity 
            activeOpacity={0.8}
            className="rounded-[14px] py-3.5"
          >
            <LinearGradient
              colors={color}
              className="rounded-[14px] py-3.5 items-center"
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text className="text-white text-[15px] font-bold">
                Upgrade to {name}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity 
            className="bg-gray-100 rounded-[14px] py-3.5 items-center"
            activeOpacity={0.7}
          >
            <Text className="text-gray-600 text-[15px] font-semibold">
              Manage Plan
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const BillingItem = ({ icon, title, subtitle, iconBg, iconColor }: any) => (
    <TouchableOpacity 
      className="flex-row items-center justify-between py-4 border-b border-gray-50"
      activeOpacity={0.7}
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
      <Ionicons name="chevron-forward" size={18} color="#C7C7CC" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FA]">
      <SettingsHeader title="Billing & Subscription" onBack={() => router.back()} />

      <ScrollView 
        className="flex-1 px-5" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Current Usage */}
        <View className="mt-6 bg-white rounded-[20px] p-5" style={styles.cardShadow}>
          <Text className="text-[16px] font-bold text-gray-900 mb-4">This Month's Usage</Text>
          
          <View className="flex-row justify-between mb-4">
            <View className="flex-1">
              <Text className="text-[24px] font-bold text-blue-600">245</Text>
              <Text className="text-[12px] text-gray-500 mt-1">Calls Handled</Text>
            </View>
            <View className="w-[1px] bg-gray-100" />
            <View className="flex-1 items-center">
              <Text className="text-[24px] font-bold text-green-600">128</Text>
              <Text className="text-[12px] text-gray-500 mt-1">Emails Sent</Text>
            </View>
            <View className="w-[1px] bg-gray-100" />
            <View className="flex-1 items-end">
              <Text className="text-[24px] font-bold text-purple-600">56</Text>
              <Text className="text-[12px] text-gray-500 mt-1">Tasks Done</Text>
            </View>
          </View>

          <View className="bg-gray-50 rounded-[12px] p-3">
            <View className="flex-row justify-between items-center">
              <Text className="text-[13px] text-gray-600">Plan Status</Text>
              <Text className="text-[13px] font-bold text-green-600">● Active</Text>
            </View>
            <View className="flex-row justify-between items-center mt-2">
              <Text className="text-[13px] text-gray-600">Next Billing</Text>
              <Text className="text-[13px] font-semibold text-gray-900">Feb 13, 2026</Text>
            </View>
          </View>
        </View>

        {/* Plans */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Available Plans
          </Text>

          <PlanCard
            name="Free"
            price="₹0"
            duration="month"
            features={[
              "50 calls per month",
              "Basic AI assistant",
              "Email integration",
              "Community support"
            ]}
            color={['#6B7280', '#4B5563']}
          />

          <PlanCard
            name="Professional"
            price="₹999"
            duration="month"
            features={[
              "Unlimited calls",
              "Advanced AI assistant",
              "All integrations",
              "Priority support",
              "Call recording",
              "Custom automation"
            ]}
            isPopular={true}
            isCurrent={true}
            color={['#3B82F6', '#2563EB']}
          />

          <PlanCard
            name="Enterprise"
            price="₹2499"
            duration="month"
            features={[
              "Everything in Pro",
              "Dedicated support",
              "Custom AI training",
              "Advanced analytics",
              "Team collaboration",
              "API access"
            ]}
            color={['#8B5CF6', '#7C3AED']}
          />
        </View>

        {/* Referral Program */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Referral Program
          </Text>
          
          <LinearGradient
  colors={['#ec4899', '#e11d48']} // pink-500 → rose-600
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  style={[styles.cardShadow, { borderRadius: 20, padding: 20 }]}
>
            <View className="flex-row items-center mb-3">
              <View className="bg-white/20 w-12 h-12 rounded-full items-center justify-center mr-3">
                <Ionicons name="gift" size={24} color="white" />
              </View>
              <View className="flex-1">
                <Text className="text-white text-[16px] font-bold">Refer & Earn</Text>
                <Text className="text-white/90 text-[12px] mt-0.5">
                  Give 20% off, Get 20% off
                </Text>
              </View>
            </View>
            
            <View className="bg-white/20 rounded-[14px] p-4 mb-3">
              <Text className="text-white/80 text-[11px] mb-1">Your Referral Code</Text>
              <View className="flex-row items-center justify-between">
                <Text className="text-white text-[18px] font-bold tracking-wider">KATO20OFF</Text>
                <TouchableOpacity 
                  className="bg-white/30 px-3 py-1.5 rounded-lg"
                  activeOpacity={0.7}
                >
                  <Text className="text-white text-[12px] font-bold">Copy</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity 
              className="bg-white rounded-[14px] py-3 items-center"
              activeOpacity={0.8}
            >
              <Text className="text-pink-600 text-[14px] font-bold">Share with Friends</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        {/* Billing History */}
        <View className="mt-6">
          <Text className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Billing Management
          </Text>
          <View className="bg-white rounded-[20px] px-4 py-1" style={styles.cardShadow}>
            <BillingItem
              icon="card"
              title="Payment Method"
              subtitle="•••• •••• •••• 4242"
              iconBg="#EFF6FF"
              iconColor="#3B82F6"
            />
            <BillingItem
              icon="receipt"
              title="Billing History"
              subtitle="View all invoices"
              iconBg="#F0FDF4"
              iconColor="#10B981"
            />
            <BillingItem
              icon="document-text"
              title="Download Invoice"
              subtitle="Get latest invoice"
              iconBg="#F5F3FF"
              iconColor="#8B5CF6"
            />
          </View>
        </View>

        {/* Cancel Subscription */}
        <TouchableOpacity 
          className="mt-6 bg-white rounded-[18px] py-4 items-center border border-red-100"
          activeOpacity={0.7}
          style={styles.cardShadow}
        >
          <Text className="text-red-500 text-[15px] font-semibold">
            Cancel Subscription
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
  }
};