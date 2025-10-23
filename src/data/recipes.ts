import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: 'ceviche-clasico',
    name: 'Ceviche clásico',
    description: 'Pescado fresco marinado en jugo de limón con ají y culantro.',
    region: 'Costa',
    difficulty: 'media',
    timeMinutes: 25,
    ingredients: ['pescado-blanco', 'limon-sutil', 'cebolla-roja', 'aji-amarillo', 'cilantro'],
    optionalIngredients: ['camote', 'choclo'],
    steps: [
      { order: 1, text: 'Corta el pescado en cubos de 1 cm y colócalo en un bol frío.' },
      { order: 2, text: 'Añade sal, pimienta y ají amarillo picado. Mezcla suavemente.' },
      { order: 3, text: 'Exprime el limón sutil sobre el pescado y deja reposar por 5 minutos.' },
      { order: 4, text: 'Agrega la cebolla en pluma y el culantro picado. Rectifica sazón.' },
      { order: 5, text: 'Sirve de inmediato con camote y choclo sancochados.' }
    ],
    tips: ['Mantén el pescado siempre frío para una textura firme.']
  },
  {
    id: 'lomo-saltado',
    name: 'Lomo saltado',
    description: 'Salteado de res con vegetales, papas y toque oriental.',
    region: 'Costa',
    difficulty: 'media',
    timeMinutes: 35,
    ingredients: ['carne-res', 'cebolla-roja', 'tomate', 'papa-amarilla', 'arroz-blanco'],
    optionalIngredients: ['aji-amarillo', 'cilantro'],
    steps: [
      { order: 1, text: 'Sella la carne en tiras en una sartén muy caliente con poco aceite.' },
      { order: 2, text: 'Añade la cebolla y tomate en gajos junto con el ají amarillo.' },
      { order: 3, text: 'Flambea con un chorrito de sillao o vinagre y mezcla rápidamente.' },
      { order: 4, text: 'Incorpora las papas fritas y saltea unos segundos.' },
      { order: 5, text: 'Sirve acompañado de arroz blanco graneado.' }
    ],
    tips: ['Trabaja en tandas para mantener el fuego alto y lograr el salteado.']
  },
  {
    id: 'aji-de-gallina',
    name: 'Ají de gallina',
    description: 'Guiso cremoso de pollo deshilachado con ají amarillo y pan remojado.',
    region: 'Lima',
    difficulty: 'media',
    timeMinutes: 45,
    ingredients: ['pollo', 'aji-amarillo', 'cebolla-roja', 'ajo', 'leche-evaporada'],
    optionalIngredients: ['queso-fresco', 'nueces', 'arroz-blanco', 'papa-amarilla'],
    steps: [
      { order: 1, text: 'Hierve la pechuga de pollo y reserva el caldo.' },
      { order: 2, text: 'Sofríe cebolla, ajo y ají amarillo licuado hasta dorar.' },
      { order: 3, text: 'Agrega pan remojado en caldo y mezcla hasta formar crema.' },
      { order: 4, text: 'Añade el pollo deshilachado, leche y queso fresco. Sazona.' },
      { order: 5, text: 'Sirve sobre papas sancochadas con arroz blanco.' }
    ],
    tips: ['Licúa el ají con un poco de caldo para una textura suave.']
  },
  {
    id: 'causa-limena',
    name: 'Causa limeña de pollo',
    description: 'Capas de puré de papa amarilla aliñada con relleno cremoso de pollo.',
    region: 'Lima',
    difficulty: 'fácil',
    timeMinutes: 40,
    ingredients: ['papa-amarilla', 'aji-amarillo', 'pollo', 'limon-sutil', 'palta'],
    optionalIngredients: ['zanahoria', 'arvejas', 'huevo-duro'],
    steps: [
      { order: 1, text: 'Prensa la papa amarilla caliente y mezcla con ají, aceite y limón.' },
      { order: 2, text: 'Prepara un relleno con pollo deshilachado y mayonesa ligera.' },
      { order: 3, text: 'Monta capas de papa y relleno alternadas en un molde.' },
      { order: 4, text: 'Termina con palta en láminas y decora al gusto.' }
    ],
    tips: ['Trabaja la papa aún tibia para lograr una masa suave.']
  },
  {
    id: 'quinotto-vegetariano',
    name: 'Quinotto de vegetales',
    description: 'Quinua cremosa estilo risotto con verduras salteadas.',
    region: 'Sierra',
    difficulty: 'media',
    timeMinutes: 35,
    ingredients: ['quinoa', 'ajo', 'cebolla-roja', 'tomate', 'queso-fresco'],
    optionalIngredients: ['cilantro', 'palta'],
    steps: [
      { order: 1, text: 'Enjuaga la quinua y sofríe con ajo y cebolla.' },
      { order: 2, text: 'Añade caldo caliente poco a poco, removiendo constantemente.' },
      { order: 3, text: 'Incorpora tomates picados y cocina hasta que la quinua esté cremosa.' },
      { order: 4, text: 'Finaliza con queso fresco desmenuzado y culantro.' }
    ],
    tips: ['Utiliza caldo de verduras para potenciar el sabor.']
  },
  {
    id: 'ocopa-arequipena',
    name: 'Ocopa arequipeña',
    description: 'Salsa cremosa de huacatay y maní servida sobre papas sancochadas.',
    region: 'Arequipa',
    difficulty: 'media',
    timeMinutes: 30,
    ingredients: ['huacatay', 'mani', 'queso-fresco', 'aji-amarillo', 'leche-evaporada'],
    optionalIngredients: ['huevo-duro', 'aceituna', 'papa-amarilla'],
    steps: [
      { order: 1, text: 'Tuesta ligeramente el maní y licúa con leche evaporada.' },
      { order: 2, text: 'Añade ají amarillo, huacatay y queso fresco hasta lograr crema.' },
      { order: 3, text: 'Sirve sobre rodajas de papa amarilla sancochada.' }
    ],
    tips: ['Agrega galletas de soda para espesar si es necesario.']
  }
];

export default recipes;
