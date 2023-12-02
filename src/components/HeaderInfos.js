import axios from "axios";
import React, { useEffect, useState } from "react";
import PercentChange from "./PercentChange";

const HeaderInfos = () => {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => setHeaderData(res.data.data))
      .catch((err) =>
        console.error("Erreur lors du chargement des données", err)
      );
  }, []);

  // Fonction pour formater le nombre avec des séparateurs de milliers
  const formatNumber = (num) => {
    return num ? num.toLocaleString() : "Chargement...";
  };

  return (
    <div className="header-container">
      <ul className="title">
        <li>
          <h1>
            <img src="./assets/logo.png" alt="logo" /> Watch Tower
          </h1>
        </li>
        <li>
          Crypto-monnaies :{" "}
          {headerData
            ? formatNumber(headerData.active_cryptocurrencies)
            : "Chargement..."}
        </li>
        <li>
          Marchés :{" "}
          {headerData ? formatNumber(headerData.markets) : "Chargement..."}
        </li>
      </ul>
      <ul className="infos-mkt">
        <li className="global-mkt">
          Global Market Cap :{" "}
          <PercentChange
            percent={headerData?.market_cap_change_percentage_24h_usd}
          />
        </li>
        <li>
          BTC dominance :{" "}
          {headerData?.market_cap_percentage?.btc?.toFixed(1) + "%" ||
            "Chargement..."}
        </li>
        <li>
          ETH dominance :{" "}
          {headerData?.market_cap_percentage?.eth?.toFixed(1) + "%" ||
            "Chargement..."}
        </li>
      </ul>
    </div>
  );
};

export default HeaderInfos;
