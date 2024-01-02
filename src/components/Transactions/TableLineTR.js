import React from "react";

const TableLineTR = ({ transaction }) => {
  return (
    <div className="table-line-tr">
      <tr>
        <td>{transaction.date}</td>
        <td>{transaction.transactionType}</td>
        <td>{transaction.cryptoAchat}</td>
        <td>{transaction.cryptoVente}</td>
        <td>{transaction.quantity}</td>
        <td>{transaction.unitPriceUSD}</td>
        <td>{transaction.totalUSD}</td>
        <td>{transaction.wallet}</td>
        <td>{transaction.blockchain}</td>
      </tr>
    </div>
  );
};

export default TableLineTR;
