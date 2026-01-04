// app/(tabs)/login.tsx
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Colors from '../../constants/Colors';

export default function LoginScreen() {
  const handleGoogleLogin = (): void => {
    console.log('Google Login Pressed!');
    // TODO: Implement Google OAuth
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.content}>
        {/* Logo Section */}
        <View style={styles.logoSection}>
          <Text style={styles.logo}>Kato</Text>
          <Text style={styles.tagline}>Your AI Assistant</Text>
        </View>

        {/* Illustration Placeholder */}
        <View style={styles.illustrationContainer}>
          <View style={styles.illustrationCircle}>
            <Text style={styles.illustrationEmoji}>🤖</Text>
          </View>
        </View>

        {/* Welcome Text */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome!</Text>
          <Text style={styles.welcomeSubtitle}>
            Sign in to continue with your AI assistant app
          </Text>
        </View>

        {/* Google Login Button */}
        <TouchableOpacity 
          style={styles.googleButton}
          onPress={handleGoogleLogin}
          activeOpacity={0.85}
        >
          <View style={styles.googleIconContainer}>
            <Text style={styles.googleIcon}>G</Text>
          </View>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* Terms Text */}
        <Text style={styles.termsText}>
          By continuing, you agree to our{' '}
          <Text style={styles.termsLink}>Terms of Service</Text>
          {' '}and{' '}
          <Text style={styles.termsLink}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-evenly',
  },
  logoSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    fontSize: 36,
    fontWeight: '700',
    color: '#2C3E50',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: '#7F8C8D',
    fontWeight: '500',
  },
  illustrationContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  illustrationCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#E8F4F8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  illustrationEmoji: {
    fontSize: 80,
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 12,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#7F8C8D',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 20,
  },
  googleIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  googleIcon: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  googleButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#2C3E50',
  },
  termsText: {
    fontSize: 13,
    color: '#95A5A6',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 30,
  },
  termsLink: {
    color: '#1E88E5',
    fontWeight: '600',
  },
});