//Esta es la pagina HOME por así decirlo
import { ContextMovieCard } from "../components/ContextMovieCard";
import { Footer } from "../components/Footer";
import "../../public/styles/App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export function LandingPage() {
  const [color, setColor] = useState(["degradado-negro"]);

  return (
    <div className={color}>
      <header>
        <br></br>
        <h1 className="title"> 🎬PELÍCULAS.ZAM </h1>
      </header>
      <nav>
        <br></br>
        {/* <h1>Peliculas Estreno</h1> */}
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label
            class="btn btn-secondary active degradado-blanco"
            onClick={() => setColor("degradado-blanco")}
          >
            claro
          </label>
          <label
            class="btn btn-secondary active degradado-netflix"
            onClick={() => setColor("degradado-netflix")}
          >
            netflix
          </label>
          <label
            class="btn btn-secondary active degradado-negro"
            onClick={() => setColor("degradado-negro")}
          >
            obscuro
          </label>
        </div>
      </nav>

      <ContextMovieCard />
      <Footer />
    </div>
  );
}
