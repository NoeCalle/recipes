import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import colors from '../theme/colors';
import { uiCopy, Language } from '../i18n/translations';
import { useLanguage } from '../context/LanguageContext';

const backgroundImage = {
  uri: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1400&q=80'
};

const flagSources: Record<Language, string> = {
  en: 'https://flagcdn.com/w320/us.png',
  es: 'https://flagcdn.com/w320/es.png'
};

type WelcomeNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<WelcomeNavigationProp>();
  const { language, setLanguage } = useLanguage();
  const copy = uiCopy[language].welcome;

  const handleSelectLanguage = (value: Language) => {
    setLanguage(value);
    navigation.navigate('IngredientSelection');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.overlay} />
      <View style={styles.content}>
        <View style={styles.panel}>
          <Text style={styles.heading}>{copy.heading}</Text>
          <Text style={styles.subtitle}>{copy.subtitle}</Text>
          <View style={styles.languageRow}>
            {(['en', 'es'] as Language[]).map((code) => {
              const isActive = language === code;
              return (
                <Pressable
                  key={code}
                  onPress={() => handleSelectLanguage(code)}
                  style={({ pressed }) => [
                    styles.languageButton,
                    isActive && styles.languageButtonActive,
                    pressed && styles.languageButtonPressed
                  ]}
                >
                  <Image source={{ uri: flagSources[code] }} style={styles.flag} />
                  <Text style={styles.languageLabel}>
                    {code === 'en' ? copy.englishLabel : copy.spanishLabel}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.35)'
  },
  content: {
    width: '100%',
    paddingHorizontal: 24
  },
  panel: {
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    borderRadius: 24,
    paddingHorizontal: 28,
    paddingVertical: 48,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 8
  },
  heading: {
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    color: colors.primary,
    marginBottom: 12
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.text,
    marginBottom: 24
  },
  languageRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  languageButton: {
    width: 130,
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 2,
    borderColor: 'transparent',
    marginHorizontal: 8
  },
  languageButtonActive: {
    borderColor: colors.primary,
    backgroundColor: 'rgba(219, 58, 52, 0.12)'
  },
  languageButtonPressed: {
    opacity: 0.85
  },
  flag: {
    width: 56,
    height: 36,
    borderRadius: 6,
    marginBottom: 12
  },
  languageLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary
  }
});

export default WelcomeScreen;
