import { useRef } from "react";

interface LoginAndSignupProps {
  modalIsOpen: boolean;
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginAndSignup = ({ modalIsOpen, toggleModal }: LoginAndSignupProps) => {
  const modelRef = useRef<HTMLDialogElement>(null);

  if (modalIsOpen) {
    console.log(modalIsOpen);
    modelRef.current?.showModal();
  }

  return (
    <dialog ref={modelRef}>
      <div>Hello</div>
      <button
        onClick={() => {
          modelRef.current?.close();
          toggleModal(false);
        }}
      >
        Azhar
      </button>
    </dialog>
  );
};

export default LoginAndSignup;
