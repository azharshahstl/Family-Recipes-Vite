import FooterPill from "../footer-pills/FooterPill";

interface DiffcultyRatingProps {
  rating: string;
}

const DifficultyRating = (props: DiffcultyRatingProps) => {
  const { rating } = props;
  return <FooterPill value={rating} />;
};

export default DifficultyRating;
