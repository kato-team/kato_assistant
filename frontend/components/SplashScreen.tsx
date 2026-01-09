import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Dimensions, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const scaleAnim = useRef(new Animated.Value(0)).current; // Chote se bada
  const bounceAnim = useRef(new Animated.Value(0)).current; // Uchhalne ke liye
  const shadowOpacity = useRef(new Animated.Value(0)).current; // Fighter plane shadow

  useEffect(() => {
    // 1. Scale Up + Shadow Appearance
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 20,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(shadowOpacity, {
        toValue: 0.3,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // 2. Shadow gaayab hona
      Animated.timing(shadowOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();

      // 3. Double Bounce Animation
      Animated.sequence([
        Animated.spring(bounceAnim, { toValue: -30, speed: 20, useNativeDriver: true }),
        Animated.spring(bounceAnim, { toValue: 0, speed: 20, useNativeDriver: true }),
        Animated.spring(bounceAnim, { toValue: -15, speed: 20, useNativeDriver: true }),
        Animated.spring(bounceAnim, { toValue: 0, speed: 20, useNativeDriver: true }),
      ]).start(() => {
        // Animation khatam hone par 1 second wait karke Onboarding par bhej dega
        setTimeout(onFinish, 1000);
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* Fighter Plane style Shadow */}
      <Animated.View 
        style={[
          styles.shadow, 
          { opacity: shadowOpacity, transform: [{ scale: scaleAnim }] }
        ]} 
      />

      {/* Main Rounded 'K' Logo */}
      <Animated.View
        style={{
          transform: [
            { scale: scaleAnim },
            { translateY: bounceAnim }
          ],
        }}
      >
        <LinearGradient
          colors={['#4facfe', '#00f2fe']}
          style={styles.logoCircle}
        >
          <Text style={styles.logoText}>K</Text>
        </LinearGradient>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  logoText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
  },
  shadow: {
    position: 'absolute',
    width: 140,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 70,
    bottom: height / 2 - 80, // Logo ke niche
    filter: 'blur(20px)', // Expo Web/Android par shadow-radius use hota hai
  }
});