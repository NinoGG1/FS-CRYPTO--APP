import React from "react";

const TableLine = ({ coin, index }) => {
  const priceFormater = (price) => {
    if (Math.round(price).toString().length < 4) {
      return new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 8,
      }).format(price);
    } else {
      return new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 0,
      }).format(price);
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
      <p>{priceFormater(coin.current_price)} $</p>
    </div>
  );
};

export default TableLine;
