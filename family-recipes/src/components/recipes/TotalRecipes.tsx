import { auth } from "../../config/firebase.ts";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import NotFound from "../not-found/NotFound.tsx";

const TotalRecipes = () => {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      await navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const renderRecipes = () => {
    if (auth.currentUser !== null) {
      return (
        <>
          <h1>Recipes Page</h1>
          <br />
          <button onClick={handleSignOut}>Sign out</button>
        </>
      );
    } else return <NotFound />;
  };

  return renderRecipes();
};

export default TotalRecipes;
