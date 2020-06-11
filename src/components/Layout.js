import React from "react";

function components({ children }) {
  return (
    <div class="container-fluid">
      <nav class="navbar navbar-light bg-light mb-3">
        <p className="mb-0">Geonames</p>
      </nav>
      {children}
    </div>
  );
}

export default components;
