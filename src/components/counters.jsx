import React, { Component } from "react";
import Counter from "./counter";

const Counters = ({ onReset, onDelete, counter, onIncrement }) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counter.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={onDelete}
          onIncrement={onIncrement}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;
