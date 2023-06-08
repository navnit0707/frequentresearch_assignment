import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex w-full h-20 text-white bg-purple-600">
      <div className="float-left w-1/2 h-full mx-5 flex items-center justify-left">
        <Link to="/">FrequentSearch</Link>
      </div>
      <div className="float-right w-1/2 h-full mx-5  flex items-center justify-end">
        <Link to="/userdetails">UserDetails</Link>
      </div>
    </div>
  );
};

export default Header;
