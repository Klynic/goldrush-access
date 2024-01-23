import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CenteredInput from './CenteredInput';
import {
  GoldRushProvider,
  TokenBalancesListView,
} from '@covalenthq/goldrush-kit';
import '@covalenthq/goldrush-kit/styles.css';

function App() {
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    if (address) {
      window.location.href = `/token-balances/${address}`;
    }
  };

  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#00D8D5' }}>
        {/* ... other components ... */}
        <CenteredInput onChange={(e) => setAddress(e.target.value)} />
        <button onClick={handleSubmit}>View Token Balances</button>
        {/* ... other components ... */}
      </div>
      <Routes>
        <Route
          path="/token-balances/:address"
          element={
            <GoldRushProvider
              apikey={process.env.REACT_APP_API_BESTIE}
              mode="dark"
              color="blue"
            >
              <TokenBalancesListView chain_names={["eth-mainnet"]} address={address} />
            </GoldRushProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const TokenBalancesView = ({ address }) => {
  return (
    <GoldRushProvider
      apikey={process.env.REACT_APP_API_BESTIE}
      mode="dark"
      color="blue"
    >
      <TokenBalancesListView chain_names={["eth-mainnet"]} address={address} />
    </GoldRushProvider>
  );
};

export default App;
