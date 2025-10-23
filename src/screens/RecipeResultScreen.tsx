import React, { useEffect, useMemo } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../theme/colors';
import { RootStackParamList } from '../navigation';
import { StackNavigationProp } from '@react-navigation/native-stack';
import { recipes } from '../data/recipes';
import ingredients from '../data/ingredients';
import { useLanguage } from '../context/LanguageContext';
import { uiCopy } from '../i18n/translations';
import {
  getIngredientNameById,
  getRecipeDescription,
  getRecipeDifficulty,
  getRecipeName,
  getRecipeRegion,
  getRecipeSteps,
  getRecipeTips
} from '../i18n/helpers';

type RecipeResultRouteProp = RouteProp<RootStackParamList, 'RecipeResult'>;
type RecipeResultNavigationProp = StackNavigationProp<RootStackParamList, 'RecipeResult'>;

const RecipeResultScreen: React.FC = () => {
  const navigation = useNavigation<RecipeResultNavigationProp>();
  const route = useRoute<RecipeResultRouteProp>();
  const { language } = useLanguage();
  const copy = uiCopy[language].recipeResult;

  useEffect(() => {
    navigation.setOptions({ title: copy.headerTitle });
  }, [navigation, copy.headerTitle]);

  const { recipeId, matchedIngredients, missingIngredients } = route.params;

  const recipe = recipes.find((item) => item.id === recipeId);

  const ingredientMap = useMemo(() => new Map(ingredients.map((item) => [item.id, item])), []);

  if (!recipe) {
    return (
      <View style={styles.emptyState}>
        <Text style={styles.emptyTitle}>{copy.emptyTitle}</Text>
        <Text style={styles.emptySubtitle}>{copy.emptySubtitle}</Text>
        <Pressable style={styles.primaryButton} onPress={() => navigation.goBack()}>
          <Text style={styles.primaryButtonText}>{copy.goBack}</Text>
        </Pressable>
      </View>
    );
  }

  const recipeName = getRecipeName(recipe, language);
  const recipeDescription = getRecipeDescription(recipe, language);
  const regionLabel = getRecipeRegion(recipe, language);
  const difficultyLabel = getRecipeDifficulty(recipe, language);
  const steps = getRecipeSteps(recipe, language);
  const tips = getRecipeTips(recipe, language);

  const resolvedMatched = matchedIngredients.map((id) =>
    getIngredientNameById(id, language, ingredientMap)
  );
  const resolvedMissing = missingIngredients.map((id) =>
    getIngredientNameById(id, language, ingredientMap)
  );
  const optionalIngredients = (recipe.optionalIngredients ?? []).map((id) =>
    getIngredientNameById(id, language, ingredientMap)
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.badge}>
          <MaterialCommunityIcons name="map-marker" size={16} color={colors.primary} />
          <Text style={styles.badgeText}>{regionLabel}</Text>
        </View>
        <Text style={styles.title}>{recipeName}</Text>
        <Text style={styles.description}>{recipeDescription}</Text>
        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <MaterialCommunityIcons name="clock-outline" size={18} color={colors.secondary} />
            <Text style={styles.metaText}>{recipe.timeMinutes} min</Text>
          </View>
          <View style={styles.metaItem}>
            <MaterialCommunityIcons name="chef-hat" size={18} color={colors.secondary} />
            <Text style={styles.metaText}>{difficultyLabel}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{copy.sections.matches}</Text>
        <View style={styles.chipContainer}>
          {resolvedMatched.map((name) => (
            <View key={name} style={[styles.chip, styles.chipSuccess]}>
              <MaterialCommunityIcons name="check" size={14} color="#fff" />
              <Text style={styles.chipText}>{name}</Text>
            </View>
          ))}
          {resolvedMatched.length === 0 && <Text style={styles.helperText}>{copy.helper}</Text>}
        </View>
      </View>

      {resolvedMissing.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{copy.sections.missing}</Text>
          <View style={styles.chipContainer}>
            {resolvedMissing.map((name) => (
              <View key={name} style={[styles.chip, styles.chipWarning]}>
                <MaterialCommunityIcons name="alert" size={14} color="#fff" />
                <Text style={styles.chipText}>{name}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {optionalIngredients.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{copy.sections.optional}</Text>
          <View style={styles.chipContainer}>
            {optionalIngredients.map((name) => (
              <View key={name} style={[styles.chip, styles.chipOptional]}>
                <MaterialCommunityIcons name="plus" size={14} color={colors.primary} />
                <Text style={[styles.chipText, styles.optionalText]}>{name}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{copy.sections.steps}</Text>
        {steps.map((step) => (
          <View key={step.order} style={styles.stepRow}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{step.order}</Text>
            </View>
            <Text style={styles.stepText}>{step.text}</Text>
          </View>
        ))}
      </View>

      {tips.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{copy.sections.tips}</Text>
          {tips.map((tip, index) => (
            <Text key={index} style={styles.tipText}>
              • {tip}
            </Text>
          ))}
        </View>
      )}

      <View style={styles.actions}>
        <Pressable style={styles.secondaryButton} onPress={() => navigation.goBack()}>
          <Text style={styles.secondaryButtonText}>{copy.actions.chooseOther}</Text>
        </Pressable>
        <Pressable style={styles.primaryButton} onPress={() => navigation.popToTop()}>
          <Text style={styles.primaryButtonText}>{copy.actions.goHome}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
    backgroundColor: colors.background
  },
  header: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
    marginBottom: 20
  },
  badge: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(219, 58, 52, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginBottom: 12
  },
  badgeText: {
    marginLeft: 6,
    color: colors.primary,
    fontWeight: '600'
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8
  },
  description: {
    fontSize: 15,
    color: colors.muted,
    marginBottom: 16
  },
  metaRow: {
    flexDirection: 'row'
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16
  },
  metaText: {
    color: colors.secondary,
    fontWeight: '600',
    marginLeft: 6
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8
  },
  chipSuccess: {
    backgroundColor: colors.success
  },
  chipWarning: {
    backgroundColor: colors.danger
  },
  chipOptional: {
    backgroundColor: 'rgba(219, 58, 52, 0.1)'
  },
  chipText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 6
  },
  optionalText: {
    color: colors.primary
  },
  helperText: {
    color: colors.muted
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  stepNumberText: {
    color: '#fff',
    fontWeight: '700'
  },
  stepText: {
    flex: 1,
    color: colors.text,
    fontSize: 15
  },
  tipText: {
    fontSize: 14,
    color: colors.muted,
    marginBottom: 6
  },
  actions: {
    flexDirection: 'column'
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center'
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 12
  },
  secondaryButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600'
  },
  emptyState: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 12
  },
  emptySubtitle: {
    fontSize: 16,
    color: colors.muted,
    textAlign: 'center',
    marginBottom: 24
  }
});

export default RecipeResultScreen;
