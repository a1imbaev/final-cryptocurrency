import React, { useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import './CryptoItem.css';

function CryptoItem({ crypto }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li className="crypto-item" onClick={() => setIsOpen(!isOpen)}>
        <span className="crypto-name">{crypto.name}</span>
        <span className="toggle-icon">{isOpen ? '-' : '+'}</span>
      </li>
      {isOpen && (
        <div className="crypto-details">
          <p><strong>Symbol:</strong> {crypto.symbol}</p>
          <p><strong>Price USD:</strong> {crypto.price_usd}</p>
          <p><strong>Price BTC:</strong> {crypto.price_btc}</p>
          <p className="tooltip-target" data-tooltip-id={`tooltip-${crypto.id}`}>
            <strong>Market Cap USD:</strong> {crypto.market_cap_usd}
          </p>
          <ReactTooltip
            id={`tooltip-${crypto.id}`}
            place="top"
            effect="solid"
            className="custom-tooltip"
          >
            The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price.
          </ReactTooltip>
          <p>
            <strong>Percent Change 24H:</strong>{' '}
            <span className={crypto.percent_change_24h > 0 ? 'positive' : 'negative'}>
              {crypto.percent_change_24h}%
            </span>
          </p>
        </div>
      )}
    </>
  );
}

export default CryptoItem;
