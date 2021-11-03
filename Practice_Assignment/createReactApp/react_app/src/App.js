import "./App.css";
import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SearchStarWars from "./components/SearchStarWars";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SearchStarWars />
        </Route>
        <Route path="/:userSelection/:userId">
          <SearchStarWars />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
    
export default App;