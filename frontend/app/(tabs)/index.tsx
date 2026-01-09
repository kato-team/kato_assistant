// app/(tabs)/index.tsx
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import '../../global.css';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import OnboardingSlider from '../../components/onboarding/OnboardingSlider'; 
import Button from '../../components/ui/Button';
import Colors from '../../constants/Colors';

export default function OnboardingScreen() {
  const router = useRouter();                 

  const handleGetStarted = (): void => {
  
    router.push('/login'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Header */}

      {/* Slider - Takes most space */}
      <View style={styles.sliderContainer}>
        <OnboardingSlider />
      </View>

      {/* Footer Button - Fixed at bottom */}
      <View style={styles.footer}>
        <Button 
          title="Get Started" 
          onPress={handleGetStarted}
          variant="primary"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  logo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2C3E50',
    letterSpacing: 0.5,
  },
  sliderContainer: {
    flex: 1,
  },
  footer: {
    paddingHorizontal: 40,
    paddingBottom: 30,
    paddingTop: 10,
  },
});