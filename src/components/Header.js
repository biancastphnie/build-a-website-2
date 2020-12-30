import React from "react";

function Header() {
  return (
    <header>
      <div>
        <h1>weather app</h1>
      </div>
      <nav>
        <a href="/?city=Jakarta"> City Name </a>
        <a href="/?city=Seattle"> City Name </a>
        <a href="/?city=Tokyo"> City Name </a>
        <a href="/?city=Seoul"> City Name </a>
      </nav>
    </header>
  );
}

export default Header;
