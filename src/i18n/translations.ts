import { IngredientCategory, Recipe, RecipeStep } from '../types';

export type Language = 'es' | 'en';

interface WelcomeCopy {
  heading: string;
  subtitle: string;
  englishLabel: string;
  spanishLabel: string;
}

interface IngredientSelectionCopy {
  headerTitle: string;
  title: string;
  selectedPrefix: string;
  selectedNone: string;
  clear: string;
  alerts: {
    noneTitle: string;
    noneMessage: string;
    noMatchTitle: string;
    noMatchMessage: string;
  };
  primaryAction: {
    disabled: string;
    enabled: string;
  };
}

interface RecipeResultCopy {
  headerTitle: string;
  emptyTitle: string;
  emptySubtitle: string;
  goBack: string;
  sections: {
    matches: string;
    missing: string;
    optional: string;
    steps: string;
    tips: string;
  };
  helper: string;
  actions: {
    chooseOther: string;
    goHome: string;
  };
}

export interface UICopy {
  welcome: WelcomeCopy;
  ingredientSelection: IngredientSelectionCopy;
  recipeResult: RecipeResultCopy;
}

export const uiCopy: Record<Language, UICopy> = {
  es: {
    welcome: {
      heading: 'Comida Peruana / Peruvian Food',
      subtitle: 'Elige tu idioma para continuar',
      englishLabel: 'Inglés',
      spanishLabel: 'Español'
    },
    ingredientSelection: {
      headerTitle: 'Selecciona ingredientes',
      title: 'Elige tus ingredientes',
      selectedPrefix: 'Seleccionados',
      selectedNone: 'Añade más para ver sugerencias',
      clear: 'Limpiar',
      alerts: {
        noneTitle: 'Selecciona ingredientes',
        noneMessage: 'Elige al menos un ingrediente para continuar.',
        noMatchTitle: 'Sin coincidencias',
        noMatchMessage:
          'No encontramos una receta exacta. Intenta combinar ingredientes base como ají, cebolla o papa.'
      },
      primaryAction: {
        disabled: 'Selecciona ingredientes',
        enabled: 'Generar receta peruana'
      }
    },
    recipeResult: {
      headerTitle: 'Tu receta peruana',
      emptyTitle: 'No encontramos la receta',
      emptySubtitle: 'Intenta regresar y escoger otra combinación de ingredientes.',
      goBack: 'Volver',
      sections: {
        matches: 'Coincidencias',
        missing: 'Te hará falta',
        optional: 'Sugerencias opcionales',
        steps: 'Pasos',
        tips: 'Consejos'
      },
      helper: 'Selecciona más ingredientes base para afinar la receta.',
      actions: {
        chooseOther: 'Elegir otros ingredientes',
        goHome: 'Volver al inicio'
      }
    }
  },
  en: {
    welcome: {
      heading: 'Comida Peruana / Peruvian Food',
      subtitle: 'Choose your language to continue',
      englishLabel: 'English',
      spanishLabel: 'Spanish'
    },
    ingredientSelection: {
      headerTitle: 'Choose ingredients',
      title: 'Pick your ingredients',
      selectedPrefix: 'Selected',
      selectedNone: 'Add more to see suggestions',
      clear: 'Clear',
      alerts: {
        noneTitle: 'Choose ingredients',
        noneMessage: 'Pick at least one ingredient to continue.',
        noMatchTitle: 'No matches',
        noMatchMessage:
          'We couldn’t find an exact recipe. Try combining base ingredients like chili, onion, or potato.'
      },
      primaryAction: {
        disabled: 'Choose ingredients',
        enabled: 'Create Peruvian recipe'
      }
    },
    recipeResult: {
      headerTitle: 'Your Peruvian recipe',
      emptyTitle: 'Recipe not found',
      emptySubtitle: 'Go back and try a different combination of ingredients.',
      goBack: 'Go back',
      sections: {
        matches: 'Matches',
        missing: 'You will need',
        optional: 'Optional suggestions',
        steps: 'Steps',
        tips: 'Tips'
      },
      helper: 'Select more base ingredients to refine the recipe.',
      actions: {
        chooseOther: 'Choose other ingredients',
        goHome: 'Back to start'
      }
    }
  }
};

