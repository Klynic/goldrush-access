import React, { useState } from 'react';
import { TokenBalancesListView, NFTWalletTokenListView } from "@covalenthq/goldrush-kit";

const SecondPage = ({ address, selectedOption }) => {
  const [isTokenBalancesVisible, setIsTokenBalancesVisible] = useState(true);
  const [isNFTWalletTokenListVisible, setIsNFTWalletTokenListVisible] = useState(true);

  return (
    <div>
      <h1>Token Balances</h1>
      <button onClick={() => setIsTokenBalancesVisible(!isTokenBalancesVisible)}>
        {isTokenBalancesVisible ? 'Minimize' : 'Show'}
      </button>
      <div style={{ display: isTokenBalancesVisible ? 'block' : 'none' }}>
        <TokenBalancesListView
          chain_names={[
            "eth-mainnet",
            "matic-mainnet",
            "bsc-mainnet",
            "avalanche-mainnet",
            "optimism-mainnet",
          ]}
          address={address}
        />
      </div>

      <h2>NFTWallet Token List</h2>
      <button onClick={() => setIsNFTWalletTokenListVisible(!isNFTWalletTokenListVisible)}>
        {isNFTWalletTokenListVisible ? 'Minimize' : 'Show'}
      </button>
      <div style={{ display: isNFTWalletTokenListVisible ? 'block' : 'none' }}>
        <NFTWalletTokenListView
          address={address}
          chain_names={[
            "eth-mainnet",
            "matic-mainnet",
            "bsc-mainnet",
            "avalanche-mainnet",
            "optimism-mainnet",
          ]}
        />
      </div>
    </div>
  );
};

export default SecondPage;
