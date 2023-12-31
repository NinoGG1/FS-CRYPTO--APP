import React, { useEffect, useState } from "react";
import HeaderInfos from "../components/HeaderInfos";
import GlobalChart from "../components/GlobalChart";
// import axios from "axios";
import Table from "../components/Table";
import { data } from "../db.js";
import ToTop from "../components/ToTop.js";
import Navigation from "../components/Navigation.js";

const Home = () => {
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    setCoinsData(data); // Utilisez les données importées pour définir l'état

    const handleScroll = () => {
      const header = document.querySelector(".table-header");
      if (header) {
        if (window.scrollY > 145) {
          header.classList.add("active");
        } else {
          header.classList.remove("active");
        }
      }
    };

    // Ajouter l'écouteur d'événement sur 'scroll'
    window.addEventListener("scroll", handleScroll);

    // N'oubliez pas de retirer l'écouteur d'événement lorsque le composant est démonté
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y"
  //     )
  //     .then((res) => setCoinsData(res.data));
  // }, []);

  return (
    <div className="home-container">
      <Navigation />
      <header>
        <HeaderInfos />
        <GlobalChart coinsData={coinsData} />
      </header>
      <Table coinsData={coinsData} />
      <ToTop />
    </div>
  );
};

export default Home;
