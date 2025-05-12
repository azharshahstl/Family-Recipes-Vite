import FooterPill from "./footer-pills/FooterPill";
import Ingredients from "./ingredients/Ingredients";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RxTimer } from "react-icons/rx";
import { SiLevelsdotfyi } from "react-icons/si";
import { LuCookingPot } from "react-icons/lu";
import { Link } from "react-router-dom";

interface CardProps {
  cookTime: string;
  directions: string;
  foodCategory: string;
  ingredients: string[];
  prepTime: string;
  rating: string;
  showFullInfo?: boolean;
  styles?: string;
  title: string;
  id?: string;
}

const CardContainer = (props: CardProps) => {
  const {
    cookTime,
    directions,
    foodCategory,
    id,
    ingredients,
    prepTime,
    rating,
    showFullInfo = false,
    styles = "",
    title,
  } = props;

  return showFullInfo ? (
    <div className="m-6">
      <div
        tabIndex={-1}
        className={`sm:max-h[550px] flex max-h-[550px] min-h-[500px] w-[380px] flex-col justify-around rounded bg-[url(/paper.jpg)] px-6 py-4 shadow-lg shadow-gray-700 focus-visible:outline-amber-500 ${styles}`}
      >
        <div className="mb-2 text-xl font-bold">{title}</div>
        <Ingredients showFullInfo={showFullInfo} ingredients={ingredients} />
        <div>
          <p className="font-semibold text-amber-950">directions:</p>
          <p className="ml-2 text-base text-gray-950">
            {directions.length < 150
              ? directions
              : showFullInfo
                ? directions
                : directions.substring(0, 100) + "..."}
          </p>
        </div>
        <div>
          <FooterPill value={rating}>
            <SiLevelsdotfyi style={{ display: "inline" }} />
          </FooterPill>
          <FooterPill value={foodCategory}>
            <MdOutlineLocalGroceryStore style={{ display: "inline" }} />
          </FooterPill>
          <FooterPill value={prepTime}>
            <RxTimer style={{ display: "inline" }} />
          </FooterPill>
          <FooterPill value={cookTime}>
            <LuCookingPot style={{ display: "inline" }} />
          </FooterPill>
        </div>
      </div>
    </div>
  ) : (
    <div className="m-6">
      <Link to={`/recipes/${id}`}>
        <div
          tabIndex={0}
          className={`sm:max-h[550px] flex max-h-[550px] min-h-[500px] w-[380px] flex-col justify-around rounded bg-[url(/paper.jpg)] px-6 py-4 shadow-lg shadow-gray-700 focus-visible:outline-amber-500 ${styles}`}
        >
          <div className="mb-2 text-xl font-bold">{title}</div>
          <Ingredients showFullInfo={showFullInfo} ingredients={ingredients} />
          <div>
            <p className="font-semibold text-amber-950">directions:</p>
            <p className="ml-2 text-base text-gray-950">
              {directions.length < 150
                ? directions
                : showFullInfo
                  ? directions
                  : directions.substring(0, 100) + "..."}
            </p>
          </div>

          <div>
            <FooterPill value={rating}>
              <SiLevelsdotfyi style={{ display: "inline" }} />
            </FooterPill>
            <FooterPill value={foodCategory}>
              <MdOutlineLocalGroceryStore style={{ display: "inline" }} />
            </FooterPill>
            <FooterPill value={prepTime}>
              <RxTimer style={{ display: "inline" }} />
            </FooterPill>
            <FooterPill value={cookTime}>
              <LuCookingPot style={{ display: "inline" }} />
            </FooterPill>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardContainer;
