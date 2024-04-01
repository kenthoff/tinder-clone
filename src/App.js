import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/test" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        {/* Header */}
        {/* Tinder Cards */}
        {/* Buttons */}
        {/* Chat Screens */}
        {/* Individual Chat Screen */}
      </Router>
    </div>
  );
}

export default App;
