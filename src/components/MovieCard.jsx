// Este es el componente que recibe la pelicula y la pinta. Caudno le dan clic me manda a "movies/movies.id"
import styles from "../../public/styles/MovieCard.module.css";
import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          src={imageUrl}
          alt={movie.title}
          className="movieImage"
        />
      </Link>
      <div className={styles.title}>{movie.title}</div>
    </li>
  );
}
