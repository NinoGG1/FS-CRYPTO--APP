import React from "react";
import TableLineTR from "./TableLineTR";

const TableTR = ({ transactions }) => {
  const tableTransactionsHeader = [
    "Date",
    "Type",
    "Crypto Achat",
    "Crypto Vente",
    "Quantité",
    "Prix unitaire",
    "Total",
    "Wallet",
    "Blockchain",
  ];

  return (
    <div className="table-container-tr">
      <div className="table-header-tr">
        {tableTransactionsHeader.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </div>

      <div className="">
        {transactions.map((transaction, index) => (
          <TableLineTR key={index} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default TableTR;
