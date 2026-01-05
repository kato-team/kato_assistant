// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // 🎨 PREMIUM COLOR SYSTEM
      colors: {
        // Primary Background Colors
        background: {
          DEFAULT: '#F5F5F7',    // Off-white (main background)
          secondary: '#FAFAFA',  // Lighter shade
          tertiary: '#FFFFFF',   // Pure white (for cards)
          dark: '#E5E5EA',       // Subtle gray
        },

        // Glass Morphism (iOS-style blur effect)
        // Note: Use with opacity utilities in React Native
        glass: {
          light: 'rgba(255, 255, 255, 0.65)',    // Light glass
          medium: 'rgba(255, 255, 255, 0.80)',   // Medium glass
          heavy: 'rgba(255, 255, 255, 0.95)',    // Heavy glass
          dark: 'rgba(0, 0, 0, 0.08)',           // Dark glass tint
        },

        // Primary Brand Colors (Apple Blue)
        primary: {
          DEFAULT: '#007AFF',    // Apple Blue (main accent)
          50: '#E5F3FF',         // Lightest blue
          100: '#CCE7FF',        // Very light blue
          200: '#99CFFF',        // Light blue
          300: '#66B7FF',        // Medium light blue
          400: '#339FFF',        // Medium blue
          500: '#007AFF',        // Main blue (DEFAULT)
          600: '#0062CC',        // Dark blue
          700: '#004999',        // Darker blue
          800: '#003166',        // Very dark blue
          900: '#001933',        // Darkest blue
        },

        // Secondary Accent Colors
        secondary: {
          DEFAULT: '#5856D6',    // Purple (secondary accent)
          light: '#AF52DE',      // Light purple
          dark: '#5856D6',       // Dark purple
        },

        // Success Colors (Green)
        success: {
          DEFAULT: '#34C759',    // Apple Green
          light: '#30D158',      // Light green
          dark: '#28A745',       // Dark green
        },

        // Warning Colors (Orange)
        warning: {
          DEFAULT: '#FF9500',    // Apple Orange
          light: '#FFCC00',      // Light orange/yellow
          dark: '#FF8C00',       // Dark orange
        },

        // Error/Danger Colors (Red)
        error: {
          DEFAULT: '#FF3B30',    // Apple Red
          light: '#FF453A',      // Light red
          dark: '#D70015',       // Dark red
        },

        // Info Colors (Cyan)
        info: {
          DEFAULT: '#007AFF',    // Blue (same as primary)
          light: '#00C7BE',      // Cyan
          dark: '#0051D5',       // Dark blue
        },

        // Text Colors (Optimized for readability)
        text: {
          primary: '#1C1C1E',     // Near black (main text)
          secondary: '#6E6E73',   // Medium gray (secondary text)
          tertiary: '#AEAEB2',    // Light gray (tertiary text)
          disabled: '#C7C7CC',    // Disabled text
          inverse: '#FFFFFF',     // White text (on dark backgrounds)
        },

        // Border Colors
        border: {
          DEFAULT: 'rgba(0, 0, 0, 0.08)',  // Subtle border
          light: 'rgba(0, 0, 0, 0.04)',    // Very light border
          medium: 'rgba(0, 0, 0, 0.12)',   // Medium border
          dark: 'rgba(0, 0, 0, 0.20)',     // Dark border
          primary: '#007AFF',               // Accent border
        },

        // Gradient Colors (For premium effects)
        gradient: {
          blue: {
            start: '#007AFF',
            end: '#0051D5',
          },
          purple: {
            start: '#5856D6',
            end: '#AF52DE',
          },
          green: {
            start: '#34C759',
            end: '#30D158',
          },
        },

        // Status Colors (For call states, email priorities, etc.)
        status: {
          online: '#34C759',      // Green
          busy: '#FF9500',        // Orange
          offline: '#8E8E93',     // Gray
          urgent: '#FF3B30',      // Red
          important: '#FF9500',   // Orange
          normal: '#007AFF',      // Blue
        },

        // Badge Colors
        badge: {
          blue: '#007AFF',
          purple: '#5856D6',
          pink: '#FF2D55',
          red: '#FF3B30',
          orange: '#FF9500',
          yellow: '#FFCC00',
          green: '#34C759',
          teal: '#5AC8FA',
          cyan: '#00C7BE',
          gray: '#8E8E93',
        },
      },

      // 🔤 PREMIUM FONT FAMILIES
      fontFamily: {
        // iOS System Fonts (San Francisco)
        ios: [
          'SF Pro Display',      // Headlines (iOS)
          'SF Pro Text',         // Body text (iOS)
          '-apple-system',       // Fallback
          'BlinkMacSystemFont',  // Fallback
          'system-ui',
          'sans-serif',
        ],
        
        // Android System Fonts
        android: [
          'Roboto',              // Default Android
          'system-ui',
          'sans-serif',
        ],

        // Cross-platform Premium Fonts
        inter: [
          'Inter',               // Modern, clean (cross-platform)
          'system-ui',
          'sans-serif',
        ],
        poppins: [
          'Poppins',             // Friendly, modern (Android preferred)
          'system-ui',
          'sans-serif',
        ],
        sfPro: [
          'SF Pro Display',      // iOS specific
          'SF Pro Text',
          'system-ui',
          'sans-serif',
        ],

        // Monospace (for code, numbers)
        mono: [
          'SF Mono',             // iOS monospace
          'Menlo',
          'Monaco',
          'Courier New',
          'monospace',
        ],
      },

      // 📏 FONT SIZES (Premium typography scale)
      fontSize: {
        // Extra Small
        xs: ['12px', { lineHeight: '16px', letterSpacing: '0.01em' }],
        
        // Small
        sm: ['14px', { lineHeight: '20px', letterSpacing: '0.01em' }],
        
        // Base (Default)
        base: ['16px', { lineHeight: '24px', letterSpacing: '0' }],
        
        // Large
        lg: ['18px', { lineHeight: '28px', letterSpacing: '-0.01em' }],
        
        // Extra Large (Headings)
        xl: ['20px', { lineHeight: '28px', letterSpacing: '-0.01em' }],
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
        '3xl': ['30px', { lineHeight: '36px', letterSpacing: '-0.02em' }],
        '4xl': ['36px', { lineHeight: '40px', letterSpacing: '-0.03em' }],
        '5xl': ['48px', { lineHeight: '52px', letterSpacing: '-0.03em' }],
        
        // Display (Hero text)
        '6xl': ['60px', { lineHeight: '64px', letterSpacing: '-0.04em' }],
        '7xl': ['72px', { lineHeight: '76px', letterSpacing: '-0.04em' }],
      },

      // 📐 SPACING (8px grid system)
      spacing: {
        0: '0px',
        0.5: '2px',
        1: '4px',
        1.5: '6px',
        2: '8px',
        2.5: '10px',
        3: '12px',
        3.5: '14px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
      },

      // 📦 BORDER RADIUS (Rounded corners)
      borderRadius: {
        none: '0px',
        sm: '8px',          // Small (badges, chips)
        DEFAULT: '12px',    // Default (cards, inputs)
        md: '12px',         // Medium (same as default)
        lg: '16px',         // Large (modals, major cards)
        xl: '20px',         // Extra large
        '2xl': '24px',      // Hero elements
        '3xl': '28px',      // Special cases
        full: '9999px',     // Circular (avatars, buttons)
      },

      // 🎭 BOX SHADOWS (iOS-style elevation)
      boxShadow: {
        // Subtle shadows (cards)
        sm: '0 2px 8px rgba(0, 0, 0, 0.04)',
        DEFAULT: '0 2px 8px rgba(0, 0, 0, 0.06)',
        md: '0 4px 16px rgba(0, 0, 0, 0.08)',
        
        // Prominent shadows (elevated elements)
        lg: '0 8px 24px rgba(0, 0, 0, 0.12)',
        xl: '0 16px 48px rgba(0, 0, 0, 0.16)',
        
        // Colored shadows (premium effect)
        'primary': '0 8px 24px rgba(0, 122, 255, 0.3)',
        'success': '0 8px 24px rgba(52, 199, 89, 0.3)',
        'warning': '0 8px 24px rgba(255, 149, 0, 0.3)',
        'error': '0 8px 24px rgba(255, 59, 48, 0.3)',
        
        // Inner shadow (pressed state)
        inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
        
        // No shadow
        none: 'none',
      },

      // ⏱️ TRANSITIONS (Smooth animations)
      transitionDuration: {
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms',
      },

      // 🎬 ANIMATION (Keyframes)
      keyframes: {
        // Fade in
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Slide up
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        // Slide down
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        // Scale (bounce)
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
        },
        // Pulse
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        // Spin
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },

      animation: {
        fadeIn: 'fadeIn 200ms ease-in-out',
        slideUp: 'slideUp 300ms ease-out',
        slideDown: 'slideDown 300ms ease-out',
        scale: 'scale 200ms ease-in-out',
        pulse: 'pulse 2s ease-in-out infinite',
        spin: 'spin 1s linear infinite',
      },

      // 📱 SAFE AREA (iOS notch, Android navigation)
      inset: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-right': 'env(safe-area-inset-right)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
      },

      // 🎨 OPACITY (For glass effects)
      opacity: {
        0: '0',
        5: '0.05',
        10: '0.10',
        20: '0.20',
        25: '0.25',
        30: '0.30',
        40: '0.40',
        50: '0.50',
        60: '0.60',
        65: '0.65',
        70: '0.70',
        75: '0.75',
        80: '0.80',
        90: '0.90',
        95: '0.95',
        100: '1',
      },

      // 🔲 Z-INDEX (Layer management)
      zIndex: {
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',        // Modals
        60: '60',        // Toasts/notifications
        70: '70',        // Overlays
        auto: 'auto',
      },
    },
  },
  plugins: [],
}


