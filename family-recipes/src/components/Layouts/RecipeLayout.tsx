import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase.ts";
import { signOut } from "firebase/auth";
import { useState } from "react";

const RecipeLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
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
      <nav>
        <section className="MOBILE-MENU flex-row-reverse p-4 sm:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-amber-700"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-amber-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-amber-500"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <section className="flex min-h-[250px] flex-col justify-between">
              <NavLink
                onClick={() => setIsNavOpen(false)}
                to="/recipes/personal"
                className={({ isActive }) =>
                  [
                    "group",
                    "mr-1",
                    "self-center",
                    "rounded-full border-1",
                    "border-none",
                    "p-2",
                    "text-md",
                    "uppercase",
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
                onClick={() => setIsNavOpen(false)}
                to="/recipes/public"
                className={({ isActive }) =>
                  [
                    "group",
                    "self-center",
                    "rounded-full border-1",
                    "border-none",
                    "mr-1",
                    "p-2",
                    "text-md",
                    "uppercase",
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
                onClick={() => setIsNavOpen(false)}
                to="/recipes/all"
                className={({ isActive }) =>
                  [
                    "group",
                    "self-center",
                    "rounded-full border-1",
                    "border-none",
                    "p-2",
                    "text-md",
                    "uppercase",
                    "focus-visible:outline-amber-500",
                    "sm:text-base",
                    isActive ? "bg-amber-400" : "",
                  ].join(" ")
                }
              >
                every recipe
                <span className="block h-0.5 max-w-0 bg-amber-600 transition-all duration-600 group-hover:max-w-full"></span>
              </NavLink>
            </section>
          </div>
        </section>
        <div className="hidden justify-center pt-5 align-middle sm:flex">
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
            className="group mr-4 ml-auto text-[15px] sm:text-[20px]"
            type="button"
          >
            signout
            <span className="block h-0.5 max-w-0 bg-amber-600 transition-all duration-600 group-hover:max-w-full"></span>
          </button>
        </div>
      </nav>
      <hr className="mx-1 mt-8 mb-8 h-[2px] rounded-sm border-0 bg-gray-900 dark:bg-gray-300"></hr>
      <Outlet />
    </div>
  );
};

export default RecipeLayout;
