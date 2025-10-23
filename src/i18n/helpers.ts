import { Ingredient, Recipe, RecipeStep } from '../types';
import {
  Language,
  ingredientTranslations,
  ingredientFallbacks,
  categoryLabels,
  difficultyLabels,
  recipeTranslations,
  regionLabels,
  buildStepTranslation,
  buildTipTranslation
} from './translations';

export const getIngredientName = (ingredient: Ingredient, language: Language): string => {
  if (language === 'en') {
    const translation = ingredientTranslations[ingredient.id]?.en?.name;
    if (translation) {
      return translation;
    }
  }
  return ingredient.name;
};

export const getIngredientDescription = (
  ingredient: Ingredient,
  language: Language
): string | undefined => {
  if (language === 'en') {
    const translation = ingredientTranslations[ingredient.id]?.en?.description;
    if (translation) {
      return translation;
    }
  }
  return ingredient.description;
};

export const getIngredientCategoryLabel = (
  category: Ingredient['category'],
  language: Language
): string => {
  const mapping = categoryLabels[category];
  if (!mapping) {
    return category;
  }
  return mapping[language];
};

export const getIngredientNameById = (
  id: string,
  language: Language,
  ingredientMap: Map<string, Ingredient>
): string => {
  const ingredient = ingredientMap.get(id);
  if (ingredient) {
    return getIngredientName(ingredient, language);
  }

  const fallback = ingredientFallbacks[id];
  if (fallback) {
    return fallback[language];
  }

  const normalized = id
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return normalized;
};

export const getRecipeName = (recipe: Recipe, language: Language): string => {
  if (language === 'en') {
    const translation = recipeTranslations[recipe.id]?.en?.name;
    if (translation) {
      return translation;
    }
  }
  return recipe.name;
};

export const getRecipeDescription = (recipe: Recipe, language: Language): string => {
  if (language === 'en') {
    const translation = recipeTranslations[recipe.id]?.en?.description;
    if (translation) {
      return translation;
    }
  }
  return recipe.description;
};

export const getRecipeRegion = (recipe: Recipe, language: Language): string => {
  if (language === 'en') {
    const translation = recipeTranslations[recipe.id]?.en?.region;
    if (translation) {
      return translation;
    }
  }

  const region = regionLabels[recipe.region];
  if (region) {
    return region[language];
  }
  return recipe.region;
};

export const getRecipeDifficulty = (recipe: Recipe, language: Language): string => {
  const mapping = difficultyLabels[recipe.difficulty];
  if (mapping) {
    return mapping[language];
  }
  return recipe.difficulty;
};

export const getRecipeSteps = (recipe: Recipe, language: Language): RecipeStep[] =>
  buildStepTranslation(recipe, language);

export const getRecipeTips = (recipe: Recipe, language: Language): string[] =>
  buildTipTranslation(recipe, language);
