import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../theme/colors';
import { Ingredient } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { getIngredientCategoryLabel, getIngredientName } from '../i18n/helpers';

interface IngredientCardProps {
  ingredient: Ingredient;
  selected: boolean;
  onPress: () => void;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ ingredient, selected, onPress }) => {
  const { language } = useLanguage();
  const name = getIngredientName(ingredient, language);
  const category = getIngredientCategoryLabel(ingredient.category, language);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        selected && styles.cardSelected,
        pressed && styles.cardPressed
      ]}
    >
      <View style={[styles.iconContainer, selected && styles.iconSelected]}>
        <MaterialCommunityIcons
          name={ingredient.icon as never}
          size={32}
          color={selected ? '#ffffff' : colors.primary}
        />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.category}>{category}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 140,
    maxWidth: 160,
    margin: 8,
    padding: 16,
    borderRadius: 16,
    backgroundColor: colors.card,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardSelected: {
    borderWidth: 2,
    borderColor: colors.primary
  },
  cardPressed: {
    opacity: 0.9
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FDECEA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12
  },
  iconSelected: {
    backgroundColor: colors.primary
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.text
  },
  category: {
    marginTop: 4,
    fontSize: 12,
    textTransform: 'capitalize',
    color: colors.muted
  }
});

export default IngredientCard;
