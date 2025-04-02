import { collection, DocumentData, getDocs } from "firebase/firestore";
import Loader from "../loader/Loader.tsx";
import { db } from "../../config/firebase.ts";
import { useEffect, useState } from "react";
import CardContainer from "./card-container/CardContainer.tsx";

const All = () => {
  const [recipes, setRecipes] = useState<DocumentData>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const recipesCollectionRef = collection(db, "recipes");

  useEffect(() => {
    setIsLoading(true);
    const getRecipes = async () => {
      try {
        const recipeData = await getDocs(recipesCollectionRef);
        const allRecipes = recipeData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setRecipes(allRecipes);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getRecipes();
  }, []);

  const renderRecipes = () => {
    {
      if (isLoading) {
        return <Loader />;
      } else {
        return (
          <main className="flex flex-col items-center justify-center bg-gray-200">
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
