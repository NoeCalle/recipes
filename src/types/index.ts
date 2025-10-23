export type IngredientCategory =
  | 'tuberculos'
  | 'granos'
  | 'proteinas'
  | 'hierbas'
  | 'frutas'
  | 'vegetales'
  | 'otros';

export interface Ingredient {
  id: string;
  name: string;
  icon: string;
  category: IngredientCategory;
  description?: string;
}

export interface RecipeStep {
  order: number;
  text: string;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  region: string;
  difficulty: 'fácil' | 'media' | 'difícil';
  timeMinutes: number;
  ingredients: string[];
  optionalIngredients?: string[];
  steps: RecipeStep[];
  tips?: string[];
}

export interface RecipeMatch {
  recipe: Recipe;
  matchedIngredients: string[];
  missingIngredients: string[];
  matchScore: number;
}
