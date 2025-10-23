import { recipes as defaultRecipes } from '../data/recipes';
import { Recipe, RecipeMatch } from '../types';

const OPTIONAL_WEIGHT = 0.1;

export const buildRecipeMatches = (
  selectedIds: string[],
  dataset: Recipe[] = defaultRecipes
): RecipeMatch[] => {
  if (selectedIds.length === 0) {
    return [];
  }

  const selectedSet = new Set(selectedIds);

  const matches = dataset
    .map<RecipeMatch>((recipe) => {
      const matchedIngredients = recipe.ingredients.filter((id) => selectedSet.has(id));
      const missingIngredients = recipe.ingredients.filter((id) => !selectedSet.has(id));
      const optionalMatches = (recipe.optionalIngredients ?? []).filter((id) => selectedSet.has(id));

      const coverage = matchedIngredients.length / recipe.ingredients.length;
      const optionalScore = optionalMatches.length * OPTIONAL_WEIGHT;
      const matchScore = Number((coverage + optionalScore).toFixed(2));

      return {
        recipe,
        matchedIngredients,
        missingIngredients,
        matchScore
      };
    })
    .filter((match) => match.matchedIngredients.length > 0)
    .sort((a, b) => {
      if (b.matchScore !== a.matchScore) {
        return b.matchScore - a.matchScore;
      }
      if (a.missingIngredients.length !== b.missingIngredients.length) {
        return a.missingIngredients.length - b.missingIngredients.length;
      }
      return a.recipe.timeMinutes - b.recipe.timeMinutes;
    });

  return matches;
};

export const getTopRecipeMatch = (
  selectedIds: string[],
  dataset: Recipe[] = defaultRecipes
): RecipeMatch | undefined => {
  const matches = buildRecipeMatches(selectedIds, dataset);
  return matches[0];
};