// ============================================
// 📝 USAGE EXAMPLES (Copy to your components)
// ============================================

/*

// 1. GLASS CARD COMPONENT
<View className="bg-glass-light backdrop-blur-xl border border-border rounded-lg p-4 shadow-md">
  <Text className="text-text-primary font-inter font-semibold">Glass Card</Text>
</View>

// 2. PRIMARY BUTTON
<TouchableOpacity 
  className="bg-primary rounded-xl px-6 py-3 shadow-primary active:scale-95 transition-transform"
>
  <Text className="text-text-inverse font-sfPro font-semibold text-base">
    Continue
  </Text>
</TouchableOpacity>

// 3. PREMIUM GRADIENT CARD
<LinearGradient
  colors={['#007AFF', '#0051D5']}
  className="rounded-2xl p-6 shadow-lg"
>
  <Text className="text-text-inverse font-poppins text-xl font-bold">
    Premium Card
  </Text>
</LinearGradient>

// 4. STATUS BADGE
<View className="bg-status-urgent rounded-full px-3 py-1">
  <Text className="text-text-inverse text-xs font-inter font-medium">
    Urgent
  </Text>
</View>

// 5. ANIMATED BUTTON (Press effect)
<Pressable
  className="bg-background-tertiary border border-border-medium rounded-xl p-4"
  onPressIn={() => Animated.spring(scale, { toValue: 0.95 })}
  onPressOut={() => Animated.spring(scale, { toValue: 1 })}
>
  <Text className="text-text-primary font-inter">Tap me</Text>
</Pressable>

// 6. MODAL OVERLAY
<View className="absolute inset-0 bg-black/50 backdrop-blur-sm z-50">
  <View className="bg-background-tertiary rounded-t-3xl p-6">
    <Text className="text-text-primary font-sfPro text-2xl font-bold">
      Modal Title
    </Text>
  </View>
</View>

// 7. NAVIGATION BAR (iOS-style)
<View className="bg-glass-heavy backdrop-blur-2xl border-t border-border safe-area-bottom">
  <View className="flex-row justify-around py-2">
    {/* Nav icons */
  // }
