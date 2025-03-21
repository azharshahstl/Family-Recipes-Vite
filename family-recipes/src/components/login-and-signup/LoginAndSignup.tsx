import { Link } from "react-router-dom";
import { auth, googleAuthProvider } from "../../config/firebase.ts";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import GoogleLogIn from "../buttons/GoogleLogIn.tsx";
interface LoginAndSignupProps {
  ref?: React.Ref<HTMLDialogElement>;
  toggleModal: () => void;
}

const LoginAndSignup = (props: LoginAndSignupProps) => {
  const { ref, toggleModal } = props;

  // const handleSignInWithGoogle = async () => {
  //   try {
  //     await signInWithPopup(auth, googleAuthProvider);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <dialog
      className="open:animate-fade-in-scale open:backdrop:animate-fade-in-scale bg-transparent backdrop:backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) toggleModal();
      }}
      ref={ref}
    >
      <div className="flex flex-col p-3">
        <div className="m-6 self-center rounded-md bg-yellow-200">
          <GoogleLogIn toggleModal={toggleModal} />
        </div>
        <div className="m-6 self-center rounded-md bg-yellow-200">
          <Link
            to="sign-in-with-google"
            className="m-4 inline-flex self-center text-sm text-gray-800 hover:animate-pulse hover:text-black dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
            onClick={toggleModal}
            aria-label="Sign in with e mail"
          >
            Sign In with E-Mail
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
          </Link>
        </div>
        <div className="m-6 self-center rounded-md bg-yellow-200">
          <Link
            to="sign-in-with-google"
            className="m-4 inline-flex self-center text-sm text-gray-800 hover:animate-pulse hover:text-black focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
            onClick={toggleModal}
            aria-label="Create email account"
          >
            Create E-Mail Account
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
          </Link>
        </div>
      </div>
    </dialog>
  );
};

export default LoginAndSignup;
