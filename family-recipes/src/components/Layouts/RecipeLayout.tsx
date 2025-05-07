import { Outlet, useNavigate } from "react-router-dom";
import { auth, db } from "../../config/firebase.ts";
import { signOut } from "firebase/auth";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useState, useEffect, ChangeEvent, useRef } from "react";
import RecipePageLink from "../ui/links/ForRecipePage.tsx";

export interface RecipesContext {
  recipes: DocumentData;
  isLoading: boolean;
  searchParams: string;
  isSearching: boolean;
}

const RecipeLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [recipes, setRecipes] = useState<DocumentData>([]);
  const [searchParams, setSearchParams] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const recipesCollectionRef = collection(db, "recipes");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsLoading(true);
    const getRecipes = async () => {
      try {
        const recipeData = await getDocs(recipesCollectionRef);
        const allRecipes = recipeData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          uid: auth.currentUser!.uid,
        }));

        setRecipes(allRecipes);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getRecipes();
  }, []);

  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      await navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const clearSearch = () => {
    setIsSearching(false);

    inputRef.current!.value = "";
  };

  const handleSearchParams = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setIsSearching(false);
    } else {
      const lowerCaseSearch = e.target.value.toLowerCase();

      setSearchParams(lowerCaseSearch);
      setIsSearching(true);
    }
  };

  return (
    <>
      <div className="sticky top-0 w-full bg-gray-200">
        <nav>
          {/* Mobile Menu */}
          <section className="flex-row-reverse p-4 min-[600px]:hidden">
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
              <section className="flex min-h-[250px] flex-col justify-between align-middle">
                <RecipePageLink
                  handleOnClick={() => setIsNavOpen(false)}
                  goTo="/recipes/personal"
                  content="personal recipes"
                />
                <RecipePageLink
                  handleOnClick={() => setIsNavOpen(false)}
                  goTo="/recipes/public"
                  content="public recipes"
                />
                <RecipePageLink
                  handleOnClick={() => setIsNavOpen(false)}
                  goTo="/recipes/all"
                  content="every recipe"
                />
                <button
                  onClick={handleSignOut}
                  className="group mr-auto ml-auto text-[15px] sm:text-[20px]"
                  type="button"
                >
                  signout
                  <span className="block h-0.5 max-w-0 bg-amber-600 transition-all duration-600 group-hover:max-w-full"></span>
                </button>
              </section>
            </div>
          </section>
          {/* Desktop menu */}
          <div className="mb-4 hidden justify-evenly pt-5 align-middle min-[600px]:flex">
            <span className="italianno-sm ml-4 self-center text-4xl">
              Family Recipes
            </span>
            <RecipePageLink
              mobile={false}
              handleOnClick={undefined}
              goTo="/recipes/personal"
              content="personal recipes"
            />
            <RecipePageLink
              mobile={false}
              handleOnClick={undefined}
              goTo="/recipes/public"
              content="public recipes"
            />
            <RecipePageLink
              mobile={false}
              handleOnClick={undefined}
              goTo="/recipes/all"
              content="every recipe"
            />
            <button
              onClick={handleSignOut}
              className="group mr-4 rounded-full border-1 border-none p-2 text-[15px] focus-visible:outline-amber-500 sm:text-[20px]"
              type="button"
            >
              signout
              <span className="block h-0.5 max-w-0 bg-amber-600 transition-all duration-600 group-hover:max-w-full"></span>
            </button>
          </div>
        </nav>

        <div className="relative mx-auto flex max-w-sm">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"></div>
            <input
              onChange={handleSearchParams}
              ref={inputRef}
              type="text"
              id="simple-search"
              className="block w-full rounded-full border border-amber-300 bg-gray-50 p-1 ps-10 text-sm text-gray-900 focus-visible:outline-amber-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search title..."
            />
          </div>
          <button
            onClick={clearSearch}
            type="button"
            className="relative right-6 bottom-0.75 cursor-pointer rounded-full border-none text-2xl font-thin text-gray-700 focus-visible:outline-amber-500"
          >
            &times;
            <span className="sr-only">Clear Search</span>
          </button>
        </div>

        <hr className="mx-1 mt-8 h-[2px] rounded-sm border-0 bg-gray-900 dark:bg-gray-300"></hr>
      </div>
      <Outlet context={{ recipes, isLoading, searchParams, isSearching }} />
    </>
  );
};

export default RecipeLayout;
