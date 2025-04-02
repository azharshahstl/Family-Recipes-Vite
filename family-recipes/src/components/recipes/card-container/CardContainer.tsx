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
      <div className="max-h-[550px] min-h-[300px] w-[380px] rounded bg-[url(/paper.jpg)] shadow-lg shadow-gray-700 sm:w-[500px] sm:hover:animate-bounce">
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{title}</div>
          <Ingredients ingredients={ingredients} />

          <p className="font-semibold text-amber-950">directions:</p>
          <p className="ml-2 text-base text-gray-950">
            {directions.length < 150
              ? directions
              : directions.substring(0, 100) + "..."}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
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
