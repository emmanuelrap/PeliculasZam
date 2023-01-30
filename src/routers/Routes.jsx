import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { MovieDetails } from "../pages/MovieDetails";
import { ErrorPage } from "../pages/ErrorPage.jsx";
import { PeliculasCategoria } from "../pages/PeliculasCategoria.jsx";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/movie/:movieId" element={<MovieDetails />} />
        <Route
          exact
          path="/categoria/:nomCategoria"
          element={<PeliculasCategoria />}
        />
        <Route exact path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
