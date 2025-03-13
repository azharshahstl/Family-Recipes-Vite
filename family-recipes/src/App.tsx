import { useEffect, useState, useRef } from "react";
import DifficultyRatingScore from "./components/difficulty-rating/DiffcultyRatingScore";
import "./App.css";
import Auth from "./components/auth/Auth";
import { auth, db } from "./config/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

function App() {
  const [recipes, setRecipes] = useState([]);

  const titleRef = useRef(null);

  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState("");
  const [selectedDifficultyRating, setSelectedDifficultyRating] =
    useState(undefined);

  const [makeRecipePublic, setMakeRecipePublic] = useState(false);

  const recipesCollectionRef = collection(db, "recipes");

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const recipeData = await getDocs(recipesCollectionRef);
        const filteredRecipes = recipeData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setRecipes(filteredRecipes);
        console.log(filteredRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    getRecipes();
  }, []);

  const onSubmitRecipe = async () => {
    try {
      await addDoc(recipesCollectionRef, {
        title: titleRef.current?.value,
        difficultyRating: selectedDifficultyRating,
        makeRecipePublic: makeRecipePublic,
        directions: "Do x, y, z",
        ingredients: ["tomato", "onion"],
        userId: auth?.currentUser?.uid,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteRecipe = async (id) => {
    const recipeDoc = doc(db, "recipes", id);
    await deleteDoc(recipeDoc);
  };

  const updateRecipe = async (id) => {
    const recipeDoc = doc(db, "recipes", id);
    await updateDoc(recipeDoc, { title: "updated title" });
  };

  return (
    <div className="App">
      <Auth />

      <div>
        <label htmlFor="title">Title</label>
        <input type="text" placeholder="title" id="title" ref={titleRef} />

        <DifficultyRatingScore
          rating={selectedDifficultyRating}
          setRating={setSelectedDifficultyRating}
        />
      </div>
      <div>
        {recipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <h1>Title: </h1>
              <h2>{recipe.title}</h2>
              <h3>Ingredients:</h3>
              <p>{recipe.ingredients}</p>
              <h3>Difficulty Rating:</h3>
              <p>{recipe.difficultyRating}</p>
              <h3>Directions:</h3>
              <p>{recipe.directions}</p>
              <button onClick={() => deleteRecipe(recipe.id)}>
                Delete Recipe
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={onSubmitRecipe}>Submit Recipe</button>
    </div>
  );
}

export default App;
