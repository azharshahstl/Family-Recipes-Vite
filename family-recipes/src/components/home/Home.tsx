import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../config/firebase.ts";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FamilyRecipesContext } from "../context/context.ts";

const Home = () => {
  const [currentUser, setCurrentUser] = useState<string | undefined | null>(
    undefined,
  );

  const navigate = useNavigate();

  const handleSignInWithGmail = () => {
    signInWithPopup(auth, googleAuthProvider).then((result) => {
      const userEmail = result.user.email;
      if (userEmail !== "") {
        console.log("email", userEmail);
        setCurrentUser(userEmail);
        navigate("/recipes");
      } else {
        navigate("/*");
      }
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(() => {});
    return unsubscribe;
  }, []);

  return (
    <FamilyRecipesContext.Provider value={{ currentUser }}>
      <div className="italianno-sm flex h-lvh w-full flex-col items-center justify-center bg-[url(/paper.jpg)]">
        <div className="mb-14 text-center leading-none sm:mb-4 sm:text-9xl sm:leading-48">
          Family Recipes
        </div>
        <div className="flex flex-col">
          <Link
            onClick={handleSignInWithGmail}
            className="mb-1 text-2xl hover:animate-bounce sm:text-3xl"
            to={currentUser ? "/recipes" : "/*"}
          >
            - 1 heaping cup of
            <u className="decoration-1"> sign in with G-mail</u>
          </Link>
          <Link
            className="mb-1 text-2xl hover:animate-bounce sm:text-3xl"
            to="/sign-in-with-email"
          >
            - 2 tablespoons of finely ground
            <u className="decoration-1"> sign in with E-mail</u>
          </Link>
          <Link
            className="text-2xl hover:animate-bounce sm:text-3xl"
            to="/create-account"
          >
            - 3 handfuls of<u className="decoration-1"> create account</u>
          </Link>
        </div>
      </div>
    </FamilyRecipesContext.Provider>
  );
};

export default Home;
