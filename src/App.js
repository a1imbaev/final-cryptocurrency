import React, { useEffect, useState } from 'react';
import CryptoList from './components/CryptoList/CryptoList';
import './App.css';

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const fetchCryptos = () => {
    setLoading(true);
    fetch('https://api.coinlore.net/api/tickers/')
      .then((res) => res.json())
      .then((data) => {
        setCryptos(data.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCryptos();
  }, []);

  // Добавляем фильтрацию по названию и символу
  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1 className="title">Cryptocurrency Prices</h1>
      <button className="update-button" onClick={fetchCryptos}>
        Update
      </button>
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <p className="loading">Updating...</p>
      ) : (
        <CryptoList cryptos={filteredCryptos} />
      )}
    </div>
  );
}

export default App;
