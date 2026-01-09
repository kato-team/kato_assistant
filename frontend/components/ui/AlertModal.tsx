// components/ui/AlertModal.tsx
import React, { useEffect, useRef } from 'react';
import { View, Text, Modal, TouchableOpacity, Animated, Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface AlertModalProps {
  visible: boolean;
  type: 'success' | 'error';
  title?: string;
  message: string;
  buttonText?: string;
  onClose: () => void;
}

export default function AlertModal({
  visible,
  type,
  title,
  message,
  buttonText,
  onClose,
}: AlertModalProps) {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      // Scale animation
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }).start();

      // Bounce icon animation
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.spring(bounceAnim, {
          toValue: 0,
          friction: 4,
          tension: 100,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      scaleAnim.setValue(0);
      bounceAnim.setValue(0);
    }
  }, [visible]);

  const isSuccess = type === 'success';
  

//   icon: 'checkmark-circle',  // Success
// icon: 'close-circle',      // Error
// icon: 'shield-checkmark',  // Success
// icon: 'warning',           // Error

  // Colors based on type
  const colors = {
    success: {
      primary: '#00A8E8',
      secondary: '#E3F5FF',
      icon: 'cloud-done',
      title: title || 'Success!',
      button: '#00A8E8',
    },
    error: {
      primary: '#FF3B30',
      secondary: '#FFE8E6',
      icon: 'cloud-offline',
      title: title || 'Error!',
      button: '#FF3B30',
    },
  };

  const config = isSuccess ? colors.success : colors.error;

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
            transform: [{ scale: scaleAnim }],
          }}
          className="w-full max-w-xs"
        >
          {/* Alert Card */}
          <View 
            className="bg-white rounded-3xl p-8 items-center"
            style={styles.cardShadow}
          >
            {/* Icon with Bounce Animation */}
            <Animated.View
              style={{
                transform: [
                  { 
                    translateY: bounceAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -10],
                    })
                  }
                ],
              }}
            >
              <View 
                className="w-20 h-20 rounded-full items-center justify-center mb-6"
                style={[
                  styles.iconWrapper,
                  { backgroundColor: config.secondary }
                ]}
              >
                <View 
                  className="w-16 h-16 rounded-full items-center justify-center"
                  style={{ backgroundColor: config.primary }}
                >
                  <Ionicons 
                    name={config.icon as any}
                    size={36} 
                    color="#FFFFFF" 
                  />
                </View>
              </View>
            </Animated.View>

            {/* Title */}
            <Text 
              className="text-2xl font-bold mb-3 text-center"
              style={{ color: config.primary }}
            >
              {config.title}
            </Text>

            {/* Message */}
            <Text 
              className="text-sm text-[#6E6E73] text-center leading-5 mb-6 px-2"
            >
              {message}
            </Text>

            {/* Action Button */}
            <TouchableOpacity
              onPress={onClose}
              activeOpacity={0.85}
              className="w-full rounded-2xl py-3.5 px-6 active:scale-95"
              style={[
                styles.button,
                { backgroundColor: config.button }
              ]}
            >
              <Text className="text-white text-center font-bold text-base">
                {buttonText || (isSuccess ? 'CONTINUE' : 'TRY AGAIN')}
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

// In AlertModal.tsx

const colors = {
  success: {
    primary: '#00A8E8',  // Change to your brand color
    secondary: '#E3F5FF',
    // ...
  },
  error: {
    primary: '#FF3B30',  // Change to your brand color
    secondary: '#FFE8E6',
    // ...
  },
};

const styles = StyleSheet.create({
  cardShadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.15,
        shadowRadius: 30,
      },
      android: {
        elevation: 15,
      },
    }),
  },

  iconWrapper: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
    }),
  },

  button: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});


// ============================================
// 🎨 USAGE EXAMPLES
// ============================================

/*

// 1. SUCCESS MODAL
import AlertModal from '@/components/ui/AlertModal';

const [showSuccess, setShowSuccess] = useState(false);

<AlertModal
  visible={showSuccess}
  type="success"
  title="Success!"
  message="Your email has been verified successfully"
  buttonText="CONTINUE"
  onClose={() => setShowSuccess(false)}
/>


// 2. ERROR MODAL
const [showError, setShowError] = useState(false);

<AlertModal
  visible={showError}
  type="error"
  title="Error!"
  message="Please fill in all email fields"
  buttonText="TRY AGAIN"
  onClose={() => setShowError(false)}
/>


// 3. CUSTOM MESSAGES
<AlertModal
  visible={showError}
  type="error"
  message="Password must be at least 6 characters"
  onClose={() => setShowError(false)}
/>


// 4. IN LOGIN SCREEN (Example integration)

export default function LoginScreen() {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleConfirmEmail = () => {
    if (!email) {
      setErrorMessage('Please fill in all email fields');
      setShowError(true);
      return;
    }

    if (!password || !confirmPassword) {
      setErrorMessage('Please fill in all password fields');
      setShowError(true);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      setShowError(true);
      return;
    }

    // Success case
    setShowOTPModal(true);
  };

  const handleVerifyOTP = (otp: string) => {
    // After successful verification
    setShowSuccess(true);
  };

  return (
    <>
      {/* Your login UI *\/}
      
      {/* Error Modal *\/}
      <AlertModal
        visible={showError}
        type="error"
        message={errorMessage}
        onClose={() => setShowError(false)}
      />
      
      {/* Success Modal *\/}
      <AlertModal
        visible={showSuccess}
        type="success"
        message="Email verified successfully! Redirecting to your dashboard..."
        buttonText="CONTINUE"
        onClose={() => {
          setShowSuccess(false);
          router.push('/(tabs)');
        }}
      />
    </>
  );
}

*/