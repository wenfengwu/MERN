import "./App.css";
import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SearchStarWars from "./components/SearchStarWars";
import DisplayStarWar from "./components/DisplayStarWar";

function App() {

  return (
    <BrowserRouter>
        <SearchStarWars />
      <Switch>
        <Route path="/:userSelection/:userId">
          <DisplayStarWar /> 
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
    
export default App;