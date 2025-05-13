import { DocumentData } from "firebase/firestore";
import Loader from "../../loader/Loader.tsx";
import CardContainer from "../card-container/CardContainer.tsx";
import { useOutletContext } from "react-router-dom";

import { RecipesContext } from "../../Layouts/RecipeLayout.tsx";
import { auth } from "../../../config/firebase.ts";

const Personal = () => {
  const { isLoading, recipes, searchParams, isSearching } =
    useOutletContext<RecipesContext>();

  const getPersonalRecipes = (recipes: DocumentData) =>
    recipes.filter(
      (recipe: DocumentData) => recipe.uid === auth.currentUser!.uid,
    );

  const renderedRecipes = () => {
    if (!isSearching) return getPersonalRecipes(recipes);
    else {
      const filteredRecipes = getPersonalRecipes(recipes).filter(
        (recipe: DocumentData) => {
          if (searchParams === "") return recipe;
          else {
            return recipe.title.toLowerCase().includes(searchParams);
          }
        },
      );
      return filteredRecipes;
    }
  };

  const renderRecipes = () => {
    {
      if (isLoading) {
        return <Loader />;
      } else {
        return (
          <main className="flex flex-wrap items-center justify-center bg-gray-200 p-4">
            {renderedRecipes().map((recipe: DocumentData) => {
              return (
                <CardContainer
                  cookTime={recipe.cookTime}
                  directions={recipe.directions}
                  id={recipe.id}
                  ingredients={recipe.ingredients}
                  key={recipe.id}
                  foodCategory={recipe.foodCategory}
                  ownsRecipe={true}
                  prepTime={recipe.prepTime}
                  rating={recipe.difficultyRating}
                  styles={"sm:hover:animate-pulse"}
                  title={recipe.title}
                />
              );
            })}
          </main>
        );
      }
    }
  };

  return renderRecipes();
};

export default Personal;
