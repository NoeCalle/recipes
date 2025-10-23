import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import colors from '../theme/colors';

const gradientColors = ['#F9D976', '#F39F86', '#EA5455'];

type WelcomeNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<WelcomeNavigationProp>();

  return (
    <LinearGradient colors={gradientColors} style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Sabores del Perú</Text>
        <Text style={styles.subtitle}>
          Descubre recetas criollas seleccionando tus ingredientes favoritos.
        </Text>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          onPress={() => navigation.navigate('IngredientSelection')}
        >
          <Text style={styles.buttonText}>Comenzar</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 24,
    paddingHorizontal: 32,
    paddingVertical: 48,
    marginHorizontal: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 8
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 16,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 32
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 16
  },
  buttonPressed: {
    opacity: 0.85
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
});

export default WelcomeScreen;
