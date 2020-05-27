import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Switch></Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
