// components/onboarding/OnboardingCard.tsx
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { OnboardingSlide } from './onboardingData';

const { width } = Dimensions.get('window');
const CARD_WIDTH = Math.min(width * 0.9, 400);
const CARD_HEIGHT = (CARD_WIDTH * 1350) / 1080;

interface OnboardingCardProps {
  item: OnboardingSlide;
}

export default function OnboardingCard({ item }: OnboardingCardProps) {
  return (
    <View style={styles.cardContainer}>
      <LinearGradient
        colors={item.bgGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        {/* White Content Card - Content INSIDE */}
        <View style={styles.whiteCard}>
          {/* Icon Circle */}
          <View style={styles.iconCircle}>
            <Text style={styles.emoji}>{item.emoji}</Text>
          </View>

          {/* Title INSIDE white card */}
          <Text style={styles.innerTitle}>
            I'm listening and taking notes..
          </Text>

          {/* Image INSIDE white card */}
          <View style={styles.imageContainer}>
            <Image 
              source={item.imagePath}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          {/* Live Suggestions INSIDE white card */}
          <View style={styles.suggestionSection}>
            <Text style={styles.liveText}>Live Suggestions</Text>
            <View style={styles.generatingRow}>
              <View style={styles.loadingDot} />
              <Text style={styles.generatingText}>Generating...</Text>
            </View>
          </View>
        </View>

        {/* Title OUTSIDE white card, BELOW it */}
        <View style={styles.bottomSection}>
          <Text style={styles.mainTitle}>{item.title}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 28,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  gradient: {
    flex: 1,
    padding: 24,
    justifyContent: 'flex-start',
  },
  whiteCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginTop: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(102, 126, 234, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  emoji: {
    fontSize: 28,
  },
  innerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 20,
    lineHeight: 26,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#F5F7FA',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '70%',
    height: '70%',
  },
  suggestionSection: {
    paddingTop: 8,
  },
  liveText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#34495E',
    marginBottom: 10,
  },
  generatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loadingDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderTopColor: '#667eea',
    marginRight: 8,
  },
  generatingText: {
    fontSize: 13,
    color: '#95A5A6',
  },
  bottomSection: {
    marginTop: 24,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.15)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
});