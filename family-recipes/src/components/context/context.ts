import { createContext, SetStateAction, useContext, Dispatch } from "react";

export interface FamilyRecipesContextValue {
  currentUser: string | undefined | null;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const FamilyRecipesContext = createContext<FamilyRecipesContextValue>({
  currentUser: "",
  isLoading: false,
  setIsLoading: () => null,
});

export const useFamilyRecipesContext = () => useContext(FamilyRecipesContext);
