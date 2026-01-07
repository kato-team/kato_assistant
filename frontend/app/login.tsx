import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Button from '@/components/ui/Button'; // Import path adjust as per your structure

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#FBFBFD]">
      <StatusBar style="dark" />
      
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
          <View style={styles.floatingLogoShadow}>
            <LinearGradient
              colors={['#3B82F6', '#2563EB']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="w-24 h-24 rounded-full items-center justify-center logo-inner-glow"
            >
              <Text className="text-5xl font-bold text-white tracking-tighter">KP</Text>
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
    icon={<Image source={require('../assets/images/login/google.png')} style={{ width: 22, height: 22 }} />}
  />
  <Button 
    title="Continue with Email" 
    onPress={() => {}}
    icon={<MaterialCommunityIcons name="email-outline" size={24} color="#636366" />}
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
  floatingLogoShadow: {
    shadowColor: "#2563EB",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 15,
  }
});