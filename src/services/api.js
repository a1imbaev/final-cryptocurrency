import axios from 'axios';

export const fetchCryptocurrencies = async () => {
  const response = await axios.get('https://api.coinlore.net/api/tickers/');
  return response.data.data;
};
