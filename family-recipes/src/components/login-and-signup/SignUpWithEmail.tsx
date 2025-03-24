import { FormEvent, useRef } from "react";
import { auth } from "../../config/firebase.ts";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const SignUpWithEmail = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const signIn = async (e: FormEvent<HTMLFormElement>) => {
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
    <form onSubmit={signIn}>
      <h1>Sign in with email</h1>
      <br />
      <input ref={emailRef} placeholder="email" />
      <br />
      <input ref={passwordRef} type="password" placeholder="password" />
      <br />
      <button type="submit">sign in</button>
    </form>
  );
};

export default SignUpWithEmail;
