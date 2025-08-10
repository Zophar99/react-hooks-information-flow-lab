import React from "react";

function Header({ onDarkModeClick }) {
  return (
    <header>
      <h1>
        Grocery List
        <span className="logo" role="img">
          🛒
        </span>
      </h1>
      <button onClick={onDarkModeClick}>
        Toggle Dark Mode
      </button>
    </header>
  );
}

export default Header;
