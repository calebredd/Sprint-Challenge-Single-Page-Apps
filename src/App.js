import React, { useState } from "react";

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import Results from "./components/Results.js";

import "semantic-ui-css/semantic.min.css";

export default function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="main">
      <Header />
      <div className="body">
        <Results results={results} setResults={setResults} />
        <TabNav results={results} setResults={setResults} />
        <AppRouter />
      </div>
    </div>
  );
}
