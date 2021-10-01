import React from "react";
import { PortfolioWebsite } from "./ProjectPetComponent/PortfolioWebsite";
import { StoreTemplate } from "./ProjectPetComponent/StoreTemplate";
import CekicoStore from "./ProjectPetComponent/CekicoStore";
import RarityAdventure from "./ProjectPetComponent/RarityAdventure";
import TradingBot from "./ProjectPetComponent/TradingBot";
import LoopMondo from "./ProjectPetComponent/LoopMondo";
import TreoBamboo from "./ProjectPetComponent/TreoBamboo";
import { Route, Switch } from "react-router-dom";

export class ProjectShowing extends React.Component {
  render() {
    return (
      <div id="projectShowing">
        <Switch>
          <Route
            path="/projectpets/portfolioWebsite"
            component={PortfolioWebsite}
          />
          <Route path="/projectpets/storeTemplate" component={StoreTemplate} />
          <Route path="/projectpets/cekicoStore" component={CekicoStore} />
          <Route
            path="/projectpets/rarityAdventure"
            component={RarityAdventure}
          />
          <Route path="/projectpets/binanceTradingBot" component={TradingBot} />
          <Route path="/projectpets/loopMondo" component={LoopMondo} />
          <Route path="/projectpets/treoBamboo" component={TreoBamboo} />
        </Switch>
      </div>
    );
  }
}
