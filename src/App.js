import React from "react";
import "./styles/styles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <Navbar />
        </header>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
};

export default App;
