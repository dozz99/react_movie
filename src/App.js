import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState("8.8");
  const [movies, setMovies] = useState([]);
  const getMovies = async (rate) => {
    //영화 디테일 url
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=${rate}&sort_by=year`
      )
    ).json();

    console.log(json.data.movies);

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    if (loading) {
      getMovies(rating);
    }
  }, [loading, rating]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((mv) => (
            <div key={mv.id}>
              <img alt={mv.title} src={mv.medium_cover_image} />
              <h2>{mv.title}</h2>
              <p>{mv.summary}</p>
              <ul>
                {mv.genres.map((gr, index) => (
                  <li key={index}>{gr}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
