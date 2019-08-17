import React from "react";
import { Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodesList from "./EpisodesList";

export default function AppRouter() {
  return (
    <div className="Route">
      <Route exact path="/" component={WelcomePage} />

      <Route path="/Characters" component={CharacterList} />

      <Route path="/Locations" component={LocationsList} />

      <Route path="/Episodes" component={EpisodesList} />
    </div>
  );
}
