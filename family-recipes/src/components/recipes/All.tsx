import { collection, getDocs } from "firebase/firestore";
import { useFamilyRecipesContext } from "../context/context.ts";
import Loader from "../loader/Loader.tsx";
import { db } from "../../config/firebase.ts";
import { useEffect, useState } from "react";
import Card from "./card/Card.tsx";

const All = () => {
  const { isLoading } = useFamilyRecipesContext();

  const [recipes, setRecipes] = useState<{ id: string }[]>([]);

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
        {recipes.map((recipe) => {
          return <Card title={recipe.title} directions={recipe.directions} />;
        })}
      </main>
    );
  };

  return renderRecipes();
};

export default All;
