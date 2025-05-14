import { useOutletContext, useParams } from "react-router-dom";
import CardContainer from "./card-container/CardContainer";
import { RecipesContext } from "../Layouts/RecipeLayout";
import { DocumentData } from "firebase/firestore";
import Loader from "../loader/Loader";

const Single = () => {
  const { id } = useParams();

  const { recipes, isLoading, currentUser } =
    useOutletContext<RecipesContext>();

  const renderedRecipe = () => {
    const recipe = recipes.filter((recipe: DocumentData) => recipe.id === id);
    return recipe;
  };

  const isCurrentUser = () => {
    const recipe = recipes.find((recipe: DocumentData) => recipe.id === id);

    if (recipe.uid === currentUser) {
      return true;
    } else {
      return false;
    }
  };

  const renderRecipe = () => {
    {
      if (isLoading) {
        return <Loader />;
      } else {
        return (
          <main className="h-dvh p-4">
            {renderedRecipe().map((recipe: DocumentData) => {
              return (
                <CardContainer
                  cookTime={recipe.cookTime}
                  directions={recipe.directions}
                  id={recipe.id}
                  ingredients={recipe.ingredients}
                  key={recipe.id}
                  foodCategory={recipe.foodCategory}
                  ownsRecipe={isCurrentUser()}
                  prepTime={recipe.prepTime}
                  rating={recipe.difficultyRating}
                  showFullInfo={true}
                  styles={"w-full"}
                  title={recipe.title}
                />
              );
            })}
          </main>
        );
      }
    }
  };

  return renderRecipe();
};

export default Single;
