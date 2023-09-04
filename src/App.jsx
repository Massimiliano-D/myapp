import React from "react";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <div className="App">
      <ButtonComponent text="Clicca qui" />
      <ImageComponent
        src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
        alt="Sala gaming"
      />
    </div>
  );
}

export default App;
