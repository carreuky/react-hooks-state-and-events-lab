import React,{useState}from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [isDarkMode, setIsDarkMode] = useState(false);
const appClass = isDarkMode ? "App dark" : "App light"
const innerTxt = isDarkMode ? "App dark" : "App light"


const changeMode=()=>{
  console.log('rut')
  setIsDarkMode((isDarkMode)=>!isDarkMode)
}
  // replace 'false' with a state variable that can be toggled between true and false
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeMode}>{innerTxt} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
