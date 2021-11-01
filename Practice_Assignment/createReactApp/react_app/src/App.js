import "./App.css";
import React, {useState} from "react";
import Wrapper from "./components/context/Wrapper";
import Navbar from "./components/Navbar";
import FormWrapper from "./components/FormWrapper";

function App() {

  const [name, setName] = useState("");

  return(
        <Wrapper.Provider value = {{name, setName}}>
          <Navbar />
          <FormWrapper />
        </Wrapper.Provider>
  );
}

export default App;
