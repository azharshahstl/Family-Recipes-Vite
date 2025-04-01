interface CardProps {
  title: string;
  directions: string;
}

const Card = (props: CardProps) => {
  const { title, directions } = props;

  return (
    <div className="m-6 max-w-sm overflow-hidden rounded bg-[url(/paper.jpg)] shadow-lg shadow-gray-700 hover:animate-bounce">
      <div>
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{title}</div>
          <p className="text-base text-gray-950">{directions}</p>
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
  );
};

export default Card;
