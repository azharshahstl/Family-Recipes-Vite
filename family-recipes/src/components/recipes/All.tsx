import { DocumentData } from "firebase/firestore";
import Loader from "../loader/Loader.tsx";
import CardContainer from "./card-container/CardContainer.tsx";
import { useOutletContext } from "react-router-dom";
import { RecipesContext } from "../Layouts/RecipeLayout.tsx";

const All = () => {
  const { isLoading, recipes } = useOutletContext<RecipesContext>();

  const renderRecipes = () => {
    {
      if (isLoading) {
        return <Loader />;
      } else {
        return (
          <main className="flex flex-wrap items-center justify-center bg-gray-200 p-4">
            {recipes.map((recipe: DocumentData) => {
              return (
                <CardContainer
                  cookTime={recipe.cookTime}
                  directions={recipe.directions}
                  ingredients={recipe.ingredients}
                  key={recipe.id}
                  foodCategory={recipe.foodCategory}
                  prepTime={recipe.prepTime}
                  rating={recipe.difficultyRating}
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

export default All;
