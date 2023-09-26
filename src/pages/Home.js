import React from "react";
import datas from "../datas/datas";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Banner />
      <div className="cards-container">
        {datas.map(({ id, title, cover }) => (
          <Card key={id} title={title} id={id} cover={cover} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