export const categoryLabels: Record<IngredientCategory, Record<Language, string>> = {
  tuberculos: { es: 'tubérculos', en: 'Tubers' },
  granos: { es: 'granos', en: 'Grains' },
  proteinas: { es: 'proteínas', en: 'Proteins' },
  hierbas: { es: 'hierbas', en: 'Herbs' },
  frutas: { es: 'frutas', en: 'Fruits' },
  vegetales: { es: 'vegetales', en: 'Vegetables' },
  otros: { es: 'otros', en: 'Others' }
};

export const difficultyLabels: Record<Recipe['difficulty'], Record<Language, string>> = {
  'fácil': { es: 'Fácil', en: 'Easy' },
  media: { es: 'Media', en: 'Medium' },
  'difícil': { es: 'Difícil', en: 'Hard' }
};

export const ingredientTranslations: Record<
  string,
  { en: { name: string; description?: string } }
> = {
  'arroz-blanco': {
    en: {
      name: 'White rice',
      description: 'Base for many creole dishes and stews.'
    }
  },
  'cebolla-roja': {
    en: {
      name: 'Red onion',
      description: 'Essential for Peruvian dressings and sauces.'
    }
  },
  ajo: {
    en: {
      name: 'Garlic',
      description: 'Adds intense aroma to sautés and stews.'
    }
  },
  'papa-amarilla': {
    en: {
      name: 'Yellow potato',
      description: 'Creamy tuber, perfect for causas and purées.'
    }
  },
  camote: {
    en: {
      name: 'Sweet potato',
      description: 'Sweet and soft, a classic ceviche side.'
    }
  },
  choclo: {
    en: {
      name: 'Andean corn',
      description: 'Giant corn that adds texture and sweetness.'
    }
  },
  'aji-amarillo': {
    en: {
      name: 'Amarillo chili',
      description: 'Medium heat and vibrant color for many recipes.'
    }
  },
  'aji-panca': {
    en: {
      name: 'Panca chili',
      description: 'Smoky dried chili pepper with mild heat.'
    }
  },
  'limon-sutil': {
    en: {
      name: 'Key lime',
      description: 'Aromatic and acidic, essential for ceviche.'
    }
  },
  tomate: {
    en: {
      name: 'Tomato',
      description: 'Adds freshness and color to stews and salads.'
    }
  },
  pollo: {
    en: {
      name: 'Chicken',
      description: 'Versatile protein for chilies and stir-fries.'
    }
  },
  'pescado-blanco': {
    en: {
      name: 'White fish fillet',
      description: 'Fresh fillets for ceviches and stews.'
    }
  },
  'carne-res': {
    en: {
      name: 'Beef',
      description: 'Tender cuts for stir-fries and stews.'
    }
  },
  quinoa: {
    en: {
      name: 'Quinoa',
      description: 'Andean grain rich in plant protein.'
    }
  },
  cilantro: {
    en: {
      name: 'Culantro',
      description: 'Aromatic herb essential for rice dishes and soups.'
    }
  },
  huacatay: {
    en: {
      name: 'Huacatay',
      description: 'Andean herb with intense aroma, ideal for ocopa.'
    }
  },
  mani: {
    en: {
      name: 'Peanuts',
      description: 'Base for sauces such as ocopa or carapulcra.'
    }
  },
  'leche-evaporada': {
    en: {
      name: 'Evaporated milk',
      description: 'Adds creaminess to chowders and sauces.'
    }
  },
  'queso-fresco': {
    en: {
      name: 'Fresh cheese',
      description: 'Soft texture for causas, salads, and ocopa.'
    }
  },
  palta: {
    en: {
      name: 'Avocado',
      description: 'Creamy fruit, perfect with causas and salads.'
    }
  }
};

export const ingredientFallbacks: Record<string, Record<Language, string>> = {
  zanahoria: { es: 'Zanahoria', en: 'Carrot' },
  arvejas: { es: 'Arvejas', en: 'Peas' },
  'huevo-duro': { es: 'Huevo duro', en: 'Hard-boiled egg' },
  nueces: { es: 'Nueces', en: 'Walnuts' },
  aceituna: { es: 'Aceituna', en: 'Olive' }
};

export const regionLabels: Record<string, Record<Language, string>> = {
  Costa: { es: 'Costa', en: 'Coast' },
  Lima: { es: 'Lima', en: 'Lima' },
  Sierra: { es: 'Sierra', en: 'Highlands' },
  Arequipa: { es: 'Arequipa', en: 'Arequipa' }
};

