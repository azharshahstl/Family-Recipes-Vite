import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    modalRef.current?.showModal();
  }, []);

  const navigate = useNavigate();

  const closeModal = () => {
    navigate("/");

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    modalRef.current?.hasAttribute("open")
      ? modalRef.current.close()
      : modalRef.current?.showModal();
  };

  const closeModalOnBackgroundClick = (
    e: React.MouseEvent<HTMLDialogElement>,
  ) => {
    if (e.target === e.currentTarget) {
      modalRef.current?.close();
      navigate("/");
    }
  };
  return (
    <div className="h-screen bg-gray-50">
      <div className="mt-4 mr-4 ml-4 flex w-52 flex-col sm:mr-20 sm:ml-20"></div>
      <dialog
        onClick={closeModalOnBackgroundClick}
        className="dialog backdrop:backdrop-blur-xs"
        ref={modalRef}
      >
        <div className="flex flex-col">
          <button
            onClick={closeModal}
            className="mt-2 mr-2 size-5.5 self-end rounded-xs border-1 border-amber-300 bg-amber-100 hover:animate-bounce hover:bg-amber-300 focus-visible:outline-amber-500"
            aria-label="Close"
            type="button"
          >
            <svg height="26px" aria-hidden="true" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </button>
          <div className="m-3 text-center">
            Sorry, but I was unable to log you in. Please check to make sure
            your email and password are entered correctly.
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default NotFound;
