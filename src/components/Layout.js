import React from "react";

function components({ children }) {
  return (
    <div class="container-fluid">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Geonames
        </a>
      </nav>
      {children}
    </div>
  );
}

export default components;
