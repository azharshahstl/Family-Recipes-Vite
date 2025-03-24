import { useRef } from "react";
import { auth } from "../../config/firebase.ts";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const SignInWithEmail = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const signIn = async () => {
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
    <>
      <h1>Sign in with email</h1>
      <br />
      <input placeholder="email" />
      <br />
      <input type="password" placeholder="password" />
      <br />
      <button onClick={signIn}>sign in</button>
    </>
  );
};

export default SignInWithEmail;
