import React, { useEffect, useState } from "react";
import { data as cryptoData } from "../../db.js"; // Assurez-vous que le chemin est correct

const HeaderInfosWallet = () => {
  const [totalAvoirs, setTotalAvoirs] = useState(0);
  const [nombreActifs, setNombreActifs] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3002/transactions")
      .then((response) => response.json())
      .then((transactions) => {
        const total = transactions.reduce((acc, transaction) => {
          const cryptoInfo = cryptoData.find(
            (c) => c.id === transaction.crypto
          );
          const currentPrice = cryptoInfo ? cryptoInfo.current_price : 0;

          // Ajouter pour un achat, soustraire pour une vente
          return transaction.transactionType === "Achat"
            ? acc + transaction.quantity * currentPrice
            : acc - transaction.quantity * currentPrice;
        }, 0);

        setTotalAvoirs(total);

        const actifsUniques = new Set(
          transactions.map((transaction) => transaction.crypto)
        );
        setNombreActifs(actifsUniques.size);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des transactions:",
          error
        );
      });
  }, []);

  return (
    <div className="header-container">
      <ul className="title">
        <li>
          <h1>
            <img src="./assets/logo.png" alt="logo" /> Wallet Tower
          </h1>
        </li>
        <li>Mes avoirs : {totalAvoirs.toFixed(2)} USD</li>{" "}
        {/* Affichage du total des avoirs */}
        <li>Nombre d'actifs différents : {nombreActifs}</li>{" "}
        {/* Affichage du nombre d'actifs */}
      </ul>
      <ul className="infos-wlt"></ul>
    </div>
  );
};

export default HeaderInfosWallet;
