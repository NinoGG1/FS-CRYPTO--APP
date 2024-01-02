import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import HeaderInfosWallet from "../components/Wallet/HeaderInfosWallet";

const Wallet = () => {
  const [balance, setBalance] = useState([]);

  // useEffect(() => {
  //   const fetchBalance = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://papi.binance.com/papi/v1/balance",
  //         {
  //           headers: {
  //             "X-MBX-APIKEY": apiKey,
  //           },
  //         }
  //       );
  //       setBalance(response.data);
  //     } catch (error) {
  //       console.error("Erreur lors de la récupération du solde:", error);
  //     }
  //   };

  //   fetchBalance();
  // }, []);

  return (
    <div className="wallet-container">
      <Navigation />
      <header>
        <HeaderInfosWallet />
      </header>
    </div>
  );
};

export default Wallet;
