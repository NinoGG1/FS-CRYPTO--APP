import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Wallet from "./pages/Wallet.js";
import Transactions from "./pages/Transactions.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/transactions" element={<Transactions />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import HeaderInfos from "./components/HeaderInfos";
// import GlobalChart from "./components/GlobalChart";
// import axios from "axios";
// import Table from "./components/Table";
// import { data } from "./db.js";
// import ToTop from "./components/ToTop.js";
