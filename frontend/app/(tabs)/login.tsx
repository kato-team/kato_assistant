import React from 'react';
import { Pressable, SafeAreaView, Text, View, Image, Dimensions, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  
  const PremiumLoginButton = ({ title, icon, onPress }: { title: string, icon: React.ReactNode, onPress: () => void }) => (
    <View className="mb-4 w-full">
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.98 : 1 }] }]}
        className="bg-white/95 rounded-[22px] flex-row items-center px-6 py-[18px] border border-white/50"
        // Button shadow for depth
        style={styles.buttonShadow}
      >
        <View className="w-6 items-start">
          {icon}
        </View>
        <Text className="flex-1 text-center text-[16px] font-semibold text-[#1C1C1E] pr-6">
          {title}
        </Text>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#FBFBFD]">
      <StatusBar style="dark" />
      
      {/* Mesh Background (Premium feel) */}
      <View className="absolute top-[-100] left-[-50] opacity-20">
        <LinearGradient colors={['#007AFF', 'transparent']} style={{ width: 300, height: 300, borderRadius: 150 }} />
      </View>
      <View className="absolute bottom-[-50] right-[-50] opacity-10">
        <LinearGradient colors={['#4CD964', 'transparent']} style={{ width: 250, height: 250, borderRadius: 125 }} />
      </View>

      <View className="flex-1 px-9 justify-between py-14">
        
        {/* Logo Section - Pushed further down with mt-24 */}
        <View className="items-center mt-24">
          <View style={styles.floatingLogoShadow}>
            <LinearGradient
              colors={['#3B82F6', '#2563EB']} // Vibrant Blue Gradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="w-24 h-24  items-center justify-center"
            >
              <Text className="text-5xl font-bold text-white tracking-tighter shadow-sm">K</Text>
            </LinearGradient>
          </View>
          
          <Text className="text-[42px] font-bold text-[#1C1C1E] mt-8 tracking-tighter">
            Kato
          </Text>
          <Text className="text-[17px] text-[#86868b] font-medium">
            Your AI Business Assistant
          </Text>
        </View>

        {/* Buttons Section - Only 2 Buttons */}
        <View className="w-full">
          <PremiumLoginButton 
            title="Continue with Google" 
            onPress={() => {}}
            // Use your local asset path here
            icon={<Image source={require('../../assets/images/login/google.png')} style={{ width: 20, height: 20 }} />}
          />

          <PremiumLoginButton 
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

// Custom styles for the "Floating" shadow effect
const styles = StyleSheet.create({
  floatingLogoShadow: {
    shadowColor: "#2563EB",
    shadowOffset: {
      width: 0,
      height: 12, // Increased height for floating effect
    },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 15, // High elevation for Android depth
  },
  buttonShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  }
});