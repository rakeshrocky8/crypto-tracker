import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/store";
import { fetchCoins } from "./features/cryptoSlice";

import "./App.css";
const CryptoDashboard = () => {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.crypto);

  const [searchTerm, setSearchTerm] = useState("");

  // Filter the items based on the search term
  const filteredCoins =items.filter((coin) => 
  coin.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || 
  coin.symbol.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);
  if (status === "loading")
    return <div className="loader">Updating Market</div>;
  if (status === "failed") return <div className="error">{error}</div>;
  return (
    <div className="app-container">
      <div className="title-container">
        <h1>Crypto Live Tracker</h1>
      {/* searchbar UI */}
      <div className="search-container">
        <input type="text"
        placeholder="Search by name or symbol..."
        className="search-input"
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>

      </div>
      

      <div className="coin-grid">
        {filteredCoins.map((coin) => (
          <div key={coin.id} className="coin-card">
            <img src={coin.image} alt={coin.name} />
            <h3>{coin.name}</h3>
            <p className="price">${coin.current_price.toLocaleString()}</p>
            <p className={coin.price_change_percentage_24h > 0 ? "up" : "down"}>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoDashboard;
