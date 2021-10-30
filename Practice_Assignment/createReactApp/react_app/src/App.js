import "./App.css";
import React, {useState} from "react";
import BoxGenerate from "./components/BoxGenerate";
import BoxStyle from "./components/BoxStyle";

function App() {
  const [currentBoxs, setCurrentBoxs] = useState([]);

  const addBox = (box) => {
    // const boxList = [...currentBoxs];
    // boxList.push(box);
    // setCurrentBoxs(boxList);
    setCurrentBoxs([...currentBoxs, box]);
  }

  return(
    <>
        <BoxGenerate addBox = {addBox}/>
        {/* {JSON.stringify(currentBoxs)} */}
        <div>
            {currentBoxs.map((box, idx) => <BoxStyle key = {idx} color = {box.color} width = {box.width}/>)}
        </div>
    </>
  );
}

export default App;
