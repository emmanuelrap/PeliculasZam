import React from "react";
import "../../public/styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const Nav = ({ colorFondo, setColorFondo }) => {
  return (
    <div>
      {/* <h1>Peliculas Estreno</h1> */}
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
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
      <div>
        <Link to={"/categoria/" + "adultos"}>
          <button>Adultos</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
