import React, { Component } from "react";

const Navbar = ({totalCounters}) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Counters
        </a>
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
