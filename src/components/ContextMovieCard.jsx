//Este Componente recibe la data, y crea todas las MovieCard dependiendo del numero de peliculas que haya
import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "../components/MovieCard";
import "../../public/styles/ContextMovieCard.css";

export function ContextMovieCard(cat) {
  const [movies, SetMovies] = useState([]);
  const [path, SetPath] = useState([
    "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc",
  ]);

  //Renderiza el contenedor de las peliculas cada vez que le mandan un prop de categoria diferente
  useEffect(() => {
    switch (cat.cat) {
      case "adultos":
        get(
          "/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc"
        ).then((data) => {
          SetMovies(data.results);
        });
        break;

      case "dramas":
        get(
          "/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10"
        ).then((data) => {
          SetMovies(data.results);
        });
        break;

      case "populares":
        get("/discover/movie?sort_by=popularity.desc").then((data) => {
          SetMovies(data.results);
        });
        break;

      case "estrenos":
        get(
          "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"
        ).then((data) => {
          SetMovies(data.results);
        });
        break;

      default:
        get(
          "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"
        ).then((data) => {
          SetMovies(data.results);
        });
        break;
    }
  }, [cat.cat]);

  return (
    // La clase "container" es la que hace el Responsive, ver en el .css
    <div className="container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
