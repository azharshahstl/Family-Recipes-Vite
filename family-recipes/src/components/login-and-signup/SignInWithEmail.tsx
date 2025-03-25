import { FormEvent, useRef } from "react";
import { auth } from "../../config/firebase.ts";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
    } catch {
      await navigate("/*");
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

export default SignInWithEmail;
