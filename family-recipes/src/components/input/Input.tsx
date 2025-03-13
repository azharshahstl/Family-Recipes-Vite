const RadioInput = ({
  selectedOption,
  handleOptionChange,
  name,
  id,
  value,
}) => {
  return (
    <input
      type="radio"
      checked={selectedOption}
      onChange={handleOptionChange}
      name="ratings"
      id="level-1"
      value="easy"
    />
  );
};

export default RadioInput;
