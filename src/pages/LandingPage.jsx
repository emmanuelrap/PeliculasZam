//Esta es la pagina HOME
import { ContextMovieCard } from "../components/ContextMovieCard";
import { Footer } from "../components/Footer";
import Nav from "../components/Nav";
import { useState } from "react";
import "../../public/styles/App.css";

export function LandingPage() {
  const [colorFondo, setColorFondo] = useState(["degradado-negro"]);

  return (
    <div className={colorFondo}>
      <Nav colorFondo={colorFondo} setColorFondo={setColorFondo} />
      <ContextMovieCard />
      <Footer />
    </div>
  );
}
