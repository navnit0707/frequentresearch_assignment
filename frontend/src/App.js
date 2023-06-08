import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./header";
import Body from "./body";
import UserDetails from "./userDetails";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/userdetails" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
