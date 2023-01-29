//Se ejecuta cuando dan clic en alguna Movie Card
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "../../public/styles/MovieDetails.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGeneros(data.genres[0]);
    });
  }, [movieId]);
  const imageUrl = getMovieImg(movie.poster_path, 500);
  console.log(movie);

  return (
    <div className="detailsContainer ">
      <div className="padding">
        <img src={imageUrl} alt={movie.title} className="col movieImage" />
        <Link to="/">
          <h2 className="text-aling-center">🏡Regresar al Inicio</h2>
        </Link>
      </div>

      <div className="col movieDetails">
        <p className="title">
          <strong>Título: </strong>
          {movie.title}
        </p>
        <p>
          <br></br>
          <strong>GÉNERO: </strong>
          {generos.name}
        </p>
        <p className="text-align-justify">
          <br></br>
          <strong>DESRIPCIÓN: </strong>
          {movie.overview}
        </p>
        <p>
          <br></br>
          <strong>ESTRENO: </strong>
          {movie.release_date}
        </p>
      </div>
    </div>
  );
}
