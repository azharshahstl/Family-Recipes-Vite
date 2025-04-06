import FooterPill from "./footer-pills/FooterPill";
import Ingredients from "./ingredients/Ingredients";

interface CardProps {
  cookTime: string;
  directions: string;
  foodCategory: string;
  ingredients: string[];
  prepTime: string;
  rating: string;
  title: string;
}

const CardContainer = (props: CardProps) => {
  const {
    cookTime,
    directions,
    foodCategory,
    ingredients,
    prepTime,
    rating,
    title,
  } = props;

  return (
    <div className="m-6">
      <div className="sm:max-h[550px] flex max-h-[550px] min-h-[500px] w-[380px] flex-col justify-around rounded bg-[url(/paper.jpg)] px-6 py-4 shadow-lg shadow-gray-700 sm:w-[500px] sm:hover:animate-bounce">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <Ingredients ingredients={ingredients} />
        <div>
          <p className="font-semibold text-amber-950">directions:</p>
          <p className="ml-2 text-base text-gray-950">
            {directions.length < 150
              ? directions
              : directions.substring(0, 100) + "..."}
          </p>
        </div>

        <div>
          <FooterPill descriptor="difficulty" value={rating} />
          <FooterPill descriptor="category" value={foodCategory} />
          <FooterPill descriptor="prep time" value={prepTime} />
          <FooterPill descriptor="cook time" value={cookTime} />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
