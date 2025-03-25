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
    <div className="relative top-50">
      <form className="flex justify-center align-middle" onSubmit={signUp}>
        <div className="mt-4 mr-4 ml-4 flex w-52 flex-col sm:mr-20 sm:ml-20">
          <h1 className="text-center">Sign up with email</h1>
          <br />
          <input
            className="rounded-b-xs border-1 border-amber-300 p-1"
            ref={emailRef}
            placeholder="email"
          />
          <br />
          <input
            className="rounded-b-xs border-1 border-amber-300 p-1"
            ref={passwordRef}
            type="password"
            placeholder="password"
          />
          <br />
          <button
            className="rounded-b-xs border-1 border-amber-300 bg-amber-100 hover:bg-amber-300"
            type="submit"
          >
            sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpWithEmail;
