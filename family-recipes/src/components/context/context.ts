import { createContext, useContext } from "react";

export interface FamilyRecipesContextValue {
  currentUser: string | undefined | null;
}

export const FamilyRecipesContext = createContext<FamilyRecipesContextValue>({
  currentUser: "",
});

export const useFamilyRecipesContext = () => useContext(FamilyRecipesContext);
