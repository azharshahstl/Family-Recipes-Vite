import { FormEvent, useRef, useState } from "react";
import { auth } from "../../config/firebase.ts";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const SignUpWithEmail = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const signUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = emailRef.current!.value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await navigate("/recipes");
    } catch (err) {
      console.log(err);
      navigate("/*");
    }
  };

  const handleUpdatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRenderHelperText = () => {
    if (password.length < 6)
      return (
        <div className="mb-3 text-[12px] text-red-700">
          password must be at least 6 characters long
        </div>
      );
    else {
      return (
        <div className="mb-3 text-[12px] text-green-700">
          minimum password length met
        </div>
      );
    }
  };

  return (
    <div className="h-screen bg-gray-50">
      <div className="relative top-50">
        <form className="flex justify-center align-middle" onSubmit={signUp}>
          <div className="mt-4 mr-4 ml-4 flex w-52 flex-col sm:mr-20 sm:ml-20">
            <h1 className="text-center">Sign up with email</h1>

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
              className="mt-3 mb-1 rounded-md border-1 border-amber-300 p-1 hover:bg-amber-100 focus-visible:bg-amber-100 focus-visible:outline-amber-500"
              placeholder="password"
              onChange={(e) => {
                handleUpdatePassword(e);
              }}
              type="password"
              required
            />
            {handleRenderHelperText()}
            <button
              className="mt-3 mb-3 rounded-md border-1 border-amber-300 bg-amber-100 hover:animate-bounce hover:bg-amber-300 focus-visible:outline-amber-500"
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