export const recipeTranslations: Record<
  string,
  {
    en: {
      name: string;
      description: string;
      region?: string;
      steps: string[];
      tips?: string[];
    };
  }
> = {
  'ceviche-clasico': {
    en: {
      name: 'Classic ceviche',
      description: 'Fresh fish marinated in lime juice with chili and cilantro.',
      region: 'Coast',
      steps: [
        'Cut the fish into 1 cm cubes and place it in a chilled bowl.',
        'Add salt, pepper, and chopped amarillo chili. Toss gently.',
        'Squeeze key lime over the fish and let it rest for 5 minutes.',
        'Stir in sliced onion and chopped cilantro. Adjust seasoning.',
        'Serve immediately with boiled sweet potato and corn.'
      ],
      tips: ['Keep the fish cold at all times for a firm texture.']
    }
  },
  'lomo-saltado': {
    en: {
      name: 'Lomo saltado',
      description: 'Stir-fried beef with vegetables, fries, and an oriental touch.',
      region: 'Coast',
      steps: [
        'Sear the beef strips in a very hot pan with a little oil.',
        'Add the onion wedges, tomato, and amarillo chili.',
        'Flambé with a splash of soy sauce or vinegar and toss quickly.',
        'Fold in the fried potatoes and stir-fry for a few seconds.',
        'Serve with fluffy white rice.'
      ],
      tips: ['Cook in batches to keep high heat and achieve the stir-fry.']
    }
  },
  'aji-de-gallina': {
    en: {
      name: 'Ají de gallina',
      description: 'Creamy stew of shredded chicken with amarillo chili and soaked bread.',
      region: 'Lima',
      steps: [
        'Boil the chicken breast and reserve the broth.',
        'Sauté onion, garlic, and blended amarillo chili until golden.',
        'Add bread soaked in broth and stir until creamy.',
        'Stir in the shredded chicken, milk, and fresh cheese. Season.',
        'Serve over boiled potatoes with white rice.'
      ],
      tips: ['Blend the chili with a little broth for a smooth texture.']
    }
  },
  'causa-limena': {
    en: {
      name: 'Chicken causa limeña',
      description: 'Layers of seasoned yellow potato purée with creamy chicken filling.',
      region: 'Lima',
      steps: [
        'Mash the warm yellow potato and mix with chili, oil, and lime.',
        'Prepare a filling with shredded chicken and light mayonnaise.',
        'Layer potato and filling alternately in a mold.',
        'Finish with sliced avocado and garnish to taste.'
      ],
      tips: ['Work the potato while still warm to achieve a smooth dough.']
    }
  },
  'quinotto-vegetariano': {
    en: {
      name: 'Vegetable quinotto',
      description: 'Creamy quinoa risotto with sautéed vegetables.',
      region: 'Highlands',
      steps: [
        'Rinse the quinoa and sauté with garlic and onion.',
        'Add hot broth gradually, stirring constantly.',
        'Stir in chopped tomatoes and cook until the quinoa is creamy.',
        'Finish with crumbled fresh cheese and cilantro.'
      ],
      tips: ['Use vegetable broth to enhance the flavor.']
    }
  },
  'ocopa-arequipena': {
    en: {
      name: 'Arequipeña ocopa',
      description: 'Creamy huacatay and peanut sauce served over boiled potatoes.',
      region: 'Arequipa',
      steps: [
        'Lightly toast the peanuts and blend with evaporated milk.',
        'Add amarillo chili, huacatay, and fresh cheese until creamy.',
        'Serve over slices of boiled yellow potato.'
      ],
      tips: ['Add soda crackers to thicken if needed.']
    }
  }
};

export const buildStepTranslation = (
  recipe: Recipe,
  language: Language
): RecipeStep[] => {
  if (language === 'en') {
    const translation = recipeTranslations[recipe.id]?.en;
    if (translation?.steps) {
      return translation.steps.map((text, index) => ({
        order: recipe.steps[index]?.order ?? index + 1,
        text
      }));
    }
  }
  return recipe.steps;
};

export const buildTipTranslation = (recipe: Recipe, language: Language): string[] => {
  if (language === 'en') {
    const translation = recipeTranslations[recipe.id]?.en;
    if (translation?.tips) {
      return translation.tips;
    }
  }
  return recipe.tips ?? [];
};
