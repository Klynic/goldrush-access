// src/App.js
import React, { useState } from 'react';
import './App.css';
import AddressForm from './AddressForm';
import SecondPage from './SecondPage';
import {
  GoldRushProvider,
  TokenBalancesListView,
} from "@covalenthq/goldrush-kit";
import "@covalenthq/goldrush-kit/styles.css";

function App() {
  const [address, setAddress] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [showSecondPage, setShowSecondPage] = useState(false);

  const handleSubmit = () => {
    // Add any additional logic here, e.g., API calls for validation

    // For simplicity, just show the SecondPage when the form is submitted
    setShowSecondPage(true);
  };

  return (
    <div className="App">
      {!showSecondPage ? (
        <GoldRushProvider
          apikey={process.env.REACT_APP_API_BESTIE}
          mode="dark"
          color="blue"
        >
          <AddressForm
            address={address}
            setAddress={setAddress}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            handleSubmit={handleSubmit}
          />
        </GoldRushProvider>
      ) : (
        <GoldRushProvider
          apikey={process.env.REACT_APP_API_BESTIE}
          mode="dark"
          color="blue"
        >
          <SecondPage address={address} selectedOption={selectedOption} />
        </GoldRushProvider>
      )}
    </div>
  );
}

export default App;
