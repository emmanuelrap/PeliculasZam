//Este Componente recibe la data, y crea todas las MovieCard dependiendo del numero de peliculas que haya
import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "../components/MovieCard";
import "../../public/styles/ContextMovieCard.css";

export function ContextMovieCard(cat) {
  const [categoria, setCategoria] = useState([]);

  const [movies, SetMovies] = useState([]);
  const [path, SetPath] = useState(
    "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"
  );

  useEffect(() => {
    get(path).then((data) => {
      // console.log(data);
      SetMovies(data.results);
    });
  }, [categoria]);

  return (
    // La clase "container" es la que hace el Responsive, ver en el .css
    <div className="container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
