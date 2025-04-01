import { collection, getDocs } from "firebase/firestore";
import { useFamilyRecipesContext } from "../context/context.ts";
import Loader from "../loader/Loader.tsx";
import { db } from "../../config/firebase.ts";
import { useEffect, useState } from "react";

const All = () => {
  const { isLoading } = useFamilyRecipesContext();

  const [recipes, setRecipes] = useState<{ id: string }[]>([]);

  const recipesCollectionRef = collection(db, "recipes");

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const recipeData = await getDocs(recipesCollectionRef);
        const allRecipes = recipeData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setRecipes(allRecipes);
        console.log(allRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    getRecipes();
  }, []);

  const renderRecipes = () => {
    {
      if (isLoading) <Loader />;
    }
    return (
      <div className="flex flex-col bg-gray-200">
        <main className="flex flex-col items-center justify-center">
          <div className="m-6 max-w-sm overflow-hidden rounded bg-[url(/paper.jpg)] shadow-lg shadow-gray-700 hover:animate-bounce">
            <div>
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
          <div className="m-6 max-w-sm overflow-hidden rounded bg-[url(/paper.jpg)] shadow-lg shadow-gray-700 hover:animate-bounce">
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
          <div className="m-6 max-w-sm overflow-hidden rounded bg-[url(/paper.jpg)] shadow-lg shadow-gray-700 hover:animate-bounce">
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

export default All;
