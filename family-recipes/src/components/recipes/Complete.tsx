import { auth } from "../../config/firebase.ts";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import NotFound from "../not-found/NotFound.tsx";
import { useFamilyRecipesContext } from "../context/context.ts";

const Complete = () => {
  const { currentUser } = useFamilyRecipesContext();

  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      await navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const renderRecipes = () => {
    console.log("current user", currentUser);
    return (
      <div className="flex flex-col bg-gray-50">
        <div className="flex flex-col">
          <button
            onClick={handleSignOut}
            className="m-3 self-end rounded-md border-1 border-amber-300 bg-amber-100 p-1 text-xs hover:animate-bounce hover:bg-amber-300 focus-visible:outline-amber-500 sm:text-base"
            type="submit"
          >
            signout
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className="m-3 self-end rounded-full border-1 border-amber-300 bg-amber-100 p-2 text-xs hover:bg-amber-300 focus-visible:outline-amber-500 sm:text-base"
            type="submit"
          >
            Show personal recipes
          </button>
          <button
            className="m-3 self-end rounded-full border-1 border-amber-300 bg-amber-100 p-2 text-xs hover:bg-amber-300 focus-visible:outline-amber-500 sm:text-base"
            type="submit"
          >
            Show public recipes
          </button>
          <button
            className="m-3 self-end rounded-full border-1 border-amber-300 bg-amber-100 p-2 text-xs hover:bg-amber-300 focus-visible:outline-amber-500 sm:text-base"
            type="submit"
          >
            show every recipe
          </button>
        </div>
        <main className="flex flex-col items-center justify-center">
          <div className="m-6 max-w-sm overflow-hidden rounded bg-[url(/annie-spratt-cloth-with-stain-unsplash.jpg)] shadow-lg shadow-gray-700 hover:animate-bounce">
            <div className="backdrop-brightness-150">
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
                <p className="text-base text-gray-950">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #photography
                </span>
                <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #travel
                </span>
                <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #winter
                </span>
              </div>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
              <p className="text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #photography
              </span>
              <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #travel
              </span>
              <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #winter
              </span>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
              <p className="text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #photography
              </span>
              <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #travel
              </span>
              <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #winter
              </span>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
              <p className="text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #photography
              </span>
              <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #travel
              </span>
              <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #winter
              </span>
            </div>
          </div>
        </main>
      </div>
    );
  };

  return renderRecipes();
};

export default Complete;
