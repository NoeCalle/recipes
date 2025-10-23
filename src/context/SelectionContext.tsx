import React, { createContext, useContext, useMemo, useState } from 'react';

interface SelectionContextValue {
  selectedIngredients: string[];
  toggleIngredient: (id: string) => void;
  resetSelection: () => void;
  isSelected: (id: string) => boolean;
}

const SelectionContext = createContext<SelectionContextValue | undefined>(undefined);

export const SelectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const toggleIngredient = (id: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resetSelection = () => setSelectedIngredients([]);

  const isSelected = (id: string) => selectedIngredients.includes(id);

  const value = useMemo(
    () => ({ selectedIngredients, toggleIngredient, resetSelection, isSelected }),
    [selectedIngredients]
  );

  return <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>;
};

export const useSelection = (): SelectionContextValue => {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error('useSelection debe ser utilizado dentro de un SelectionProvider');
  }
  return context;
};
