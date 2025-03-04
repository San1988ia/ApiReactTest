import "./App.scss";
import React from "react";
import "./styles/App.scss";
import QuoteList from "./components/QuoteList";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>ApiReactTest</h1>
      <QuoteList />
    </div>
  );
};

export default App;
