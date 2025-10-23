import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import IngredientSelectionScreen from '../screens/IngredientSelectionScreen';
import RecipeResultScreen from '../screens/RecipeResultScreen';
import colors from '../theme/colors';

export type RootStackParamList = {
  Welcome: undefined;
  IngredientSelection: undefined;
  RecipeResult: {
    recipeId: string;
    matchedIngredients: string[];
    missingIngredients: string[];
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = (): JSX.Element => (
  <Stack.Navigator
    initialRouteName="Welcome"
    screenOptions={{
      headerStyle: { backgroundColor: colors.card },
      headerTintColor: colors.primary,
      headerTitleStyle: { fontWeight: 'bold' },
      contentStyle: { backgroundColor: colors.background }
    }}
  >
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="IngredientSelection"
      component={IngredientSelectionScreen}
    />
    <Stack.Screen
      name="RecipeResult"
      component={RecipeResultScreen}
    />
  </Stack.Navigator>
);

export default RootNavigator;
