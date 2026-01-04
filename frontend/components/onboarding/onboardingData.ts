// components/onboarding/onboardingData.ts

export interface OnboardingSlide {
  id: string;
  emoji: string;
  title: string;
  description: string;
  bgGradient: [string, string];
  imagePath: any;
}

export const onboardingSlides: OnboardingSlide[] = [
  {
    id: '1',
    emoji: '📞',
    title: 'Calling Assistant',
    description: 'I will handle calls',
    bgGradient: ['#4facfe', '#00f2fe'],
    imagePath: require('../../assets/images/react-logo.png'),
  },
  {
    id: '2',
    emoji: '📧',
    title: 'Email Assistant',
    description: 'I will handle emails',
    bgGradient: ['#f093fb', '#f5576c'],
    imagePath: require('../../assets/images/react-logo.png'),
  },
  {
    id: '3',
    emoji: '📅',
    title: 'Tasks & Meetings',
    description: 'I will handle tasks and meetings',
    bgGradient: ['#a8edea', '#fed6e3'],
    imagePath: require('../../assets/images/react-logo.png'),
  },
  {
    id: '4',
    emoji: '⚡',
    title: 'Smart Automation',
    description: 'AI-powered smart automation',
    bgGradient: ['#43e97b', '#38f9d7'],
    imagePath: require('../../assets/images/react-logo.png'),
  },
];