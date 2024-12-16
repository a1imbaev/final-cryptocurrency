import React from 'react';
import './SearchBar.css';

function SearchBar({ cryptos, setFilteredCryptos }) {
  const handleInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = cryptos.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(query) ||
        crypto.symbol.toLowerCase().includes(query)
    );
    setFilteredCryptos(filtered);
  };

  return (
    <input
      type="text"
      placeholder="Search"
      onChange={handleInputChange}
      className="search-input"
    />
  );
}

export default SearchBar;
