import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/wallet"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Wallet</li>
        </NavLink>
        <NavLink
          to="/transactions"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Transactions</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
