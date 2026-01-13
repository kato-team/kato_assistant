import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import QuickActionButton from '../components/ui/QuickActionButton';

export default function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState('home');

  const handleTabPress = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'add') {
        console.log("Kato Button Pressed");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FA]" edges={['top']}>
      <Header 
        showBackButton={false}
        onSettingsPress={() => console.log('Settings pressed')}
      />

      <ScrollView 
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        
        {/* Today's Focus */}
        <View className="mt-3 mb-5">
          <View className="flex-row items-center mb-3 px-1">
            <Ionicons name="flame" size={22} color="#EF4444" />
            <Text className="text-[17px] font-bold text-gray-900 ml-2">Today's Focus</Text>
          </View>

          <View className="bg-white rounded-[20px] p-4" style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.06,
            shadowRadius: 8,
            elevation: 3,
          }}>
            {/* Item 1 - Email */}
            <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-50">
              <View className="w-11 h-11 rounded-[14px] bg-red-50 items-center justify-center mr-3">
                <Ionicons name="mail" size={20} color="#EF4444" />
              </View>
              <View className="flex-1">
                <Text className="text-[15px] font-semibold text-gray-900 mb-0.5">
                  Reply to Michael
                </Text>
                <Text className="text-[13px] text-gray-500">Email • Project deadline</Text>
              </View>
              <View className="w-2 h-2 rounded-full bg-red-500" />
            </TouchableOpacity>

            {/* Item 2 - Meeting */}
            <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-50">
              <View className="w-11 h-11 rounded-[14px] bg-blue-50 items-center justify-center mr-3">
                <Ionicons name="calendar" size={20} color="#3B82F6" />
              </View>
              <View className="flex-1">
                <Text className="text-[15px] font-semibold text-gray-900 mb-0.5">
                  Meeting with John
                </Text>
                <Text className="text-[13px] text-gray-500">Meeting • 4:30 PM</Text>
              </View>
              <View className="w-2 h-2 rounded-full bg-red-500" />
            </TouchableOpacity>

            {/* Item 3 - Completed */}
            <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-50">
              <View className="w-11 h-11 rounded-[14px] bg-green-50 items-center justify-center mr-3">
                <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              </View>
              <View className="flex-1">
                <Text className="text-[15px] font-semibold text-gray-900 mb-0.5">
                  Payment follow-up
                </Text>
                <Text className="text-[13px] text-gray-500">Task • ABC Corp</Text>
              </View>
            </TouchableOpacity>

            {/* Item 4 - Call */}
            <TouchableOpacity className="flex-row items-center py-3">
              <View className="w-11 h-11 rounded-[14px] bg-orange-50 items-center justify-center mr-3">
                <Ionicons name="call" size={20} color="#F97316" />
              </View>
              <View className="flex-1">
                <Text className="text-[15px] font-semibold text-gray-900 mb-0.5">
                  Call to Nayan
                </Text>
                <Text className="text-[13px] text-gray-500">Call • Sales person</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Priority Emails */}
        <View className="mb-5">
          <View className="flex-row items-center mb-3 px-1">
            <Ionicons name="alert-circle" size={22} color="#F59E0B" />
            <Text className="text-[17px] font-bold text-gray-900 ml-2">Priority Emails</Text>
          </View>

          {/* Email Card 1 */}
          <TouchableOpacity 
            className="bg-white rounded-[18px] p-4 mb-3" 
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.05,
              shadowRadius: 6,
              elevation: 2,
            }}
          >
            <View className="flex-row justify-between items-start mb-2">
              <View className="flex-row items-center flex-1">
                <View className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-3" />
                <Text className="text-[15px] font-semibold text-gray-900">John</Text>
              </View>
              <View className="bg-red-50 px-2.5 py-1 rounded-lg">
                <Text className="text-[11px] font-bold text-red-600">Important</Text>
              </View>
            </View>
            <Text className="text-[14px] text-gray-700 mb-1.5 ml-5">Important: Meeting request</Text>
            <Text className="text-[12px] text-gray-400 ml-5">10:30 AM</Text>
          </TouchableOpacity>

          {/* Email Card 2 */}
          <TouchableOpacity 
            className="bg-white rounded-[18px] p-4" 
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.05,
              shadowRadius: 6,
              elevation: 2,
            }}
          >
            <View className="flex-row justify-between items-start mb-2">
              <View className="flex-row items-center flex-1">
                <View className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-3" />
                <Text className="text-[15px] font-semibold text-gray-900">Rehana</Text>
              </View>
              <View className="bg-red-50 px-2.5 py-1 rounded-lg">
                <Text className="text-[11px] font-bold text-red-600">Important</Text>
              </View>
            </View>
            <Text className="text-[14px] text-gray-700 mb-1.5 ml-5">Leave request for 2 days</Text>
            <Text className="text-[12px] text-gray-400 ml-5">9:15 AM</Text>
          </TouchableOpacity>
        </View>

        {/* What I Did For You Today */}
        <View className="mb-5">
          <View className="flex-row items-center mb-3 px-1">
            <View className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center">
              <Ionicons name="sparkles" size={18} color="white" />
            </View>
            <Text className="text-[17px] font-bold text-gray-900 ml-2">What I Did For You Today</Text>
          </View>

          <View className="bg-white rounded-[20px] p-4" style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.06,
            shadowRadius: 8,
            elevation: 3,
          }}>
            {[
              { text: "Handled 8 customer calls", icon: "call" },
              { text: "Scheduled 3 meetings", icon: "calendar" },
              { text: "Sent 5 payment reminders", icon: "cash" },
              { text: "Replied to 12 emails", icon: "mail" }
            ].map((item, index) => (
              <View key={index} className={`flex-row items-center py-2.5 ${index < 3 ? 'border-b border-gray-50' : ''}`}>
                <View className="w-8 h-8 rounded-full bg-green-50 items-center justify-center mr-3">
                  <Ionicons name="checkmark" size={16} color="#10B981" />
                </View>
                <Text className="text-[14px] text-gray-700 flex-1">{item.text}</Text>
                <Ionicons name={item.icon as any} size={16} color="#D1D5DB" />
              </View>
            ))}
          </View>
        </View>

        {/* This Week's Summary */}
        <View className="mb-5">
          <View className="flex-row items-center mb-3 px-1">
            <Ionicons name="bar-chart" size={22} color="#8B5CF6" />
            <Text className="text-[17px] font-bold text-gray-900 ml-2">This Week's Summary</Text>
          </View>

          <View className="bg-white rounded-[20px] p-5 flex-row justify-between" style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.06,
            shadowRadius: 8,
            elevation: 3,
          }}>
            <View className="items-center flex-1">
              <Text className="text-blue-600 text-[28px] font-bold">50</Text>
              <Text className="text-gray-400 text-[12px] text-center mt-1">Calls handled</Text>
            </View>
            
            <View className="w-[1px] h-12 bg-gray-100" />

            <View className="items-center flex-1">
              <Text className="text-green-600 text-[28px] font-bold">10</Text>
              <Text className="text-gray-400 text-[12px] text-center mt-1">Sales closed</Text>
            </View>

            <View className="w-[1px] h-12 bg-gray-100" />

            <View className="items-center flex-1">
              <Text className="text-purple-600 text-[24px] font-bold">₹1L</Text>
              <Text className="text-gray-400 text-[12px] text-center mt-1">Revenue</Text>
            </View>
          </View>
        </View>

        {/* Month End Overview */}
        <View className="mb-5">
          <View className="flex-row items-center mb-3 px-1">
            <Ionicons name="trending-up" size={22} color="#06B6D4" />
            <Text className="text-[17px] font-bold text-gray-900 ml-2">Month End Overview</Text>
          </View>

          <View className="bg-white rounded-[20px] p-4" style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.06,
            shadowRadius: 8,
            elevation: 3,
          }}>
            <View className="flex-row justify-between items-center py-3 border-b border-gray-50">
              <Text className="text-[14px] text-gray-600">Employees salary total</Text>
              <Text className="font-bold text-[15px] text-gray-900">₹40,000</Text>
            </View>
            <View className="flex-row justify-between items-center py-3 border-b border-gray-50">
              <Text className="text-[14px] text-gray-600">Pending email replies</Text>
              <View className="flex-row items-center">
                <Text className="font-bold text-[15px] text-orange-500">3 important</Text>
              </View>
            </View>
            <View className="flex-row justify-between items-center py-3 border-b border-gray-50">
              <Text className="text-[14px] text-gray-600">Client follow-ups needed</Text>
              <Text className="font-bold text-[15px] text-gray-900">5 clients</Text>
            </View>
            <View className="flex-row justify-between items-center py-3">
              <Text className="text-[14px] text-gray-600">Approvals pending</Text>
              <Text className="font-bold text-[15px] text-gray-900">2 items</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="mb-4">
          <View className="flex-row items-center mb-3 px-1">
            <Ionicons name="flash" size={22} color="#F59E0B" />
            <Text className="text-[17px] font-bold text-gray-900 ml-2">Quick Actions</Text>
          </View>

          <View className="flex-row flex-wrap justify-between">
            <View className="w-[48%] mb-3">
              <QuickActionButton
                icon="mail"
                label="Compose Email"
                iconColor="#EF4444"
                onPress={() => console.log('Compose Email')}
              />
            </View>
            <View className="w-[48%] mb-3">
              <QuickActionButton
                icon="checkbox"
                label="Add Task"
                iconColor="#10B981"
                onPress={() => console.log('Add Task')}
              />
            </View>
            <View className="w-[48%]">
              <QuickActionButton
                icon="calendar"
                label="Schedule Meeting"
                iconColor="#F59E0B"
                onPress={() => console.log('Schedule Meeting')}
              />
            </View>
            <View className="w-[48%]">
              <QuickActionButton
                icon="call"
                label="Make Call"
                iconColor="#8B5CF6"
                onPress={() => console.log('Make Call')}
              />
            </View>
          </View>
        </View>

      </ScrollView>
      
      <Footer activeTab={activeTab} onTabPress={handleTabPress} />
    </SafeAreaView>
  );
}