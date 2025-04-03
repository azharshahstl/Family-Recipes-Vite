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
    <>
      <div className="sticky top-0 w-full bg-gray-200">
        <nav>
          {/* Mobile Menu */}
          <section className="flex-row-reverse p-4 sm:hidden">
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
                <button
                  onClick={handleSignOut}
                  className="group mr-4 ml-auto text-[15px] sm:text-[20px]"
                  type="button"
                >
                  signout
                  <span className="block h-0.5 max-w-0 bg-amber-600 transition-all duration-600 group-hover:max-w-full"></span>
                </button>
              </section>
            </div>
          </section>
          {/* Desktop menu */}
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

        <form className="mx-auto flex max-w-sm items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search branch name..."
              required
            />
          </div>
          <button
            type="submit"
            className="ms-2 rounded-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>

        <hr className="mx-1 mt-8 h-[2px] rounded-sm border-0 bg-gray-900 dark:bg-gray-300"></hr>
      </div>
      <Outlet />
    </>
  );
};

export default RecipeLayout;
