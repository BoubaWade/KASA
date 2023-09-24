import React from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Page404 = () => {
  return (
    <div className="page404-container">
      <Header />
      <div className="main-container">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <NavLink to="/">Retourner sur la page d’accueil</NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Page404;
