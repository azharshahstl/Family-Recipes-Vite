import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase.ts";
import { signOut } from "firebase/auth";

const RecipeLayout = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      await navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-200">
      <div className="flex justify-center pt-5 align-middle">
        <span className="italianno-sm ml-4 self-center text-4xl">FR</span>
        <NavLink
          to="/recipes/personal"
          className={({ isActive }) =>
            [
              "group",
              "mr-1",
              "self-end",
              "rounded-full border-1",
              "border-none",
              "p-2",
              "text-xs",
              "ml-auto",
              "focus-visible:outline-amber-500",
              "sm:text-base",
              isActive ? "bg-amber-400" : "",
            ].join(" ")
          }
        >
          personal recipes
          <span className="block h-0.5 max-w-0 bg-amber-600 transition-all duration-600 group-hover:max-w-full"></span>
        </NavLink>
        <NavLink
          to="/recipes/public"
          className={({ isActive }) =>
            [
              "group",
              "self-end",
              "rounded-full border-1",
              "border-none",
              "mr-1",
              "p-2",
              "text-xs",
              "focus-visible:outline-amber-500",
              "sm:text-base",
              isActive ? "bg-amber-400" : "",
            ].join(" ")
          }
        >
          public recipes
          <span className="block h-0.5 max-w-0 bg-amber-600 transition-all duration-600 group-hover:max-w-full"></span>
        </NavLink>
        <NavLink
          to="/recipes/all"
          className={({ isActive }) =>
            [
              "group",
              "self-end",
              "rounded-full border-1",
              "border-none",
              "p-2",
              "text-xs",

              "focus-visible:outline-amber-500",
              "sm:text-base",
              isActive ? "bg-amber-400" : "",
            ].join(" ")
          }
        >
          every recipe
          <span className="block h-0.5 max-w-0 bg-amber-600 transition-all duration-600 group-hover:max-w-full"></span>
        </NavLink>
        <button
          onClick={handleSignOut}
          className="group mr-4 ml-auto text-[20px]"
          type="button"
        >
          signout
          <span className="block h-0.5 max-w-0 bg-amber-600 transition-all duration-600 group-hover:max-w-full"></span>
        </button>
      </div>

      <hr className="mx-1 mt-8 mb-8 h-[2px] rounded-sm border-0 bg-gray-900 dark:bg-gray-300"></hr>
      <Outlet />
    </div>
  );
};

export default RecipeLayout;
