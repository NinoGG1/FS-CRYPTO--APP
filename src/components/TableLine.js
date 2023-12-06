import { useState } from "react";
import React from "react";
import PercentChange from "./PercentChange";
import StarIcon from "./StarIcon";
import CoinChart from "./CoinChart";

const TableLine = ({ coin, index }) => {
  const [showChart, setShowChart] = useState(false);

  const formatNumber = (number) => {
    return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(
      number
    );
  };

  const priceFormater = (price) => {
    if (Math.round(price).toString().length < 4) {
      return new Intl.NumberFormat("fr-FR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 8,
      }).format(price);
    } else {
      return formatNumber(price);
    }
  };

  return (
    <div className="table-line">
      <div className="infos-container">
        <StarIcon coinId={coin.id} />
        <p>{index + 1}</p>
        <div className="img">
          <img src={coin.image} height="20" alt={coin.symbol} />
        </div>
        <div className="infos">
          <div
            className="chart-img"
            onMouseEnter={() => setShowChart(true)}
            onMouseLeave={() => setShowChart(false)}
          >
            <img src="./assets/chart-icon.svg" alt="chart-icon" />
            <div className="chart-container" id={coin.name}>
              {showChart && <CoinChart coinId={coin.id} coinName={coin.name} />}
            </div>
          </div>
          <h4>{coin.name}</h4>
          <span> - {coin.symbol.toUpperCase()}</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://www.coingecko.com/fr/pi%C3%A8ces/" +
              coin.id.toLowerCase()
            }
          >
            <img src="./assets/info-icon.svg" alt="info-icon" />
          </a>
        </div>
      </div>
      <p className="number-spacing">{priceFormater(coin.current_price)} $</p>
      <p className="mktcap number-spacing">{formatNumber(coin.market_cap)} $</p>
      <p className="volume number-spacing">
        {formatNumber(coin.total_volume).toLocaleString()} $
      </p>
      <PercentChange percent={coin.price_change_percentage_1h_in_currency} />
      <PercentChange percent={coin.price_change_percentage_24h_in_currency} />
      <PercentChange percent={coin.price_change_percentage_7d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_30d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_200d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_1y_in_currency} />
      <PercentChange percent={coin.ath_change_percentage} />
      {/* <p className="number-spacing">{priceFormater(coin.ath)} $</p> */}
    </div>
  );
};

export default TableLine;
