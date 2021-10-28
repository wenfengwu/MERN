import "./App.css";
import React from "react";
import PersonCard from "./components/nameTag";

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName="Doe"
        lastName="Jane"
        age={45}
        hairColor="Black"
      ></PersonCard>
      <PersonCard
        firstName="Smith"
        lastName="John"
        age={88}
        hairColor="Brown"
      ></PersonCard>
      <PersonCard
        firstName="Fillmore"
        lastName="Millard"
        age={50}
        hairColor="Brown"
      ></PersonCard>
      <PersonCard
        firstName="Smith"
        lastName="Maria"
        age={62}
        hairColor="Brown"
      ></PersonCard>
    </div>
  );
}

export default App;
