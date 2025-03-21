import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../config/firebase.ts";
import { useNavigate } from "react-router-dom";

const GoogleLogIn = ({ toggleModal }) => {
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      await navigate("/recipes");
      toggleModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      onClick={handleSignInWithGoogle}
      className="m-4 inline-flex text-sm text-gray-800 hover:animate-pulse hover:text-black dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
      aria-label="Sign in with g Mail"
    >
      Sign In with G-Mail
      <svg
        className="width-4 shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m15 18 6-6-6-6" />
      </svg>
    </button>
  );
};

export default GoogleLogIn;