//   </View>
// </View>

// 8. AI CHAT BUBBLE
{/* <View className="bg-primary-500 rounded-2xl rounded-tr-sm p-3 shadow-md max-w-[75%]">
  <Text className="text-text-inverse font-inter text-sm">
    Hello! How can I help?
  </Text>
</View>

// 9. CALL CARD (With status)
<View className="bg-background-tertiary border border-border rounded-xl p-4">
  <View className="flex-row items-center">
    <View className="w-10 h-10 bg-primary-100 rounded-full items-center justify-center">
      <Icon name="phone" className="text-primary" />
    </View>
    <View className="flex-1 ml-3">
      <Text className="text-text-primary font-sfPro font-semibold">
        Rajesh Kumar
      </Text>
      <Text className="text-text-secondary font-inter text-sm">
        10:30 AM • 3m 24s
      </Text>
    </View>
    <View className="bg-status-online rounded-full w-2 h-2" />
  </View>
</View>

// 10. DASHBOARD STATS CARD
<View className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-4 shadow-primary">
  <Text className="text-text-inverse font-poppins text-3xl font-bold">
    12
  </Text>
  <Text className="text-text-inverse/70 font-inter text-xs">
    Unread Emails
  </Text>
</View> */}




// ============================================
// 📚 FONT SETUP GUIDE (React Native Expo)
// ============================================

/*

1. Install fonts in your project:

expo install expo-font @expo-google-fonts/inter @expo-google-fonts/poppins

2. Load fonts in App.js:

import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <YourApp />;
}

3. iOS San Francisco font (built-in, no install needed):
   - Use font-sfPro classes directly
   - Fallback to system-ui automatically

4. Android Roboto font (built-in):
   - Use font-android classes
   - Or use Inter/Poppins for consistency

*/


// ============================================
// 🎨 GLASS BLUR EFFECT (React Native)
// ============================================

/*

IMPORTANT: Android may not support backdrop-blur perfectly.
Use alternative approach:

Option 1: BlurView (expo-blur)
npm install expo-blur

import { BlurView } from 'expo-blur';

<BlurView intensity={80} tint="light" className="rounded-xl p-4">
  <Text>Glass effect content</Text>
</BlurView>

Option 2: Semi-transparent background (fallback)
<View className="bg-white/65 rounded-xl p-4">
  <Text>Pseudo-glass effect</Text>
</View>

*/


// ============================================
// 🎯 COLOR UTILITY CLASSES (Quick Reference)
// ============================================

/*

BACKGROUNDS:
- bg-background (off-white)
- bg-background-secondary (lighter)
- bg-background-tertiary (white)
- bg-primary (blue)
- bg-success (green)
- bg-warning (orange)
- bg-error (red)

TEXT:
- text-text-primary (near black)
- text-text-secondary (gray)
- text-text-tertiary (light gray)
- text-text-inverse (white)

BORDERS:
- border-border (subtle)
- border-border-light (very light)
- border-border-primary (blue)

SHADOWS:
- shadow-sm (subtle)
- shadow-md (standard)
- shadow-lg (prominent)
- shadow-primary (blue glow)

FONTS:
- font-inter (cross-platform)
- font-poppins (Android preferred)
- font-sfPro (iOS preferred)
- font-ios (iOS system)
- font-android (Android system)

*/