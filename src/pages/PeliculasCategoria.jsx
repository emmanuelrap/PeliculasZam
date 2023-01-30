//Esta es la pagina HOME
import { ContextMovieCard } from "../components/ContextMovieCard";
import { Footer } from "../components/Footer";
import Nav from "../components/Nav";
import { useState } from "react";
import "../../public/styles/App.css";
import { useParams } from "react-router-dom";

export function PeliculasCategoria() {
  const [colorFondo, setColorFondo] = useState(["degradado-negro"]);
  const { paramCategoria } = useParams();
  console.log("Peliculas-Categoria", paramCategoria);

  return (
    <div className={colorFondo}>
      <Nav colorFondo={colorFondo} setColorFondo={setColorFondo} />
      <ContextMovieCard cat={paramCategoria} />
      <Footer />
    </div>
  );
}
