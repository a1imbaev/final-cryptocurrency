import React from 'react';
import './CryptoList.css';
import CryptoItem from '../CryptoItem/CryptoItem';

function CryptoList({ cryptos }) {
  return (
    <ul>
      {cryptos.map((crypto) => (
        <CryptoItem key={crypto.id} crypto={crypto} />
      ))}
    </ul>
  );
}

export default CryptoList;
