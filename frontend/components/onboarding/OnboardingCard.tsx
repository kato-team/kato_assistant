import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, Text, View, Image } from 'react-native';
import { OnboardingSlide } from './onboardingData';

const { width } = Dimensions.get('window');

// Portrait dimensions
const CARD_WIDTH = width * 0.75; 
const CARD_HEIGHT = CARD_WIDTH * 1.4; 

interface OnboardingCardProps {
  item: OnboardingSlide;
}

export default function OnboardingCard({ item }: OnboardingCardProps) {
  return (
    <View style={{ width: width, alignItems: 'center' }}>
      {/* Main Card: Radius set to ~9px (rounded-lg is approx 8px) */}
      <View 
        style={{ width: CARD_WIDTH, height: CARD_HEIGHT, borderRadius: 4 }}
        className="overflow-hidden premium-card-shadow bg-white border border-white/10"
      >
        <LinearGradient
          colors={item.bgGradient}
          className="flex-1"
        >
          {/* Top Illustration Area */}
          <View className="flex-[1.2] items-center justify-center p-6">
             <Image 
                source={item.imageSource} 
                style={{ width: '100%', height: '100%', borderRadius: 4 }}
                resizeMode="cover"
             />
          </View>

          {/* Bottom Content Card: Also with reduced radius */}
          <View className="flex-1 px-4 pb-6 justify-end">
            <View 
              style={{ borderRadius: 4 }}
              className="bg-black/30 backdrop-blur-md p-5 border border-white/20"
            >
              <Text className="text-xl font-bold text-white mb-2 leading-tight">
                {item.title}
              </Text>
              <Text className="text-xs text-white/80 leading-4">
                {item.description}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}