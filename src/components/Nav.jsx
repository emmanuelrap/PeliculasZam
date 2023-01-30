import React from "react";
import "../../public/styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = ({
  colorFondo,
  setColorFondo,
  nombreCategoria,
  setNombreCategoria,
}) => {
  const [categoria, setCategoria] = useState("estrenos");

  return (
    <div>
      <br />
      <div
        className="btn-group btn-group-toggle alinear-izquierda"
        data-toggle="buttons"
      >
        <label
          className="btn btn-secondary active degradado-blanco"
          onClick={() => setColorFondo("degradado-blanco")}
        >
          claro
        </label>
        <label
          className="btn btn-secondary active degradado-netflix"
          onClick={() => setColorFondo("degradado-netflix")}
        >
          netflix
        </label>
        <label
          className="btn btn-secondary active degradado-negro"
          onClick={() => setColorFondo("degradado-negro")}
        >
          obscuro
        </label>
      </div>

      <div className="alinear-derecha">
        <Link className="alinear-derecha" to={"/categoria/" + categoria}>
          <div className="alinear-derecha">
            <button
              className="btn btn-primary categoria-items"
              onClick={() => setCategoria("adultos")}
            >
              Adultos
            </button>
            <button
              className="btn btn-primary categoria-items"
              onClick={() => setCategoria("dramas")}
            >
              Dramas
            </button>
            <button
              className="btn btn-primary categoria-items"
              onClick={() => setCategoria("estrenos")}
            >
              Estrenos
            </button>
            <button
              className="btn btn-primary categoria-items"
              onClick={() => setCategoria("populares")}
            >
              Populares
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
