import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet,TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Button from '@/components/ui/Button'; 
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-[#FBFBFD]">
      <StatusBar style="dark" />
      {/* 4. Back Button added here */}
      <View className="absolute top-14 left-6 z-10">
        <TouchableOpacity 
          onPress={() => router.back()}
          className="w-10 h-10 items-center justify-center bg-white rounded-full shadow-sm border border-gray-100"
        >
          <Ionicons name="chevron-back" size={24} color="#1C1C1E" />
        </TouchableOpacity>
      </View>
      
      {/* Mesh Background */}
      <View className="absolute top-[-100] left-[-50] opacity-20">
        <LinearGradient colors={['#007AFF', 'transparent']} style={{ width: 300, height: 300, borderRadius: 150 }} />
      </View>
      <View className="absolute bottom-[-50] right-[-50] opacity-10">
        <LinearGradient colors={['#4CD964', 'transparent']} style={{ width: 250, height: 250, borderRadius: 125 }} />
      </View>

      <View className="flex-1 px-9 justify-between py-14">
        
        {/* Logo Section */}
<View className="items-center mt-24">
  <View style={styles.logoWrapper}>
    <LinearGradient
      colors={['#09a3da', '#285fd8']} // Image se match karta hua vibrant light blue gradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      // Inline style for perfect rounding
      style={{ width: 96, height: 96, borderRadius: 48 }} 
      className="items-center justify-center border border-white/30"
    >
      <Text className="text-5xl font-bold text-white tracking-tighter shadow-sm">K</Text>
    </LinearGradient>
  </View>
  
  <Text className="text-[42px] font-bold text-[#1C1C1E] mt-8 tracking-tighter">
    Kato
  </Text>
  <Text className="text-[17px] text-secondary-apple font-medium">
    Your AI Business Assistant
  </Text>
</View>

        {/* Buttons Section - Using Refactored Button Component */}
        <View className="w-full mt-4"> 
  <Button 
    title="Continue with Google" 
    onPress={() => {}}
    variant="glass"
    icon={<Image source={require('../assets/images/login/google.png')} style={{ width: 22, height: 22 }} />}
  />
  <Button 
    title="Continue with Email" 
    onPress={() => {}}
    icon={<MaterialCommunityIcons name="email-outline" size={24} color="#ffffff" />}
  />
</View>

        {/* Footer Section */}
        <View>
          <Text className="text-[13px] text-[#86868b] text-center leading-5 px-6">
            By continuing, you agree to Kato's{'\n'}
            <Text className="text-[#007AFF] font-semibold">Terms of Service</Text>
            <Text> and </Text>
            <Text className="text-[#007AFF] font-semibold">Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  logoWrapper: {
    // Smooth & Soft Shadow logic
    ...Platform.select({
      ios: {
        shadowColor: "#007AFF",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2, // Image jaisi halki shadow
        shadowRadius: 20,
      },
      android: {
        elevation: 12,
        shadowColor: "#007AFF",
      },
    }),
    // Wrapper ko bhi rounded rakhein taaki shadow sahi dikhe
    borderRadius: 48, 
    backgroundColor: 'white', // Android elevation ke liye background zaroori hai
  },

  floatingLogoShadow: {
    shadowColor: "#2563EB",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 15,
  }

  
});