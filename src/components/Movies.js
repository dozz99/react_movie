import Types from "prop-types";
import { Link } from "react-router-dom";

const PUBLIC_HOME = `${process.env.PUBLIC_URL}`;

function Movies({ id, title, coverImg, summary, genres }) {
  return (
    <div>
      <img alt={title} src={coverImg} />
      <h2>
        {/* <a href="/movie">{title}</a> */}
        <Link to={`${PUBLIC_HOME}/movies/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((gr, index) => (
          <li key={index}>{gr}</li>
        ))}
      </ul>
    </div>
  );
}

Movies.prototype = {
  id: Types.number.isRequired,
  title: Types.string.isRequired,
  coverImg: Types.string.isRequired,
  summary: Types.string.isRequired,
  genres: Types.arrayOf(Types.string).isRequired,
};

export default Movies;
