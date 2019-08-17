import React from "react";

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";

import "semantic-ui-css/semantic.min.css";

export default function App() {
  return (
    <div className="main">
      <Header />
      <div className="body">
        <TabNav />
        <AppRouter />
      </div>
    </div>
  );
}
