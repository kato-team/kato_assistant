export interface OnboardingSlide {
  id: string;
  title: string;
  description: string;
  bgGradient: [string, string];
  imageSource: any;
}

// Image se uthaya gaya premium gradient: Deep Blue to Dark Navy
const SHARED_GRADIENT: [string, string] = ['#1E40AF', '#172554']; 

export const onboardingSlides: OnboardingSlide[] = [
  {
    id: '0',
    title: 'AI Chat',
    description: 'Ask me about your business and emails, calls and everything.',
    bgGradient: SHARED_GRADIENT,
    imageSource: require('./image/ai_chat.jpeg'), // Make sure you have this image
  },
  {
    id: '1',
    title: 'Calling Assistant',
    description: 'I will handle your calls with professional care.',
    bgGradient: SHARED_GRADIENT,
    imageSource: require('./image/call.jpeg'),
  },
  {
    id: '2',
    title: 'Email Assistant',
    description: 'Never miss an important email again.',
    bgGradient: SHARED_GRADIENT,
    imageSource: require('./image/email.jpeg'),
  },
  {
    id: '3',
    title: 'Tasks & Meetings',
    description: 'Organize your schedule effortlessly.',
    bgGradient: SHARED_GRADIENT,
    imageSource: require('./image/meeting.jpeg'),
  },
];