import React from "react";
import PercentChange from "./PercentChange";

const TableLine = ({ coin, index }) => {
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
        <span>
          <img src="./assets/star-empty.svg" alt="star-empty" height={15} />
        </span>
        <p>{index + 1}</p>
        <div className="img">
          <img src={coin.image} height="20" alt={coin.symbol} />
        </div>
        <div className="infos">
          <div className="chart-img">
            <img src="./assets/chart-icon.svg" alt="chart-icon" />
          </div>
          <h4>{coin.name}</h4>
          <span> - {coin.symbol.toUpperCase()}</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://www.coingecko.com/fr/pi%C3%A8ces/" +
              coin.name.toLowerCase().replace(/\s+/g, "-")
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
