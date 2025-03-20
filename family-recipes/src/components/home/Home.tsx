import { useRef } from "react";
import LoginAndSignup from "../login-and-signup/LoginAndSignup";

const Home = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const toggleModal = () => {
    if (!modalRef.current) return;

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    modalRef.current.hasAttribute("open")
      ? modalRef.current.close()
      : modalRef.current.showModal();
  };

  return (
    <div className="flex h-lvh w-full items-center justify-center bg-[url(../../public/paper.jpg)]">
      <div className="italianno-sm sm:text-9xl">Family Recipes</div>
      <button
        aria-label="Open sign up/in modal"
        onClick={toggleModal}
        className="group relative left-[-333px] top-[-32px] h-3.5 w-3.5 cursor-pointer overflow-hidden rounded-full bg-black text-white hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-400 hover:ring-2 hover:ring-gray-600 hover:ring-offset-2 max-[530px]:fixed max-[530px]:left-[180px] max-[530px]:top-[362px] sm:left-[-440px] sm:top-[-38px]"
      >
        <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>
        <span className="relative"></span>
      </button>
      <LoginAndSignup ref={modalRef} toggleModal={toggleModal} />
    </div>
  );
};

export default Home;
