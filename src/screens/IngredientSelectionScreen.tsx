import React, { useEffect, useMemo } from 'react';
import { Alert, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/native-stack';
import ingredients from '../data/ingredients';
import IngredientCard from '../components/IngredientCard';
import { useSelection } from '../context/SelectionContext';
import { getTopRecipeMatch } from '../utils/recipeMatcher';
import { RootStackParamList } from '../navigation';
import colors from '../theme/colors';
import { useLanguage } from '../context/LanguageContext';
import { uiCopy } from '../i18n/translations';
import { getRecipeName } from '../i18n/helpers';

const IngredientSelectionScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'IngredientSelection'>>();
  const { language } = useLanguage();
  const { selectedIngredients, toggleIngredient, resetSelection } = useSelection();
  const copy = uiCopy[language].ingredientSelection;
  const { headerTitle, title, selectedPrefix, selectedNone, clear, alerts, primaryAction } = copy;

  useEffect(() => {
    navigation.setOptions({ title: headerTitle });
  }, [navigation, headerTitle]);

  const selectedCount = selectedIngredients.length;
  const previewMatch = useMemo(() => getTopRecipeMatch(selectedIngredients), [selectedIngredients]);

  const handleGenerateRecipe = () => {
    if (selectedCount === 0) {
      Alert.alert(alerts.noneTitle, alerts.noneMessage);
      return;
    }

    const match = getTopRecipeMatch(selectedIngredients);
    if (!match) {
      Alert.alert(alerts.noMatchTitle, alerts.noMatchMessage);
      return;
    }

    navigation.navigate('RecipeResult', {
      recipeId: match.recipe.id,
      matchedIngredients: match.matchedIngredients,
      missingIngredients: match.missingIngredients
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            {selectedPrefix}: {selectedCount} ·{' '}
            {previewMatch ? getRecipeName(previewMatch.recipe, language) : selectedNone}
          </Text>
        </View>
        {selectedCount > 0 && (
          <Pressable onPress={resetSelection} style={styles.clearButton}>
            <Text style={styles.clearText}>{clear}</Text>
          </Pressable>
        )}
      </View>

      <FlatList
        data={ingredients}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <IngredientCard
            ingredient={item}
            selected={selectedIngredients.includes(item.id)}
            onPress={() => toggleIngredient(item.id)}
          />
        )}
      />

      <View style={styles.footer}>
        <Pressable
          style={({ pressed }) => [
            styles.generateButton,
            (pressed || selectedCount === 0) && styles.generateButtonPressed,
            selectedCount === 0 && styles.generateButtonDisabled
          ]}
          onPress={handleGenerateRecipe}
        >
          <Text style={styles.generateButtonText}>
            {selectedCount === 0 ? primaryAction.disabled : primaryAction.enabled}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.primary
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: colors.muted
  },
  clearButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(219, 58, 52, 0.1)'
  },
  clearText: {
    color: colors.primary,
    fontWeight: '600'
  },
  listContent: {
    paddingBottom: 120
  },
  footer: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 24
  },
  generateButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6
  },
  generateButtonPressed: {
    opacity: 0.85
  },
  generateButtonDisabled: {
    backgroundColor: colors.muted
  },
  generateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
});

export default IngredientSelectionScreen;
