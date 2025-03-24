import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../config/firebase.ts";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleSignInWithGmail = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      await navigate("/recipes");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="italianno-sm flex h-lvh w-full flex-col items-center justify-center bg-[url(/paper.jpg)]">
      <div className="mb-14 text-center leading-none sm:mb-4 sm:text-9xl sm:leading-48">
        Family Recipes
      </div>
      <div className="flex flex-col">
        <Link
          onClick={handleSignInWithGmail}
          className="mb-1 text-2xl hover:animate-bounce sm:text-3xl"
          to="/recipes"
        >
          - 1 heaping cup of<u className="decoration-1"> sign in with G-mail</u>
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
          - 3 handfuls of<u className="decoration-1"> create log in</u>
        </Link>
      </div>
    </div>
  );
};

export default Home;
