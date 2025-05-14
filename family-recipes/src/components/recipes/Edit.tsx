import { useOutletContext, useParams } from "react-router-dom";
import { RecipesContext } from "../Layouts/RecipeLayout";
import { DocumentData } from "firebase/firestore";
import Loader from "../loader/Loader";
import { ChangeEvent, useRef, useState } from "react";

const Edit = () => {
  const { id } = useParams();

  const ingredientRef = useRef<HTMLInputElement>(null);

  const { recipes, isLoading, currentUser } =
    useOutletContext<RecipesContext>();

  const renderedRecipe = () => {
    const recipe = recipes.find((recipe: DocumentData) => recipe.id === id);
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

  const [title, setTitle] = useState(renderedRecipe().title);
  const [ingredients, setIngredients] = useState(renderedRecipe().ingredients);

  console.log("ingredients", renderedRecipe().ingredients);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAddIngredient = () => {
    const newIngredient = ingredientRef.current!.value.trim();
    if (newIngredient) {
      setIngredients([...ingredients, newIngredient]);
      ingredientRef.current!.value = ""; // Clear input field
    }
  };

  const handleDeleteIngredient = (index: number) => {
    const updatedIngredients = ingredients.filter(
      (_, i: number) => i !== index,
    );
    setIngredients(updatedIngredients);
  };

  const renderRecipe = () => {
    const currentUser = isCurrentUser();

    {
      if (isLoading) {
        return <Loader />;
      } else if (currentUser) {
        return (
          <main className="h-dvh p-4">
            <form>
              <label htmlFor="title">title:</label>
              <input
                className="ml-4"
                id="title"
                defaultValue={title}
                onChange={handleTitleChange}
              />
              <fieldset>
                <legend>ingredients:</legend>
                <div className="flex flex-col">
                  <div>
                    <input
                      type="text"
                      ref={ingredientRef}
                      placeholder="Enter ingredient"
                    />
                    <button onClick={handleAddIngredient}>
                      Add Ingredient
                    </button>
                  </div>
                  <ul>
                    {ingredients.map((ingredient: string, index: number) => {
                      return (
                        <li key={index}>
                          {ingredient}
                          <button onClick={() => handleDeleteIngredient(index)}>
                            delete
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </fieldset>
            </form>
          </main>
        );
      } else {
        return <h1>You are not allowed to edit this recipe</h1>;
      }
    }
  };

  return renderRecipe();
};

export default Edit;
