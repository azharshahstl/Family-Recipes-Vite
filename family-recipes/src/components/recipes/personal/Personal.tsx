const Personal = () => {
  return (
    <>
      <div className="flex h-screen flex-col bg-gray-200">
        <main className="flex flex-col items-center justify-center">
          <div className="m-6 max-w-sm overflow-hidden rounded bg-[url(/paper.jpg)] shadow-lg shadow-gray-700 hover:animate-bounce">
            <div>
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">The Warmest Sunset</div>
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
        </main>
      </div>
    </>
  );
};

export default Personal;
