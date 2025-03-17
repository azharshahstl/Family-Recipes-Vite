import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-lvh w-full items-center justify-center bg-[url(../../public/paper.jpg)]">
      <div className="italianno-sm sm:text-9xl">Family Recipes</div>
      <Link
        className="sheen w-4.5 rotate-130 relative left-[-333px] top-[-32px] h-3.5 rounded-[50%] bg-black text-[0px] hover:shadow sm:left-[-445px] sm:top-[-38px]"
        to="#"
      >
        link
      </Link>
      <button className="bg-white hover:shadow">hello</button>
    </div>
  );
};

export default Home;
