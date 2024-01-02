import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import NewTransaction from "../components/Transactions/NewTransaction";
import TableTR from "../components/Transactions/TableTR";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/transactions")
      .then((response) => response.json())
      .then((transactions) => {
        setTransactions(transactions);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des transactions:",
          error
        );
      });
  }, []);

  return (
    <div>
      <Navigation />
      <NewTransaction />
      <TableTR transactions={transactions} />
    </div>
  );
};

export default Transactions;
