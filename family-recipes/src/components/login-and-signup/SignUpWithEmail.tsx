import { FormEvent, useRef } from "react";
import { auth } from "../../config/firebase.ts";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const SignUpWithEmail = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const signUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = emailRef.current!.value;

    const password = passwordRef.current!.value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await navigate("/recipes");
    } catch (err) {
      console.log(err);
      navigate("/*");
    }
  };

  return (
    <div className="h-screen bg-gray-50">
      <div className="relative top-50">
        <form className="flex justify-center align-middle" onSubmit={signUp}>
          <div className="mt-4 mr-4 ml-4 flex w-52 flex-col sm:mr-20 sm:ml-20">
            <h1 className="text-center">Sign up with email</h1>
            <br />
            <input
              aria-label="email"
              autoComplete="true"
              className="rounded-b-xs border-1 border-amber-300 p-1 hover:bg-amber-100 focus-visible:bg-amber-100 focus-visible:outline-amber-500"
              placeholder="email"
              ref={emailRef}
              required
            />
            <br />
            <input
              aria-label="password"
              autoComplete="true"
              className="rounded-b-xs border-1 border-amber-300 p-1 hover:bg-amber-100 focus-visible:bg-amber-100 focus-visible:outline-amber-500"
              placeholder="password"
              ref={passwordRef}
              type="password"
              required
            />
            <br />
            <button
              className="rounded-b-xs border-1 border-amber-300 bg-amber-100 hover:animate-bounce hover:bg-amber-300 focus-visible:outline-amber-500"
              type="submit"
            >
              create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpWithEmail;
