import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './src/navigation';
import { SelectionProvider } from './src/context/SelectionContext';
import colors from './src/theme/colors';

const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    primary: colors.primary,
    text: colors.text,
    card: '#ffffff'
  }
};

export default function App(): JSX.Element {
  return (
    <SelectionProvider>
      <SafeAreaProvider>
        <NavigationContainer theme={navigationTheme}>
          <StatusBar style="dark" />
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </SelectionProvider>
  );
}
