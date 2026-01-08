// components/onboarding/OnboardingSlider.tsx
import React, { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  ViewToken
} from 'react-native';
import OnboardingCard from './OnboardingCard';
import { OnboardingSlide, onboardingSlides } from './onboardingData';

const { width } = Dimensions.get('window');

export default function OnboardingSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<OnboardingSlide>>(null);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        setCurrentIndex(viewableItems[0].index);
      }
    }
  ).current;

  return (
    <View className="flex-1 justify-center bg-background">
      <Animated.FlatList
        ref={flatListRef}
        data={onboardingSlides}
        renderItem={({ item, index }) => {
          
          // Input Range logic for smooth transition
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          // 1. Scale Animation: Active card is 100%, Side cards are 85%
          const scale = scrollX.interpolate({
  inputRange,
  outputRange: [0.8, 1, 0.8],
  extrapolate: 'clamp',
});

          // 2. Opacity Animation: Side cards fade out slightly
          const opacity = scrollX.interpolate({
  inputRange,
  outputRange: [0.3, 1, 0.3],
  extrapolate: 'clamp',
});

          // 3. TranslateX: Subtle movement to enhance the "khisakne" wala feel
          const translateX = scrollX.interpolate({
  inputRange,
  outputRange: [width * 0.2, 0, -width * 0.2],
  extrapolate: 'clamp',
});

          return (
            <Animated.View
    style={{
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
      opacity,
      transform: [
        { scale },
        { translateX }
      ],
    }}
  >
    <OnboardingCard item={item} />
  </Animated.View>
          );
        }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
      />

      {/* Pagination Dots */}
      <View className="flex-row justify-center items-center absolute bottom-12 w-full">
        {onboardingSlides.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 24, 8],
            extrapolate: 'clamp',
          });

          const dotColor = scrollX.interpolate({
            inputRange,
            outputRange: ['#d1d5db', '#007AFF', '#d1d5db'], // Gray to Primary Blue
            extrapolate: 'clamp',
          });

          return (
  <Animated.View
    key={index}
    style={{
      height: 8,
      width: 8, // Fixed width rakhein
      borderRadius: 4,
      backgroundColor: dotColor,
      marginHorizontal: 4,
      transform: [{
        // Width ki jagah ScaleX use karein (Native Driver support karta hai)
        scaleX: scrollX.interpolate({
          inputRange,
          outputRange: [1, 2, 1], // 1x se 3x lamba hoga dot
          extrapolate: 'clamp',
        })
      }]
    }}
  />
);
        })}
      </View>
    </View>
  );
}