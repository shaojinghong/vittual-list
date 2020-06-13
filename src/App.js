import React from "react";

import "./App.css";
import "normalize.css";
import "minireset.css";

import VirtualizedList from "./virtual-list";

function App() {
  return (
    <div className="App">
      <VirtualizedList />
    </div>
  );
}

export default App;
