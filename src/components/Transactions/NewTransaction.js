import React, { useState, useEffect } from "react";
import { data as cryptoData } from "../../db.js";

const NewTransaction = () => {
  const [transactionData, setTransactionData] = useState({
    date: "",
    transactionType: "Achat",
    cryptoAchat: "bitcoin",
    cryptoVente: "tether",
    quantity: "",
    unitPriceUSD: "",
    totalUSD: "",
    wallet: "",
    blockchain: "",
  });

  useEffect(() => {
    if (transactionData.transactionType === "Achat") {
      setTransactionData((prevState) => ({
        ...prevState,
        cryptoVente: "tether",
      }));
    } else {
      setTransactionData((prevState) => ({
        ...prevState,
        cryptoAchat: "tether",
      }));
    }
  }, [transactionData.transactionType]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTransactionData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3002/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactionData),
      });

      if (response.ok) {
        console.log("Transaction ajoutée avec succès");
        // Ici, vous pouvez gérer la réponse et par exemple réinitialiser le formulaire
        setTransactionData({
          date: "",
          transactionType: "Achat",
          cryptoAchat: "",
          cryptoVente: "tether",
          quantity: "",
          unitPriceUSD: "",
          totalUSD: "",
          wallet: "",
          blockchain: "",
        });
      } else {
        console.error("Erreur lors de l'ajout de la transaction");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de la transaction", error);
    }
  };

  const handleNow = () => {
    const now = new Date().toISOString().slice(0, 16);
    setTransactionData((prevState) => ({ ...prevState, date: now }));
  };

  return (
    <form onSubmit={handleSubmit} className="new-transaction-form">
      <div className="form-group ">
        <label>Date</label>
        <div className="form-group-inline">
          <input
            type="datetime-local"
            name="date"
            value={transactionData.date}
            onChange={handleInputChange}
            className="form-control"
            required
          />
          <button type="button" onClick={handleNow} className="now-button">
            Now
          </button>
        </div>
      </div>

      <div className="form-group">
        <label>Type de Transaction</label>
        <select
          name="transactionType"
          value={transactionData.transactionType}
          onChange={handleInputChange}
          className="form-control"
          required
        >
          <option value="Achat">Achat</option>
          <option value="Vente">Vente</option>
        </select>
      </div>

      <div className="form-group">
        <label>Crypto Achat</label>
        <select
          name="cryptoAchat"
          value={transactionData.cryptoAchat}
          onChange={handleInputChange}
          className="form-control"
          required
        >
          {cryptoData.map((crypto) => (
            <option key={crypto.id} value={crypto.id}>
              {crypto.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Crypto Vente</label>
        <select
          name="cryptoVente"
          value={transactionData.cryptoVente}
          onChange={handleInputChange}
          className="form-control"
          required
        >
          {cryptoData.map((crypto) => (
            <option key={crypto.id} value={crypto.id}>
              {crypto.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Quantité</label>
        <input
          type="number"
          name="quantity"
          value={transactionData.quantity}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>

      <div className="form-group">
        <label>Prix unitaire (USD)</label>
        <input
          type="number"
          name="unitPriceUSD"
          value={transactionData.unitPriceUSD}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>

      <div className="form-group">
        <label>Total (USD)</label>
        <input
          type="number"
          name="totalUSD"
          value={transactionData.totalUSD}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>

      <div className="form-group">
        <label>Wallet</label>
        <input
          type="text"
          name="wallet"
          value={transactionData.wallet}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>

      <div className="form-group">
        <label>Blockchain (optionnel)</label>
        <input
          type="text"
          name="blockchain"
          value={transactionData.blockchain}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>

      <div className="center-button">
        <button type="submit" className="submit-button">
          Ajouter Transaction
        </button>
      </div>
    </form>
  );
};

export default NewTransaction;
