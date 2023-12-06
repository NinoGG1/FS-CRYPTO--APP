import React, { useEffect, useState } from "react";

const StarIcon = ({ coinId }) => {
  const [like, setLike] = useState(false);

  useEffect(() => {
    const favList = window.localStorage.coinList
      ? window.localStorage.coinList.split(",")
      : [];
    setLike(favList.includes(coinId));
  }, [coinId]); // Ajout de coinId comme dépendance

  const idChecker = (id) => {
    let favList = window.localStorage.coinList
      ? window.localStorage.coinList.split(",")
      : [];
    if (favList.includes(id)) {
      favList = favList.filter((coin) => coin !== id); // Créer une nouvelle liste sans l'ID
      setLike(false);
    } else {
      favList.push(id); // Ajouter l'ID à la liste
      setLike(true);
    }
    window.localStorage.coinList = favList.join(","); // Stocker la liste sous forme de chaîne de caractères
  };
  return (
    <img
      onClick={() => idChecker(coinId)}
      src={like ? "./assets/star-full.svg" : "./assets/star-empty.svg"}
      alt="icon-star"
    />
  );
};

export default StarIcon;
