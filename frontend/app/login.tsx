// app/login.tsx
import React, { useState } from 'react';
import { 
  SafeAreaView, 
  Text, 
  View, 
  Image, 
  StyleSheet,
  TouchableOpacity, 
  Platform,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Button from '@/components/ui/Button'; 
import OTPVerificationCard from '@/components/ui/OTPVerificationCard';
import AlertModal from '@/components/ui/AlertModal';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  
  // Alert states
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const showErrorAlert = (message: string) => {
    setErrorMessage(message);
    setShowError(true);
  };

  const showSuccessAlert = (message: string) => {
    setSuccessMessage(message);
    setShowSuccess(true);
  };

  const handleConfirmEmail = () => {
    // Validation
    if (!email) {
      showErrorAlert('Please fill in all email fields');
      return;
    }

    if (!password) {
      showErrorAlert('Please enter a password');
      return;
    }

    if (!confirmPassword) {
      showErrorAlert('Please confirm your password');
      return;
    }

    if (password !== confirmPassword) {
      showErrorAlert('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      showErrorAlert('Password must be at least 6 characters');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showErrorAlert('Please enter a valid email address');
      return;
    }

    // Show OTP modal
    setShowOTPModal(true);
    console.log('Sending OTP to:', email);
  };

  const handleVerifyOTP = (otp: string) => {
    console.log('Verifying OTP:', otp);
    
    // Simulate API call
    setTimeout(() => {
      setShowOTPModal(false);
      
      // Show success modal
      showSuccessAlert('Email verified successfully! Redirecting to your dashboard...');
      
      // Redirect after 2 seconds
      setTimeout(() => {
        setShowSuccess(false);
        router.push('/(tabs)');
      }, 2000);
    }, 500);
  };

  const handleResendOTP = () => {
    console.log('Resending OTP to:', email);
    showSuccessAlert('OTP sent! Check your email for the new code');
  };

  const handleGoogleLogin = () => {
    console.log('Google Login');
    // TODO: Implement Google OAuth
    showSuccessAlert('Google login will be available soon!');
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FBFBFD]">
      <StatusBar style="dark" />
      
      {/* Back Button */}
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

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView 
          className="flex-1 px-9"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 80, paddingBottom: 40 }}
        >
          
          {/* Logo Section */}
          <View className="items-center mb-8">
            <View style={styles.logoWrapper}>
              <LinearGradient
                colors={['#09a3da', '#285fd8']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ width: 96, height: 96, borderRadius: 48 }} 
                className="items-center justify-center border border-white/30"
              >
                <Text className="text-5xl font-bold text-white tracking-tighter shadow-sm">K</Text>
              </LinearGradient>
            </View>
            
            <Text className="text-[42px] font-bold text-[#1C1C1E] mt-4 tracking-tighter">
              Kato
            </Text>
          </View>

          {/* Email Login Form */}
          <View className="mb-6">
            {/* Email Input */}
            <View className="mb-4">
              <Text className="text-sm font-medium text-[#6E6E73] mb-2">Email Address</Text>
              <View className="bg-white border border-[#E5E5EA] rounded-xl px-4 py-3.5 shadow-sm">
                <TextInput
                  placeholder="your.email@example.com"
                  placeholderTextColor="#AEAEB2"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className="text-[#1C1C1E] text-base"
                />
              </View>
            </View>

            {/* Password Input */}
            <View className="mb-4">
              <Text className="text-sm font-medium text-[#6E6E73] mb-2">Password</Text>
              <View className="bg-white border border-[#E5E5EA] rounded-xl px-4 py-3.5 shadow-sm flex-row items-center">
                <TextInput
                  placeholder="Enter password"
                  placeholderTextColor="#AEAEB2"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  className="flex-1 text-[#1C1C1E] text-base"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons 
                    name={showPassword ? 'eye-outline' : 'eye-off-outline'} 
                    size={22} 
                    color="#AEAEB2" 
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Confirm Password Input */}
            <View className="mb-4">
              <Text className="text-sm font-medium text-[#6E6E73] mb-2">Confirm Password</Text>
              <View className="bg-white border border-[#E5E5EA] rounded-xl px-4 py-3.5 shadow-sm flex-row items-center">
                <TextInput
                  placeholder="Re-enter password"
                  placeholderTextColor="#AEAEB2"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                  className="flex-1 text-[#1C1C1E] text-base"
                />
                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <Ionicons 
                    name={showConfirmPassword ? 'eye-outline' : 'eye-off-outline'} 
                    size={22} 
                    color="#AEAEB2" 
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Confirm Email Button */}
            <Button 
              title="Confirm Email" 
              onPress={handleConfirmEmail}
              variant="primary"
            />
          </View>

          {/* Divider */}
          <View className="flex-row items-center mb-6">
            <View className="flex-1 h-px bg-[#E5E5EA]" />
            <Text className="px-4 text-[#86868b] text-sm">or</Text>
            <View className="flex-1 h-px bg-[#E5E5EA]" />
          </View>

          {/* Google Login Button */}
          <Button 
            title="Continue with Google" 
            onPress={handleGoogleLogin}
            variant="glass"
            icon={<Image source={require('../assets/images/login/google.png')} style={{ width: 22, height: 22 }} />}
          />

          {/* Terms Text */}
          <Text className="text-[13px] text-[#86868b] text-center leading-5 px-6 mt-6">
            By continuing, you agree to Kato's{'\n'}
            <Text className="text-[#007AFF] font-semibold">Terms of Service</Text>
            <Text> and </Text>
            <Text className="text-[#007AFF] font-semibold">Privacy Policy</Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* OTP Verification Modal */}
      <OTPVerificationCard
        visible={showOTPModal}
        email={email}
        onVerify={handleVerifyOTP}
        onClose={() => setShowOTPModal(false)}
        onResend={handleResendOTP}
      />

      {/* Error Modal */}
      <AlertModal
        visible={showError}
        type="error"
        message={errorMessage}
        onClose={() => setShowError(false)}
      />

      {/* Success Modal */}
      <AlertModal
        visible={showSuccess}
        type="success"
        message={successMessage}
        buttonText="CONTINUE"
        onClose={() => setShowSuccess(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoWrapper: {
    ...Platform.select({
      ios: {
        shadowColor: "#007AFF",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
      },
      android: {
        elevation: 12,
        shadowColor: "#007AFF",
      },
    }),
    borderRadius: 48, 
    backgroundColor: 'white',
  },
});