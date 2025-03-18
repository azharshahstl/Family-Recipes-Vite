import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-lvh w-full items-center justify-center bg-[url(../../public/paper.jpg)]">
      <div className="italianno-sm sm:text-9xl">Family Recipes</div>
      <Link
        className="sheen relative left-[-333px] top-[-32px] h-4 w-3.5 rounded-[50%] bg-black text-[0px] focus-visible:outline-2 max-[530px]:fixed max-[530px]:left-[180px] max-[530px]:top-[362px] sm:left-[-440px] sm:top-[-38px]"
        to="#"
      >
        link
      </Link>
    </div>
  );
};

export default Home;
