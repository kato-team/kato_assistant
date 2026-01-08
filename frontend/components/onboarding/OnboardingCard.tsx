import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, Text, View, Image } from 'react-native';
import { OnboardingSlide } from './onboardingData';

const { width } = Dimensions.get('window');

// PORTRAIT LOOK: Width kam aur Height zyada
const CARD_WIDTH = width * 0.75; 
const CARD_HEIGHT = CARD_WIDTH * 1.4; 

interface OnboardingCardProps {
  item: OnboardingSlide;
}

export default function OnboardingCard({ item }: OnboardingCardProps) {
  return (
    <View style={{ width: width, alignItems: 'center' }}>
      <View 
        style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
        className="rounded-[40px] overflow-hidden premium-card-shadow bg-white"
      >
        <LinearGradient
          colors={item.bgGradient}
          className="flex-1"
        >
          {/* Top Section: Image/Illustration */}
          <View className="flex-[1.2] items-center justify-center p-8">
             <Image 
                source={item.imageSource} 
                style={{ width: '100%', height: '100%', borderRadius: 20 }}
                resizeMode="contain"
             />
          </View>

          {/* Bottom Section: Text Content with Glass Effect */}
          <View className="flex-1 px-6 pb-8 justify-end">
            <View className="bg-white/20 backdrop-blur-lg rounded-[30px] p-6 border border-white/30">
              <Text className="text-2xl font-bold text-white text-center mb-2">
                {item.title}
              </Text>
              <Text className="text-sm text-white/90 text-center leading-5">
                {item.description}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}