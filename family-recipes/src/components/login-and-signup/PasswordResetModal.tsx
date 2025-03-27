import { useNavigate } from "react-router-dom";

const PasswordResetModal = () => {
  const navigate = useNavigate();

  const closeModal = () => {
    navigate("/");
  };
  return (
    <dialog className="dialog flex flex-col justify-center align-middle">
      <div>Check your email for the link to reset your password.</div>
      <button
        className="mt-3 mb-3 rounded-xs border-1 border-amber-300 bg-amber-100 hover:animate-bounce hover:bg-amber-300 focus-visible:outline-amber-500"
        onClick={closeModal}
      >
        close
      </button>
    </dialog>
  );
};

export default PasswordResetModal;
