import { useRef } from "react";
import { auth } from "../../config/firebase.ts";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInWithEmail = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const passwordRef = useRef<HTMLInputElement>(null);

  const signIn = async () => {
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
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
