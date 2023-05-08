import Types from "prop-types";
import { useEffect, useState } from "react";

function MovieDetail({ longTitle, rating, genres, descriptionFull, largeImg }) {
  const [starScore, setStarScore] = useState("");

  useEffect(() => {
    const checkArr = Array.from({ length: 10 });

    const currentScore = Math.round(rating);

    const value = checkArr.map((_, idx) => {
      return idx < currentScore ? "💖 " : "🖤 ";
    });
    setStarScore(value);
  }, [rating]);

  return (
    <div>
      <h1>{longTitle}</h1>
      <img alt={longTitle} src={largeImg} />
      <h2>
        Score: {starScore}
        {`${rating}/10`}
      </h2>
      <p>{descriptionFull}</p>
      <ul>
        {genres.map((gr, idx) => (
          <li key={idx}>{gr}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetail;

Types.propTypes = {
  longTitle: Types.string.isRequired,
  rating: Types.number.isRequired,
  genres: Types.arrayOf(Types.string).isRequired,
  descriptionFull: Types.string.isRequired,
  largeImg: Types.string.isRequired,
};
