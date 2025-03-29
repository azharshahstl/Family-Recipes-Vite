import { createContext, useContext } from "react";

export interface FamilyRecipesContextValue {
  currentUser: string | undefined | null;
  isLoading: boolean;
}

export const FamilyRecipesContext = createContext<FamilyRecipesContextValue>({
  currentUser: "",
  isLoading: false,
});

export const useFamilyRecipesContext = () => useContext(FamilyRecipesContext);
