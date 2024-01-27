// src/SecondPage.js
import React from 'react';
import { TokenBalancesListView,NFTWalletTokenListView } from "@covalenthq/goldrush-kit";

const SecondPage = ({ address, selectedOption }) => {
  return (
    <div>
      <h1>Token Balances</h1>
      <TokenBalancesListView
        chain_names={[
                  "eth-mainnet",
                  "matic-mainnet",
                  "bsc-mainnet",
                  "avalanche-mainnet",
                  "optimism-mainnet",
              ]}
        address={address}
      ></TokenBalancesListView>
      <h2>NFTWallet Token List</h2>
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
  );
};

export default SecondPage;
