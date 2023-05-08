import { useState, useEffect } from "react";
import Movies from "../components/Movies";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(Math.round(Math.random() * 10));
  const [filter, setFilter] = useState("");

  const getMovies = async (rate) => {
    //영화 디테일 url
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=${rate}&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) return;
    getMovies(rating);
  }, [loading, rating]);

  function onChangeFilter(event) {
    setFilter(event.target.value);
  }

  function onSubmitFilter(event) {
    event.preventDefault();

    setRating(filter);
    setLoading(true);
  }

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Score Filter</h1>
          <form onSubmit={onSubmitFilter}>
            <input
              value={filter}
              onChange={onChangeFilter}
              placeholder="Write 0 to 9..."
              max={9}
              maxLength={1}
              type="number"
            />
            <button>SHOW</button>
          </form>
          <br />
          <hr />
          <br />
          {movies.map((mv) => (
            <Movies
              key={mv.id}
              id={mv.id}
              title={mv.title}
              coverImg={mv.medium_cover_image}
              summary={mv.summary}
              genres={mv.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
