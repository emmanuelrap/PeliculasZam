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

  return (
    <div className={colorFondo}>
      <h1> Categoria</h1>
      <Nav colorFondo={colorFondo} setColorFondo={setColorFondo} />
      <ContextMovieCard cat={paramCategoria} />
      <Footer />
    </div>
  );
}
