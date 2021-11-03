import "./App.css";
import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SearchStarWars from "./components/SearchStarWars";

// const Location = (props) => {
//   const {city} = useParams();
//   let renderText = "";
//   if(city === "home"){
//     renderText = "Welcome";
//   }
//   else if(isNaN(city)){
//     renderText = `The word is: ${city}`;
//   }
//   else{
//     renderText = `The number is: ${city}`;
//   }
//   return (
//     <h1 style = {{textAlign: "center"}}>{renderText}</h1>
//   );
// }

// const Colorful = (props) => {

//   const {word, wordColor, bgColor} = useParams();
  

//   return (
    
//     <h1 style = {{color: wordColor, backgroundColor: bgColor, textAlign: "center"}}>The word is: {word}</h1>
//   )
// }
    
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