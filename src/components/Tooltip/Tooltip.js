import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

const CryptoItem = ({ crypto }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div onClick={toggleAccordion}>
        {crypto.name} {isOpen ? '-' : '+'}
      </div>
      {isOpen && (
        <div>
          <p>Symbol: {crypto.symbol}</p>
          <p>Price USD: {crypto.price_usd}</p>
          <p>Price BTC: {crypto.price_btc}</p>
          {/* Tooltip для Market Cap */}
          <p data-tip="Market capitalization is calculated by multiplying the circulating supply with the current price">
            Market Cap USD: {crypto.market_cap_usd}
          </p>
          <ReactTooltip />
          {/* Цвет текста зависит от изменения цены */}
          <p style={{ color: crypto.percent_change_24h > 0 ? 'green' : 'red' }}>
            Percent Change 24H: {crypto.percent_change_24h}%
          </p>
        </div>
      )}
    </li>
  );
};

export default CryptoItem;
