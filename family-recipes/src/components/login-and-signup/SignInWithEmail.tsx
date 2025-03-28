import { FormEvent, useRef } from "react";
import { auth } from "../../config/firebase.ts";
import { signInWithEmailAndPassword } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";

const SignInWithEmail = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const signIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = emailRef.current!.value;

    const password = passwordRef.current!.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      await navigate("/recipes");
    } catch (err) {
      console.log(err);
      navigate("/*");
    }
  };

  return (
    <div className="h-screen bg-gray-50">
      <div className="relative top-50">
        <form className="flex justify-center align-middle" onSubmit={signIn}>
          <div className="mt-4 mr-4 ml-4 flex w-52 flex-col sm:mr-20 sm:ml-20">
            <h1 className="text-center">Sign in with email</h1>
            <input
              aria-label="email"
              autoComplete="true"
              className="mt-3 mb-3 rounded-md border-1 border-amber-300 p-1 hover:bg-amber-100 focus-visible:bg-amber-100 focus-visible:outline-amber-500"
              placeholder="email"
              ref={emailRef}
              required
            />
            <input
              aria-label="password"
              autoComplete="true"
              className="mt-3 mb-3 rounded-md border-1 border-amber-300 p-1 hover:bg-amber-100 focus-visible:bg-amber-100 focus-visible:outline-amber-500"
              placeholder="password"
              ref={passwordRef}
              type="password"
              required
            />
            <button
              className="mt-3 mb-3 rounded-md border-1 border-amber-300 bg-amber-100 hover:animate-bounce hover:bg-amber-300 focus-visible:outline-amber-500"
              type="submit"
            >
              sign in
            </button>
            <Link
              className="text-center text-xs hover:underline"
              to="/reset-password"
            >
              forgot your password, no worries click here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInWithEmail;
