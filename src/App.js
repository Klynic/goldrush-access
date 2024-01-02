import logo from './logo.svg';
import './App.css';
import { 
  GoldRushProvider, 
  TokenBalancesListView, 
} from "@covalenthq/goldrush-kit";
import "@covalenthq/goldrush-kit/styles.css";

function App() {
  return (
    <GoldRushProvider 
      apikey={process.env.REACT_APP_API_BESTIE} 
      mode="dark" 
      color="pink"
    >
     <TokenBalancesListView 
        address= "0x882E1dE551f96a01988951da1639a15E52E8266f" 
        chain_names= {["eth-mainnet"]}>
     </TokenBalancesListView>
    </GoldRushProvider>
  );
}

export default App;
