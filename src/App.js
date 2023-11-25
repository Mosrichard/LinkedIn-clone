import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" Component={Login}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
