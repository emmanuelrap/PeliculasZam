import React from "react";
import "../../public/styles/ErrorPage.css";

export const ErrorPage = () => {
  return (
    <section className="page_404">
      <div className="four_zero_four_bg">
        <h1 className="titulo_404 ">404</h1>
      </div>

      <div className="contant_box_404">
        <h2 className=" titulo_404">UPS! ¿todo bien?</h2>
        <p className=" titulo_404">La pagina que buscas no existe</p>

        <a href="/" className="link_404">
          Ir a Pagina Principal
        </a>
      </div>
    </section>
  );
};
