import React from "react";
import ReactDOM from "react-dom";
import ShoppingList from "./ShoppingList";
import moment from "moment";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>Hola amigos</h2>
      <ShoppingList day={moment().format("dddd")} />

      <ShoppingList day={moment().format("dddd")} />
      {/* Olga add year*/}

      <ShoppingList day={moment().format("dddd")} />
      {/* Miruna add hour */}
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
