import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav>
        <ul className="header">
          <li>Home</li>
          <li>Store</li>
          <li>About</li>
        </ul>
      </nav>
      <div>
        <h1>The Generics</h1>
      </div>
    </div>
  );
};

export default Header;
