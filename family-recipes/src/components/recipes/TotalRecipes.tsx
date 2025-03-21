import { auth, googleAuthProvider } from "../../config/firebase.ts";
import { signOut } from "firebase/auth";

const TotalRecipes = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Recipes Page</h1>
      <br />
      <button onClick={handleSignOut}>Sign out</button>
    </>
  );
};

export default TotalRecipes;
