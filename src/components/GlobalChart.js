import React, { useEffect, useState } from "react";
import { Tooltip, Treemap } from "recharts";
import colors from "../styles/_settings.scss";

const GlobalChart = ({ coinsData }) => {
  const [dataArray, setDataArray] = useState([]);

  const colorPicker = (number) => {
    if (number >= 10) {
      return colors.color1;
    } else if (number >= 2) {
      return colors.green1;
    } else if (number >= 0) {
      return colors.green2;
    } else if (number >= -2) {
      return colors.red1;
    } else if (number >= -10) {
      return colors.red2;
    } else {
      return colors.black2;
    }
  };

  useEffect(() => {
    let chartData = [];

    if (coinsData.length > 0) {
      for (let i = 0; i < 10; i++) {
        chartData.push({
          name:
            coinsData[i].symbol.toUpperCase() +
            " " +
            coinsData[i].price_change_percentage_24h_in_currency.toFixed(2) +
            "%",
          size: coinsData[i].market_cap,
          fill: colorPicker(
            coinsData[i].price_change_percentage_24h_in_currency
          ),
        });
      }
    }
    setDataArray(chartData);
  }, [coinsData]);

  const TreemapToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].payload.name}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="global-chart">
      <Treemap
        width={730}
        height={181}
        data={dataArray}
        dataKey="size"
        stroke="rgb(51,51,51)"
        fill="black"
        aspectRatio="1"
        isAnimationActive={false}
      >
        <Tooltip
          content={<TreemapToolTip />}
          cursor={{ stroke: "red", strokeWidth: 2 }}
        />
      </Treemap>
    </div>
  );
};

export default GlobalChart;