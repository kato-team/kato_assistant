
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity, Animated, Platform, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Button from './Button';

interface OTPVerificationCardProps {
  visible: boolean;
  email: string;
  onVerify: (otp: string) => void;
  onClose: () => void;
  onResend: () => void;
}

export default function OTPVerificationCard({
  visible,
  email,
  onVerify,
  onClose,
  onResend,
}: OTPVerificationCardProps) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef<Array<TextInput | null>>([]);
  
  // Animation
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }).start();
    } else {
      scaleAnim.setValue(0);
    }
  }, [visible]);

  const handleOTPChange = (value: string, index: number) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-verify when complete
    if (newOtp.every(digit => digit !== '')) {
      handleVerify(newOtp.join(''));
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async (otpCode: string) => {
    setIsVerifying(true);
    
    // Simulate verification
    setTimeout(() => {
      setIsVerifying(false);
      onVerify(otpCode);
      setOtp(['', '', '', '']); // Reset
    }, 1500);
  };

  const handleResend = () => {
    setOtp(['', '', '', '']);
    inputRefs.current[0]?.focus();
    onResend();
    
    // Show shake animation
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/60 items-center justify-center px-6">
        <Animated.View
          style={{
            transform: [
              { scale: scaleAnim },
              { translateX: shakeAnim }
            ],
          }}
          className="w-full max-w-sm"
        >
          {/* Gradient Card with Shine Effect */}
          <View style={styles.cardWrapper}>
            <LinearGradient
              colors={['#09a3da', '#285fd8']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientCard}
              className="rounded-3xl p-8 relative overflow-hidden"
            >
              {/* Shine Effect Overlay */}
              <View style={styles.shineOverlay} />

              {/* Close Button */}
              <TouchableOpacity
                onPress={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full items-center justify-center active:scale-90"
                style={styles.closeButton}
              >
                <Ionicons name="close" size={24} color="#fff" />
              </TouchableOpacity>

              {/* Success Icon */}
              <View className="w-20 h-20 bg-white rounded-full items-center justify-center mb-6 self-center" style={styles.iconShadow}>
                <LinearGradient
                  colors={['#09a3da', '#285fd8']}
                  style={{ width: 64, height: 64, borderRadius: 32 }}
                  className="items-center justify-center"
                >
                  <Ionicons name="mail-outline" size={32} color="#fff" />
                </LinearGradient>
              </View>

              {/* Title */}
              <Text className="text-white text-2xl font-bold text-center mb-2">
                Verify Your Email
              </Text>

              {/* Subtitle */}
              <Text className="text-white/90 text-sm text-center mb-6 leading-5">
                We've sent a 4-digit code to{'\n'}
                <Text className="font-bold">{email}</Text>
              </Text>

              {/* OTP Input Boxes */}
              <View className="flex-row justify-between mb-6">
                {otp.map((digit, index) => (
                  <View
                    key={index}
                    className="w-12 h-14 bg-white/95 rounded-xl items-center justify-center"
                    style={[
                      styles.otpBox,
                      digit !== '' && styles.otpBoxFilled
                    ]}
                  >
                    <TextInput
                      ref={(ref) => (inputRefs.current[index] = ref)}
                      value={digit}
                      onChangeText={(value) => handleOTPChange(value, index)}
                      onKeyPress={(e) => handleKeyPress(e, index)}
                      keyboardType="number-pad"
                      maxLength={1}
                      selectTextOnFocus
                      className="text-2xl font-bold text-center w-full h-full"
                      style={[
                        styles.otpInput,
                        { color: '#285fd8' }
                      ]}
                    />
                  </View>
                ))}
              </View>

              {/* Verify Button (Using your Button component) */}
              <View className="mb-4">
                <Button
                  title={isVerifying ? 'Verifying...' : 'Confirm OTP'}
                  onPress={() => handleVerify(otp.join(''))}
                  variant="primary"
                />
              </View>

              {/* Resend OTP */}
              <TouchableOpacity 
                onPress={handleResend}
                className="py-2 active:opacity-70"
              >
                <Text className="text-white/90 text-sm text-center">
                  Didn't receive code?{' '}
                  <Text className="font-bold underline">Resend</Text>
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    ...Platform.select({
      ios: {
        shadowColor: '#09a3da',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.4,
        shadowRadius: 30,
      },
      android: {
        elevation: 20,
      },
    }),
  },

  gradientCard: {
    position: 'relative',
  },

  // Shine effect (animated gradient overlay)
  shineOverlay: {
    position: 'absolute',
    top: -100,
    right: -100,
    width: 200,
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: [{ rotate: '45deg' }],
    borderRadius: 20,
  },

  closeButton: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  iconShadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },

  otpBox: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },

  otpBoxFilled: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    ...Platform.select({
      ios: {
        shadowColor: '#09a3da',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  otpInput: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: Platform.OS === 'ios' ? 12 : 0,
  },
});