import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const { id } = useParams();
  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setData(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    if (loading) {
      getMovieDetail();
    }
  });

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <MovieDetail
        longTitle={data.title_long}
        rating={data.rating}
        genres={data.genres}
        descriptionFull={data.description_full}
        largeImg={data.large_cover_image}
      />
    </div>
  );
}

export default Detail;
