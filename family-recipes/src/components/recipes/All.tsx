import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useFamilyRecipesContext } from "../context/context.ts";
import Loader from "../loader/Loader.tsx";
import { db } from "../../config/firebase.ts";
import { useEffect, useState } from "react";
import CardContainer from "./card-container/CardContainer.tsx";

const All = () => {
  const { isLoading } = useFamilyRecipesContext();

  const [recipes, setRecipes] = useState<DocumentData>([]);

  const recipesCollectionRef = collection(db, "recipes");

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const recipeData = await getDocs(recipesCollectionRef);
        const allRecipes = recipeData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setRecipes(allRecipes);
        console.log(allRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    getRecipes();
  }, []);

  const renderRecipes = () => {
    {
      if (isLoading) <Loader />;
    }
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
  };

  return renderRecipes();
};

export default All;
