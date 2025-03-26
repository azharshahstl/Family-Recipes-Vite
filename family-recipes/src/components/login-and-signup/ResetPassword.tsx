import { FormEvent, useRef } from "react";
import { auth } from "../../config/firebase.ts";
import { sendPasswordResetEmail } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const modalRef = useRef<HTMLDialogElement>(null);

  const navigate = useNavigate();

  const resetPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current!.value;

    try {
      await sendPasswordResetEmail(auth, email);
      modalRef.current?.showModal();
    } catch (err) {
      console.log(err);
      navigate("/*");
    }
  };

  const closeModal = () => {
    modalRef.current?.close();
    navigate("/");
  };

  return (
    <div className="h-screen bg-gray-50">
      <div className="relative top-50">
        <form
          className="flex justify-center align-middle"
          onSubmit={resetPassword}
        >
          <div className="mt-4 mr-4 ml-4 flex w-52 flex-col sm:mr-20 sm:ml-20">
            <h1 className="text-center text-sm">
              Enter email to reset password
            </h1>
            <input
              aria-label="email"
              autoComplete="true"
              className="mt-3 mb-3 rounded-b-xs border-1 border-amber-300 p-1 hover:bg-amber-100 focus-visible:bg-amber-100 focus-visible:outline-amber-500"
              placeholder="email"
              ref={emailRef}
              required
            />
            <button
              className="mt-3 mb-3 rounded-b-xs border-1 border-amber-300 bg-amber-100 hover:animate-bounce hover:bg-amber-300 focus-visible:outline-amber-500"
              type="submit"
            >
              reset password
            </button>
          </div>
          <dialog
            className="absolute top-7 left-7 backdrop:backdrop-blur-xs"
            ref={modalRef}
          >
            <div>Check your email for the link to reset your password.</div>
            <button
              className="mt-3 mb-3 rounded-b-xs border-1 border-amber-300 bg-amber-100 hover:animate-bounce hover:bg-amber-300 focus-visible:outline-amber-500"
              onClick={closeModal}
            >
              close modal
            </button>
          </dialog>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
