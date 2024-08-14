import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Prefrences from "./pages/Prefrences";
import Navigation from "./components/Navigation";


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prefrences" element={<Prefrences />} />
      </Routes>
    </Router>
  );
}

export default App;
