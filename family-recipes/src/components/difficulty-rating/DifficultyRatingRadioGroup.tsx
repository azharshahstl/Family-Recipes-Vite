import Label from "../label/Label";
import RadioInput from "../input/Input";

const DifficultyRatingRadioGroup = ({ selectedOption, handleOptionChange }) => {
  return (
    <div>
      <input
        type="radio"
        checked={selectedOption === "easy"}
        onChange={handleOptionChange}
        name="ratings"
        id="level-1"
        value="easy"
      />
      <Label htmlFor="level-1" name="Easy" />
      <input
        type="radio"
        checked={selectedOption === "moderate"}
        onChange={handleOptionChange}
        name="ratings"
        id="level-1"
        value="moderate"
      />
      <Label htmlFor="level-2" name="Moderate" />
      <input
        type="radio"
        checked={selectedOption === "difficult"}
        onChange={handleOptionChange}
        name="ratings"
        id="level-1"
        value="difficult"
      />
      <Label htmlFor="level-3" name="Difficult" />
      <input
        type="radio"
        checked={selectedOption === "master-chef"}
        onChange={handleOptionChange}
        name="ratings"
        id="level-1"
        value="master-chef"
      />
      <Label htmlFor="level-4" name="Master Chef" />
    </div>
  );
};

export default DifficultyRatingRadioGroup;
