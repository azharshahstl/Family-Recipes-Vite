import { auth, googleAuthProvider } from "../../config/firebase.ts";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const signInWithUserAndPassword = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <input onChange={handleEmailChange} placeholder="email" />
      <input
        onChange={handlePasswordChange}
        type="password"
        placeholder="password"
      />
      <button onClick={signInWithUserAndPassword}>Sign in</button>
      <button onClick={handleSignInWithGoogle}>Sign in With Goolge</button>
      <button onClick={handleSignOut}>Sign out</button>
    </>
  );
};

export default Auth;
