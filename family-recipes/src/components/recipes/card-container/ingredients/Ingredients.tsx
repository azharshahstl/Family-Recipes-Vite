interface IngredientsProps {
  ingredients: string[];
  showFullInfo: boolean;
}

const Ingredients = (props: IngredientsProps) => {
  const { ingredients, showFullInfo } = props;

  const createIngredientsString = () => {
    if (ingredients.length > 5 && !showFullInfo) {
      const truncatedString = ingredients.slice(0, 5);
      return truncatedString.join(" | ").concat(" ...");
    } else {
      return ingredients.join(" | ");
    }
  };

  const renderIngredients = () => {
    return (
      <div>
        <p className="font-semibold text-amber-950">ingredients:</p>
        <p className="ml-2 pb-2">{createIngredientsString()}</p>
      </div>
    );
  };

  return renderIngredients();
};

export default Ingredients;
