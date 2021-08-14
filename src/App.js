import { Route, Switch } from "react-router-dom";
import Header from "./parts/Header";
import Navbar from "./parts/Navbar";
import Overview from "./pages/Overview";
import DexAnalytics from "./pages/DexAnalytics";
import LiquidityPoolData from "./pages/LiquidityPoolData";
import NFTAnalyticData from "./pages/NFTAnalyticData";
import Token from "./pages/Token";
import YieldFarming from "./pages/YieldFarming";
function App() {
  return (
    <div className="app header-default side-nav-dark">
      <Header />
      <Navbar />
      <Switch>
        <Route path="/yield-farming">
          <YieldFarming />
        </Route>
        <Route path="/liquidity-pool-data">
          <LiquidityPoolData />
        </Route>
        <Route path="/dex-analytics">
          <DexAnalytics />
        </Route>
        <Route path="/nft-analytic-data">
          <NFTAnalyticData />
        </Route>
        <Route path="/token">
          <Token />
        </Route>
        <Route path="/">
          <Overview />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
