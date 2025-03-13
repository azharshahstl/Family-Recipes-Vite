import Legend from "../legend/Legend";
import DifficultyRatingRadioGroup from "./DifficultyRatingRadioGroup";

const DifficultyRatingScore = ({ rating, setRating }) => {
  const handleOptionChange = (e) => {
    setRating(e.target.value);
  };

  return (
    <>
      <Legend title="Choose the difficulty level" />
      <DifficultyRatingRadioGroup
        selectedOption={rating}
        handleOptionChange={handleOptionChange}
      />
    </>
  );
};

export default DifficultyRatingScore;
