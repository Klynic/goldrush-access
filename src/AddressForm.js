// src/AddressForm.js
import React from 'react';

const AddressForm = ({
  address,
  setAddress,
  selectedOption,
  setSelectedOption,
  handleSubmit,
}) => {
  return (
    <div>
      <h1>Portfolio Peek - by Klynic</h1>
      <label>
        Enter Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
    <h3>(Don't worry😎, your address is invisible.)</h3>
      </label>
      <br />
      <label>
        Select Option:
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="viewBalances">View Token Balances and NFTWalletTokenList,</option>
        </select>
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddressForm;
